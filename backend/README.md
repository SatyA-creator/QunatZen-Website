# Backend API for Subscription Service

This is a simple Express.js backend API that handles email subscriptions using Nodemailer.

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Edit `.env` file with your email configuration:

```env
# Email Configuration (for Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com

# Server Configuration
PORT=3001
NODE_ENV=development

# CORS Configuration
FRONTEND_URL=http://localhost:5173

# Rate Limiting
MAX_REQUESTS_PER_MINUTE=5
```

### 3. Gmail Setup (Recommended)

For Gmail, you'll need to use an "App Password" instead of your regular password:

1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account settings → Security
3. Under "Signing in to Google", select "App passwords"
4. Generate a new app password for "Mail"
5. Use this app password in the `EMAIL_PASS` field

### 4. Other Email Providers

For other email providers, update the SMTP settings:

**Outlook/Hotmail:**
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
```

**Yahoo:**
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
```

**Custom SMTP:**
```env
EMAIL_HOST=your-smtp-server.com
EMAIL_PORT=587
```

### 5. Start the Server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:3001`

## API Endpoints

### POST /api/subscribe

Subscribe a user to the newsletter.

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Thank you for subscribing! Please check your email for confirmation."
}
```

**Error Response:**
```json
{
  "error": "Please provide a valid email address"
}
```

### GET /health

Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2025-10-09T12:00:00.000Z"
}
```

## Security Features

- **Rate Limiting**: Max 5 requests per minute per IP
- **CORS**: Configured for your frontend URL
- **Helmet**: Security headers
- **Input Validation**: Email format validation
- **Error Handling**: Comprehensive error responses

## Testing

Test the API using curl:

```bash
# Test subscription
curl -X POST http://localhost:3001/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'

# Test health check
curl http://localhost:3001/health
```

## Deployment

### Option 1: Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the backend directory
3. Set environment variables in Vercel dashboard

### Option 2: Railway
1. Connect your GitHub repo to Railway
2. Set the root directory to `/backend`
3. Configure environment variables

### Option 3: Heroku
1. Create a Heroku app
2. Set buildpack to Node.js
3. Configure environment variables
4. Deploy using Git

## Environment Variables for Production

Make sure to set these in your deployment platform:

- `EMAIL_HOST`
- `EMAIL_PORT`
- `EMAIL_USER`
- `EMAIL_PASS`
- `EMAIL_FROM`
- `PORT` (usually set automatically)
- `NODE_ENV=production`
- `FRONTEND_URL` (your deployed frontend URL)
- `MAX_REQUESTS_PER_MINUTE`

## Troubleshooting

### Common Issues:

1. **"Email authentication failed"**
   - Check email credentials
   - For Gmail, ensure you're using an App Password
   - Verify 2FA is enabled for Gmail

2. **"Failed to connect to email server"**
   - Check EMAIL_HOST and EMAIL_PORT
   - Verify network connectivity
   - Check firewall settings

3. **CORS errors**
   - Update FRONTEND_URL in .env
   - Check that frontend is running on the specified URL

4. **Rate limiting**
   - Wait a minute before trying again
   - Adjust MAX_REQUESTS_PER_MINUTE if needed