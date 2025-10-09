# Email Subscription Setup Guide

This guide explains how to set up the email subscription functionality using a Node.js backend with Nodemailer.

## Architecture Overview

- **Frontend**: React/Vite application with subscription form
- **Backend**: Express.js API with Nodemailer for sending emails
- **Email Service**: Any SMTP provider (Gmail, Outlook, Yahoo, custom SMTP)

## Quick Setup

### 1. Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   ```bash
   cp .env.example .env
   ```

4. **Edit `.env` file with your email settings:**
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_FROM=your-email@gmail.com
   PORT=3001
   FRONTEND_URL=http://localhost:5173
   ```

5. **Start the backend server:**
   ```bash
   npm run dev
   ```

### 2. Frontend Setup

1. **Navigate to main directory:**
   ```bash
   cd ..
   ```

2. **Configure frontend environment:**
   ```bash
   cp .env.example .env
   ```

3. **Start the frontend:**
   ```bash
   npm run dev
   ```

## Email Provider Configuration

### Gmail (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password:**
   - Go to Google Account → Security
   - Under "Signing in to Google" → App passwords
   - Generate password for "Mail"
   - Use this password in `EMAIL_PASS`

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

### Outlook/Hotmail

```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

### Yahoo

```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-app-password
```

### Custom SMTP

```env
EMAIL_HOST=mail.yourdomain.com
EMAIL_PORT=587
EMAIL_USER=noreply@yourdomain.com
EMAIL_PASS=your-password
```

## Testing

1. **Test backend health:**
   ```bash
   curl http://localhost:3001/health
   ```

2. **Test subscription API:**
   ```bash
   curl -X POST http://localhost:3001/api/subscribe \
     -H "Content-Type: application/json" \
     -d '{"email": "test@example.com"}'
   ```

3. **Test frontend:**
   - Open http://localhost:5173
   - Navigate to the subscription section
   - Enter your email and click Subscribe
   - Check your email for the confirmation message

## Deployment

### Backend Deployment

**Option 1: Railway (Recommended)**
1. Connect GitHub repo to Railway
2. Set root directory to `/backend`
3. Configure environment variables in Railway dashboard

**Option 2: Vercel**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in backend directory
3. Set environment variables in Vercel dashboard

**Option 3: Heroku**
1. Create Heroku app
2. Set buildpack to Node.js
3. Configure environment variables
4. Deploy using Git

### Frontend Deployment

**Option 1: Vercel**
1. Connect GitHub repo to Vercel
2. Set `VITE_API_URL` to your deployed backend URL
3. Deploy automatically

**Option 2: Netlify**
1. Connect GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Configure `VITE_API_URL` environment variable

## Environment Variables

### Backend (.env)
- `EMAIL_HOST` - SMTP server hostname
- `EMAIL_PORT` - SMTP server port (usually 587)
- `EMAIL_USER` - Email account username
- `EMAIL_PASS` - Email account password/app password
- `EMAIL_FROM` - From email address
- `PORT` - Server port (default: 3001)
- `FRONTEND_URL` - Frontend URL for CORS
- `MAX_REQUESTS_PER_MINUTE` - Rate limiting (default: 5)

### Frontend (.env)
- `VITE_API_URL` - Backend API URL

## Features

- ✅ **Email Validation**: Client and server-side validation
- ✅ **Rate Limiting**: Prevents spam (5 requests per minute)
- ✅ **Security**: CORS, Helmet, input sanitization
- ✅ **Error Handling**: Comprehensive error messages
- ✅ **Toast Notifications**: User feedback on success/failure
- ✅ **Loading States**: Visual feedback during submission
- ✅ **Beautiful Email Template**: HTML and text versions
- ✅ **Responsive**: Works on all devices

## Troubleshooting

### Common Issues

1. **"Unable to connect to server"**
   - Check if backend is running on correct port
   - Verify `VITE_API_URL` in frontend `.env`
   - Check for CORS issues

2. **"Email authentication failed"**
   - Verify email credentials
   - For Gmail, ensure 2FA is enabled and using App Password
   - Check EMAIL_HOST and EMAIL_PORT

3. **Emails not received**
   - Check spam/junk folder
   - Verify EMAIL_FROM address
   - Check backend logs for errors

4. **Rate limiting errors**
   - Wait 1 minute between requests
   - Adjust `MAX_REQUESTS_PER_MINUTE` if needed

### Debug Steps

1. **Check backend logs:**
   ```bash
   cd backend && npm run dev
   ```

2. **Test API directly:**
   ```bash
   curl http://localhost:3001/health
   ```

3. **Check browser console** for frontend errors

4. **Verify environment variables** are loaded correctly

## Security Considerations

- Use environment variables for sensitive data
- Enable 2FA and app passwords for email accounts
- Set up rate limiting to prevent abuse
- Use HTTPS in production
- Regularly update dependencies
- Monitor email sending limits

## Support

If you encounter issues:
1. Check this README first
2. Review backend logs
3. Test API endpoints directly
4. Verify environment configuration
5. Check email provider settings