import nodemailer from 'nodemailer';

// Email subscription endpoint for Vercel serverless functions
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Create email transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'satyapriyam7@gmail.com',
        pass: process.env.EMAIL_PASS || 'yzsakkqdpsqhhjoi'
      }
    });

    // Email template
    const mailOptions = {
      from: '"QuantZen Team" <satyapriyam7@gmail.com>',
      to: email,
      subject: '🚀 Welcome to the QuantZen Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Welcome to QuantZen!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">The Future of Quantum-Safe Technology</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Thank you for subscribing! 🎉</h2>
            <p style="color: #666; line-height: 1.6;">
              We're excited to have you on board! You'll now receive the latest updates about:
            </p>
            
            <ul style="color: #666; line-height: 1.8; padding-left: 20px;">
              <li><strong>Quantum-Safe Technology</strong> developments</li>
              <li><strong>Security insights</strong> and best practices</li>
              <li><strong>Product updates</strong> and new features</li>
              <li><strong>Industry news</strong> and breakthrough announcements</li>
            </ul>
            
            <div style="background: #f8f9ff; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #667eea;">
              <p style="margin: 0; color: #555; font-style: italic;">
                "Preparing for the quantum future, one secure solution at a time."
              </p>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              Stay tuned for our upcoming newsletters filled with valuable insights, exclusive content, and the latest developments in quantum-safe technology.
            </p>
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #999; font-size: 14px;">
                Thank you for joining the QuantZen community!<br>
                <strong>The QuantZen Team</strong>
              </p>
            </div>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    console.log(`📧 Newsletter subscription email sent to: ${email}`);
    
    res.status(200).json({ 
      success: true, 
      message: 'Thank you for subscribing! Please check your email for confirmation.' 
    });

  } catch (error) {
    console.error('❌ Newsletter subscription error:', error);
    res.status(500).json({ 
      error: 'Failed to subscribe to newsletter',
      message: error.message 
    });
  }
}