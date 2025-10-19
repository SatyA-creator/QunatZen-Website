const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration - FIXED to explicitly allow your frontend
app.use(cors({
  origin: [
    'https://www.quantzen.live',           // ✅ ADD THIS
    'https://quantzen.live',  
    'https://qunat-zen-website-smoky.vercel.app',
    'http://localhost:5173',
    'http://localhost:3000',
    process.env.FRONTEND_URL
  ].filter(Boolean), // Remove undefined values
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Handle preflight requests
app.options('*', cors());

// Rate limiting
const emailLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: { error: 'Too many requests' },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  console.log('Origin:', req.get('origin'));
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    env: {
      hasEmailHost: !!process.env.EMAIL_HOST,
      hasEmailUser: !!process.env.EMAIL_USER,
      hasEmailPass: !!process.env.EMAIL_PASS,
      hasEmailFrom: !!process.env.EMAIL_FROM,
      hasFrontendUrl: !!process.env.FRONTEND_URL,
      emailPort: process.env.EMAIL_PORT,
      nodeEnv: process.env.NODE_ENV
    }
  });
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'API is working!',
    timestamp: new Date().toISOString()
  });
});

// Subscribe endpoint
app.post('/api/subscribe', emailLimiter, async (req, res) => {
  try {
    console.log('📧 Subscription request received');
    console.log('Request body:', req.body);
    
    const { email } = req.body;
    
    if (!email) {
      console.log('❌ No email provided');
      return res.status(400).json({ error: 'Email is required' });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Invalid email format:', email);
      return res.status(400).json({ error: 'Invalid email format' });
    }
    
    // Check if email service is configured
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('❌ Email service not configured');
      return res.status(500).json({ 
        error: 'Email service is not configured' 
      });
    }
    
    console.log('✅ Creating email transporter...');
    
    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587', 10),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    
    console.log('✅ Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified');
    
    console.log('✅ Sending email to:', email);
    
    // Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Q2Z Newsletter',
      text: 'Thank you for subscribing to QuantZen newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">🎉 Welcome to Q2Z Newsletter!</h2>
          <p>Thank you for subscribing to the <strong>QuantZen newsletter</strong>.</p>
          <p>You'll now receive:</p>
          <ul>
            <li>📧 Weekly updates on post-quantum security</li>
            <li>🔐 Web3 risk insights and analysis</li>
            <li>🛠️ Practical migration guidance</li>
            <li>🚀 Latest QuantZen news and developments</li>
          </ul>
          <p><strong>Stay quantum-safe!</strong></p>
          <p>Best regards,<br><strong>The QuantZen Team</strong></p>
        </div>
      `
    });
    
    console.log('✅ Email sent successfully! Message ID:', info.messageId);
    
    res.json({ 
      success: true, 
      message: 'Thank you for subscribing! Please check your email for confirmation.' 
    });
    
  } catch (error) {
    console.error('❌ Subscription error:', error.message);
    console.error('Error stack:', error.stack);
    
    if (error.code === 'EAUTH') {
      return res.status(500).json({ 
        error: 'Email authentication failed' 
      });
    }
    
    if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      return res.status(500).json({ 
        error: 'Failed to connect to email server' 
      });
    }
    
    res.status(500).json({ 
      error: 'Failed to send confirmation email',
      details: process.env.NODE_ENV !== 'production' ? error.message : undefined
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV !== 'production' ? err.message : undefined
  });
});

// 404 handler - MUST be last
app.use('*', (req, res) => {
  console.log('❌ 404 - Route not found:', req.originalUrl);
  res.status(404).json({ 
    error: 'Route not found',
    path: req.originalUrl 
  });
});

// Export for Vercel
module.exports = app;
