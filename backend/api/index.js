const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));

// Rate limiting
const emailLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: { error: 'Too many requests' }
});

app.use(express.json({ limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Subscribe endpoint
app.post('/api/subscribe', emailLimiter, async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email' });
    }
    
    // Create email transporter with proper configuration
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT, 10), // ✅ FIXED: Convert to number
      secure: false, // Use STARTTLS for port 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Add these options for better reliability
      tls: {
        rejectUnauthorized: false // Allow self-signed certificates
      }
    });
    
    // Verify connection configuration (optional but helpful)
    await transporter.verify();
    console.log('SMTP connection verified successfully');
    
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Welcome to Q2Z Newsletter',
      text: `Thank you for subscribing to QuantZen newsletter!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">Welcome to Q2Z Newsletter!</h2>
          <p>Thank you for subscribing to the QuantZen newsletter.</p>
          <p>You'll now receive:</p>
          <ul>
            <li>Weekly updates on post-quantum security</li>
            <li>Web3 risk insights and analysis</li>
            <li>Practical migration guidance</li>
            <li>Latest QuantZen news and developments</li>
          </ul>
          <p>Stay quantum-safe!</p>
          <p><strong>The QuantZen Team</strong></p>
        </div>
      `
    });
    
    console.log(`✅ Subscription email sent successfully to: ${email}`);
    
    res.json({ 
      success: true, 
      message: 'Thank you for subscribing! Please check your email for confirmation.' 
    });
  } catch (error) {
    console.error('❌ Subscription error:', error);
    
    // More detailed error response
    if (error.code === 'EAUTH') {
      return res.status(500).json({ 
        error: 'Email authentication failed. Please contact support.' 
      });
    }
    
    if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      return res.status(500).json({ 
        error: 'Failed to connect to email server. Please try again later.' 
      });
    }
    
    res.status(500).json({ 
      error: 'Failed to send confirmation email. Please try again later.',
      details: process.env.NODE_ENV === 'production' ? undefined : error.message
    });
  }
});

module.exports = app;
