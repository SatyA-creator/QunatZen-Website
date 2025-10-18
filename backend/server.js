import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from the correct path
dotenv.config({ path: join(__dirname, '.env') });

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

// Email transporter configuration
const createEmailTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Email template
const getSubscriptionEmailTemplate = (email) => {
  return {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Welcome to Q2Z Newsletter - Thank You for Subscribing!',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Q2Z Newsletter</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .highlight { background: #667eea; color: white; padding: 15px; border-radius: 5px; margin: 20px 0; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
          .button { display: inline-block; background: #667eea; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin: 10px 0; }
          ul { padding-left: 20px; }
          li { margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🎉 Welcome to Q2Z Newsletter!</h1>
          <p>Thank you for joining the QuantZen community</p>
        </div>
        
        <div class="content">
          <p>Dear Valued Subscriber,</p>
          
          <p>Thank you for subscribing to the <strong>Q2Z Newsletter</strong> from <strong>QuantZen</strong>!</p>
          
          <p>We're excited to have you join our community. You'll now receive:</p>
          
          <ul>
            <li>📧 <strong>Weekly updates</strong> on post-quantum security</li>
            <li>🔐 <strong>Web3 risk insights</strong> and analysis</li>
            <li>🛠️ <strong>Practical migration guidance</strong></li>
            <li>🚀 <strong>Latest QuantZen news</strong> and developments</li>
          </ul>
          
          <div class="highlight">
            <h3>📅 What to expect:</h3>
            <p><strong>Your Friday 5-minute read</strong> delivered to <em>${email}</em></p>
            <p>🔒 Quantum-safe security insights<br>
            🚀 Industry updates and best practices<br>
            💡 Expert tips and recommendations</p>
          </div>
          
          <p>If you have any questions or feedback, feel free to reply to this email. We'd love to hear from you!</p>
          
          <p><strong>Welcome aboard!</strong></p>
          
          <p>Best regards,<br>
          <strong>The QuantZen Team</strong></p>
        </div>
        
        <div class="footer">
          <p>You received this email because you subscribed to our newsletter at QuantZen.<br>
          If you wish to unsubscribe, please contact us at support@quantzen.com</p>
          <p>&copy; 2025 QuantZen. All rights reserved.</p>
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
If you wish to unsubscribe, please contact us at support@quantzen.com
© 2025 QuantZen. All rights reserved.
    `
  };
};

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
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
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email service not configured');
      return res.status(500).json({
        error: 'Email service is not configured'
      });
    }

    // Create email transporter
    const transporter = createEmailTransporter();

    // Verify connection
    await transporter.verify();

    // Send welcome email
    const emailOptions = getSubscriptionEmailTemplate(email);
    await transporter.sendMail(emailOptions);

    console.log(`Subscription email sent successfully to: ${email}`);

    res.json({
      success: true,
      message: 'Thank you for subscribing! Please check your email for confirmation.'
    });

  } catch (error) {
    console.error('Subscription error:', error);
    
    // Handle specific errors
    if (error.code === 'EAUTH') {
      return res.status(500).json({
        error: 'Email authentication failed. Please check email configuration.'
      });
    }
    
    if (error.code === 'ECONNECTION') {
      return res.status(500).json({
        error: 'Failed to connect to email server. Please try again later.'
      });
    }

    res.status(500).json({
      error: 'Failed to send confirmation email. Please try again later.'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
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

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email service: ${process.env.EMAIL_HOST || 'Not configured'}`);
  console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
  console.log(`🔧 Health check: http://localhost:${PORT}/health`);
  console.log(`✅ Server ready for connections!`);
});