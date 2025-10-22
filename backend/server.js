const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Rate limiting
const emailLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: process.env.MAX_REQUESTS_PER_MINUTE || 5,
  message: {
    error: 'Too many subscription requests from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Email transporter configuration for Microsoft 365/Outlook
const createEmailTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false
    }
  });
};

// Email template
const getSubscriptionEmailTemplate = (email) => {
  return {
    from: '"QuantZen Team" <info@zenithstudio.live>',  // ✅ UPDATED: Company email
    to: email,
    subject: '🚀 Welcome to Q2Z Newsletter - Thank You for Subscribing!',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Q2Z Newsletter</title>
      </head>
      <body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 40px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h1 style="color: #6366f1; text-align: center; margin-bottom: 30px;">🎉 Welcome to Q2Z Newsletter!</h1>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">Dear Valued Subscriber,</p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Thank you for subscribing to the <strong>Q2Z Newsletter</strong> from <strong>QuantZen</strong>!
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            We're excited to have you join our community. You'll now receive:
          </p>
          
          <ul style="font-size: 16px; line-height: 1.8; color: #333;">
            <li>📧 <strong>Weekly updates</strong> on post-quantum security</li>
            <li>🔐 <strong>Web3 risk insights</strong> and analysis</li>
            <li>🛠️ <strong>Practical migration guidance</strong></li>
            <li>🚀 <strong>Latest QuantZen news</strong> and developments</li>
          </ul>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 30px 0;">
            <h3 style="color: #6366f1; margin-top: 0;">📅 What to expect:</h3>
            <p style="font-size: 14px; color: #666; margin: 10px 0;">
              <strong>Your Friday 5-minute read</strong> delivered to <em>${email}</em>
            </p>
            <p style="font-size: 14px; color: #666; margin: 5px 0;">🔒 Quantum-safe security insights</p>
            <p style="font-size: 14px; color: #666; margin: 5px 0;">🚀 Industry updates and best practices</p>
            <p style="font-size: 14px; color: #666; margin: 5px 0;">💡 Expert tips and recommendations</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            If you have any questions or feedback, feel free to reply to this email. We'd love to hear from you!
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333; margin-top: 30px;">
            <strong>Welcome aboard!</strong>
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Best regards,<br>
            <strong>The QuantZen Team</strong>
          </p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 40px 0;">
          
          <p style="font-size: 12px; color: #999; text-align: center;">
            You received this email because you subscribed to our newsletter at QuantZen.<br>
            If you wish to unsubscribe, please contact us at info@zenithstudio.live
          </p>
          
          <p style="font-size: 12px; color: #999; text-align: center; margin-top: 20px;">
            © 2025 QuantZen. All rights reserved.
          </p>
        </div>
      </body>
      </html>
    `,
    text: `
Welcome to Q2Z Newsletter!

Dear Valued Subscriber,

Thank you for subscribing to the Q2Z Newsletter from QuantZen!

We're excited to have you join our community. You'll now receive:
- Weekly updates on post-quantum security
- Web3 risk insights and analysis  
- Practical migration guidance
- Latest QuantZen news and developments

What to expect:
📧 Your Friday 5-minute read delivered to ${email}
🔒 Quantum-safe security insights
🚀 Industry updates and best practices
💡 Expert tips and recommendations

If you have any questions or feedback, feel free to reply to this email.

Welcome aboard!

Best regards,
The QuantZen Team

---
You received this email because you subscribed to our newsletter at QuantZen.
If you wish to unsubscribe, please contact us at info@zenithstudio.live

© 2025 QuantZen. All rights reserved.
    `
  };
};

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

// Subscribe endpoint
app.post('/api/subscribe', emailLimiter, async (req, res) => {
  try {
    const { email } = req.body;
    
    // Validate email
    if (!email) {
      return res.status(400).json({
        error: 'Email is required'
      });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Please provide a valid email address'
      });
    }
    
    // Check if email service is configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('❌ Email service not configured');
      return res.status(500).json({
        error: 'Email service is not configured'
      });
    }
    
    console.log('✅ Creating email transporter...');
    
    // Create email transporter
    const transporter = createEmailTransporter();
    
    console.log('✅ Verifying SMTP connection...');
    
    // Verify connection
    await transporter.verify();
    console.log('✅ SMTP connection verified');
    
    console.log(`✅ Sending email to: ${email}`);
    
    // Send welcome email
    const emailOptions = getSubscriptionEmailTemplate(email);
    await transporter.sendMail(emailOptions);
    
    console.log(`✅ Subscription email sent successfully to: ${email}`);
    
    res.json({
      success: true,
      message: 'Thank you for subscribing! Please check your email for confirmation.'
    });
  } catch (error) {
    console.error('❌ Subscription error:', error);
    console.error('Error details:', error.message);
    
    // Handle specific errors
    if (error.code === 'EAUTH') {
      return res.status(500).json({
        error: 'Email authentication failed. Please check email configuration.'
      });
    }
    
    if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      return res.status(500).json({
        error: 'Failed to connect to email server. Please try again later.'
      });
    }
    
    res.status(500).json({
      error: 'Failed to send confirmation email. Please try again later.',
      details: process.env.NODE_ENV !== 'production' ? error.message : undefined
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Unhandled error:', err.stack);
  res.status(500).json({
    error: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found'
  });
});

// Start server (only for local development)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📧 Email service: smtp.office365.com`);
    console.log(`📧 Email user: ${process.env.EMAIL_USER || 'Not configured'}`);
    console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
    console.log(`🔧 Health check: http://localhost:${PORT}/health`);
    console.log(`✅ Server ready for connections!`);
  });
}

// Export for Vercel
module.exports = app;
