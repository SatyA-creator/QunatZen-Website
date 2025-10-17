# QuantZen Backend - Deployment Configurations

This directory contains everything needed to deploy your backend API.

## 📁 Files Overview

- `server.js` - Main Express application
- `package.json` - Dependencies and scripts
- `.env` - Local environment variables (keep private!)
- `.env.example` - Template for environment variables
- `Dockerfile` - For container deployments
- `vercel.json` - Vercel deployment config
- `render.yaml` - Render deployment config

## 🚀 Quick Deploy Commands

### Test Locally
```bash
npm install
npm start
```

Visit: http://localhost:3001/health

### Deploy to Render (Easiest)
Just push to GitHub and connect your repo on [Render.com](https://render.com)

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy with Docker
```bash
docker build -t quantzen-backend .
docker run -p 3001:3001 --env-file .env quantzen-backend
```

## 🔐 Required Environment Variables

Must be set on your hosting platform:

```env
NODE_ENV=production
PORT=3001
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
FRONTEND_URL=https://your-frontend-url.com
MAX_REQUESTS_PER_MINUTE=5
```

⚠️ **Important:** Use a Gmail App Password, not your regular password!

## 📊 API Endpoints

- `GET /health` - Health check
- `POST /api/subscribe` - Newsletter subscription

## 🆘 Need Help?

See the full deployment guide: `../BACKEND_DEPLOYMENT.md`
