# 🏗️ QuantZen Deployment Architecture

## Current Setup (After Deployment)

```
┌─────────────────────────────────────────────────────────────────┐
│                         USERS / VISITORS                         │
│                    (Access your website)                         │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ HTTPS
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      FRONTEND (Vercel)                           │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  React + TypeScript + Vite                             │    │
│  │  - Marketing pages                                     │    │
│  │  - Newsletter subscription form                        │    │
│  │  - Contact forms                                       │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                   │
│  Environment Variable:                                           │
│  VITE_API_URL = https://quantzen-backend.onrender.com           │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ API Calls (HTTPS)
                             │ POST /api/subscribe
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    BACKEND API (Render)                          │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Node.js + Express                                     │    │
│  │  - POST /api/subscribe (email subscription)            │    │
│  │  - GET /health (health check)                          │    │
│  │                                                          │    │
│  │  Security Features:                                     │    │
│  │  ✓ Rate limiting (5 req/min)                           │    │
│  │  ✓ CORS protection                                     │    │
│  │  ✓ Helmet security headers                             │    │
│  │  ✓ Input validation                                    │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                   │
│  Environment Variables:                                          │
│  - EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS               │
│  - FRONTEND_URL (CORS whitelist)                                │
│  - NODE_ENV=production                                           │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ SMTP (Port 587)
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                      GMAIL SMTP SERVER                           │
│  ┌────────────────────────────────────────────────────────┐    │
│  │  Email Service (Nodemailer)                            │    │
│  │  - Sends welcome emails to subscribers                 │    │
│  │  - Professional HTML templates                         │    │
│  │  - App Password authentication                         │    │
│  └────────────────────────────────────────────────────────┘    │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             │ Email Delivery
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                    SUBSCRIBER'S INBOX                            │
│                   (Welcome Email)                                │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Flow: Newsletter Subscription

```
1. User fills form
   └─> Email: user@example.com
   
2. Frontend validates
   └─> Valid email format?
   
3. Frontend sends POST request
   └─> POST https://quantzen-backend.onrender.com/api/subscribe
       Body: { "email": "user@example.com" }
   
4. Backend receives request
   └─> Rate limit check (max 5 req/min)
   └─> CORS validation (frontend URL allowed?)
   └─> Email format validation
   
5. Backend connects to Gmail SMTP
   └─> Using nodemailer
   └─> Authentication with App Password
   
6. Email sent to subscriber
   └─> Welcome email with HTML template
   └─> Contains company branding
   
7. Response to frontend
   └─> { "success": true, "message": "Thank you for subscribing!" }
   
8. Frontend shows success message
   └─> User notified to check email
```

---

## Deployment Platforms

### Frontend (Already Deployed)
```
Platform: Vercel
URL: https://your-domain.vercel.app
Technology: React + Vite + TypeScript
Build: Automatic on git push
```

### Backend (To Deploy)
```
Platform Options:
┌─────────────────────────────────────────────────┐
│ 1. Render (Recommended)                         │
│    - Free tier                                  │
│    - Auto-deploy from GitHub                    │
│    - URL: quantzen-backend.onrender.com         │
│                                                  │
│ 2. Railway                                      │
│    - $5/month credit                            │
│    - Faster than free tiers                     │
│    - URL: quantzen-backend.up.railway.app       │
│                                                  │
│ 3. Vercel Serverless                            │
│    - Free tier                                  │
│    - Same platform as frontend                  │
│    - URL: quantzen-backend.vercel.app           │
└─────────────────────────────────────────────────┘
```

---

## Environment Variables Flow

### Development (Local)
```
.env.local (Frontend)
└─> VITE_API_URL=http://localhost:3001

backend/.env (Backend)
└─> EMAIL_HOST=smtp.gmail.com
    EMAIL_PORT=587
    EMAIL_USER=your@gmail.com
    EMAIL_PASS=app-password
    FRONTEND_URL=http://localhost:5173
```

### Production (Deployed)
```
Vercel Dashboard (Frontend)
└─> VITE_API_URL=https://quantzen-backend.onrender.com

Render Dashboard (Backend)
└─> EMAIL_HOST=smtp.gmail.com
    EMAIL_PORT=587
    EMAIL_USER=your@gmail.com
    EMAIL_PASS=app-password
    FRONTEND_URL=https://your-domain.vercel.app
    NODE_ENV=production
```

---

## Security Layers

```
┌─────────────────────────────────────────────────────────────┐
│ Layer 1: HTTPS                                              │
│ └─> All communication encrypted                             │
└─────────────────────────────────────────────────────────────┘
                             │
┌─────────────────────────────────────────────────────────────┐
│ Layer 2: CORS                                               │
│ └─> Only your frontend URL can access API                  │
└─────────────────────────────────────────────────────────────┘
                             │
┌─────────────────────────────────────────────────────────────┐
│ Layer 3: Rate Limiting                                      │
│ └─> Max 5 requests per minute per IP                        │
└─────────────────────────────────────────────────────────────┘
                             │
┌─────────────────────────────────────────────────────────────┐
│ Layer 4: Input Validation                                   │
│ └─> Email format checked, SQL injection prevented           │
└─────────────────────────────────────────────────────────────┘
                             │
┌─────────────────────────────────────────────────────────────┐
│ Layer 5: Helmet Security Headers                           │
│ └─> XSS protection, clickjacking prevention                 │
└─────────────────────────────────────────────────────────────┘
                             │
┌─────────────────────────────────────────────────────────────┐
│ Layer 6: Environment Variables                             │
│ └─> Credentials never in code, only in env vars             │
└─────────────────────────────────────────────────────────────┘
```

---

## Cost Breakdown

### Current Setup (Recommended)
```
┌──────────────────────────┬──────────┬─────────────────┐
│ Service                  │ Cost     │ Limitations     │
├──────────────────────────┼──────────┼─────────────────┤
│ Vercel (Frontend)        │ FREE     │ Generous limits │
│ Render (Backend)         │ FREE     │ Spins down      │
│ Gmail SMTP               │ FREE     │ 500 emails/day  │
├──────────────────────────┼──────────┼─────────────────┤
│ TOTAL                    │ $0/month │                 │
└──────────────────────────┴──────────┴─────────────────┘

Note: Render free tier spins down after 15 min inactivity.
First request after spin-down takes 30-60 seconds.
```

### Recommended Upgrade Path
```
┌──────────────────────────┬───────────┬─────────────────┐
│ Service                  │ Cost      │ Benefits        │
├──────────────────────────┼───────────┼─────────────────┤
│ Vercel (Frontend)        │ FREE      │ Same            │
│ Railway (Backend)        │ $5/month  │ No spin-down    │
│ Gmail SMTP               │ FREE      │ Same            │
├──────────────────────────┼───────────┼─────────────────┤
│ TOTAL                    │ $5/month  │ Better uptime   │
└──────────────────────────┴───────────┴─────────────────┘
```

---

## Monitoring & Logs

```
┌─────────────────────────────────────────────────────────────┐
│ Frontend Logs (Vercel)                                      │
│ └─> Dashboard → Your Project → Deployments → Logs          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Backend Logs (Render)                                       │
│ └─> Dashboard → Your Service → Logs (real-time)            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Email Delivery (Gmail)                                      │
│ └─> Check Gmail Sent folder                                │
│ └─> Monitor daily sending limits                            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Uptime Monitoring (Optional)                                │
│ └─> UptimeRobot (free)                                      │
│ └─> Pingdom                                                 │
│ └─> Better Uptime                                           │
└─────────────────────────────────────────────────────────────┘
```

---

## Scalability Path

### Current (MVP)
```
- Frontend: Static files on CDN
- Backend: Single server
- Email: Gmail SMTP
- Database: None (emails not stored)
```

### Future Growth
```
Stage 1: Add Database
└─> Store subscriber emails
    └─> Options: MongoDB Atlas (free), PostgreSQL, Supabase

Stage 2: Email Service Provider
└─> Switch from Gmail to dedicated service
    └─> SendGrid, Mailchimp, Amazon SES
    └─> Better deliverability, analytics

Stage 3: Scale Backend
└─> Multiple instances
    └─> Load balancing
    └─> Redis for caching

Stage 4: Advanced Features
└─> Unsubscribe links
    └─> Email preferences
    └─> Analytics dashboard
    └─> A/B testing
```

---

## Backup & Disaster Recovery

```
┌─────────────────────────────────────────────────────────────┐
│ Code Backup                                                 │
│ ✓ GitHub repository (version controlled)                    │
│ ✓ Can redeploy anytime                                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Configuration Backup                                        │
│ ✓ Environment variables documented                          │
│ ✓ Keep secure copy of .env file (locally, encrypted)        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ Email Backup                                                │
│ ✓ Gmail keeps sent emails                                   │
│ ✓ Consider forwarding/BCC to archive email                  │
└─────────────────────────────────────────────────────────────┘
```

---

## Quick Commands Reference

```bash
# Test Local Backend
cd backend
npm start
# Visit: http://localhost:3001/health

# Test Production Backend
node backend/verify-backend.js https://your-url.com

# Deploy to Render (auto via Git push)
git add .
git commit -m "Update"
git push origin main

# Deploy to Vercel
cd backend
vercel --prod

# View Logs (PowerShell)
# Render: Dashboard → Logs
# Railway: Dashboard → Logs
# Local: Check terminal output
```

---

This architecture is production-ready, secure, and scalable! 🚀
