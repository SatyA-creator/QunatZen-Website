# Backend Deployment Guide for QuantZen

This guide will help you deploy your Node.js/Express backend API for the QuantZen subscription service.

## 🚀 Quick Start - Choose Your Platform

### Option 1: Render (Recommended for Beginners) ⭐

**Pros:**
- ✅ Free tier available
- ✅ Auto-deploy from GitHub
- ✅ Built-in environment variables
- ✅ HTTPS by default
- ✅ Easy to use dashboard

**Steps:**

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Add backend deployment files"
   git push origin main
   ```

2. **Sign up at [Render.com](https://render.com)**
   - Use your GitHub account to sign up

3. **Create a New Web Service:**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the `QuantZen` repository
   - Configure the service:
     - **Name**: `quantzen-backend`
     - **Root Directory**: `backend`
     - **Environment**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: Free

4. **Add Environment Variables** in Render Dashboard:
   ```
   NODE_ENV=production
   PORT=3001
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_FROM=your-email@gmail.com
   FRONTEND_URL=https://your-frontend-url.vercel.app
   MAX_REQUESTS_PER_MINUTE=5
   ```

5. **Deploy!**
   - Click "Create Web Service"
   - Your backend will be live at: `https://quantzen-backend.onrender.com`

6. **Update Frontend Configuration:**
   - Create a `.env.production` file in your root directory:
     ```env
     VITE_API_URL=https://quantzen-backend.onrender.com
     ```

---

### Option 2: Railway ⚡

**Pros:**
- ✅ $5 credit monthly
- ✅ Fast deployment
- ✅ Excellent developer experience
- ✅ Better performance than free tiers

**Steps:**

1. **Sign up at [Railway.app](https://railway.app)**

2. **Create a New Project:**
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Railway will auto-detect Node.js

3. **Configure Settings:**
   - Go to "Variables" tab
   - Add all environment variables (same as Render above)

4. **Set Root Directory:**
   - Go to "Settings" → "Service"
   - Set "Root Directory" to `backend`
   - Set "Start Command" to `npm start`

5. **Generate Domain:**
   - Go to "Settings" → "Networking"
   - Click "Generate Domain"
   - Your backend will be live at: `https://quantzen-backend.up.railway.app`

6. **Update Frontend Configuration:**
   ```env
   VITE_API_URL=https://quantzen-backend.up.railway.app
   ```

---

### Option 3: Vercel Serverless Functions 🔷

**Pros:**
- ✅ Free tier with generous limits
- ✅ Same platform as your frontend (if using Vercel)
- ✅ Instant deployment

**Limitations:**
- ⚠️ Serverless functions have 10-second timeout on free tier
- ⚠️ Cold starts may occur

**Steps:**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from Backend Directory:**
   ```bash
   cd backend
   vercel
   ```

4. **Configure Project:**
   - Follow the prompts
   - Set environment variables when asked

5. **Production Deployment:**
   ```bash
   vercel --prod
   ```

6. **Add Environment Variables:**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add all the env vars

---

### Option 4: Heroku 🟣

**Pros:**
- ✅ Well-established platform
- ✅ Easy to use
- ⚠️ No longer has free tier (starts at $5/month)

**Steps:**

1. **Install Heroku CLI:**
   Download from [heroku.com/cli](https://devcenter.heroku.com/articles/heroku-cli)

2. **Login:**
   ```bash
   heroku login
   ```

3. **Create App:**
   ```bash
   cd backend
   heroku create quantzen-backend
   ```

4. **Set Environment Variables:**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set EMAIL_HOST=smtp.gmail.com
   heroku config:set EMAIL_PORT=587
   heroku config:set EMAIL_USER=your-email@gmail.com
   heroku config:set EMAIL_PASS=your-app-password
   heroku config:set EMAIL_FROM=your-email@gmail.com
   heroku config:set FRONTEND_URL=https://your-frontend-url.vercel.app
   ```

5. **Deploy:**
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

---

### Option 5: AWS (EC2 or Elastic Beanstalk) ☁️

**For advanced users who need more control**

**Pros:**
- ✅ Full control
- ✅ Scalable
- ✅ Free tier for 12 months

**Cons:**
- ⚠️ More complex setup
- ⚠️ Requires AWS knowledge

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] ✅ Gmail App Password configured (not your regular password!)
- [ ] ✅ Environment variables ready
- [ ] ✅ GitHub repository pushed
- [ ] ✅ Backend tested locally (`npm start` in backend folder)
- [ ] ✅ Health endpoint working: `http://localhost:3001/health`

## 🔐 Setting Up Gmail App Password

1. Enable 2-Factor Authentication on your Gmail account
2. Go to [Google Account Settings](https://myaccount.google.com/)
3. Navigate to Security → 2-Step Verification → App passwords
4. Generate a new app password for "Mail"
5. Use this password in `EMAIL_PASS` environment variable

## 🔄 Connecting Frontend to Deployed Backend

### For Local Development:
Your `.env.local` or `.env`:
```env
VITE_API_URL=http://localhost:3001
```

### For Production:
Create `.env.production`:
```env
VITE_API_URL=https://your-backend-url.onrender.com
```

Or set the environment variable in Vercel/Netlify dashboard directly.

## 🧪 Testing Your Deployed Backend

1. **Health Check:**
   ```bash
   curl https://your-backend-url.com/health
   ```
   Should return: `{"status":"OK","timestamp":"..."}`

2. **Test Subscription Endpoint:**
   ```bash
   curl -X POST https://your-backend-url.com/api/subscribe \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com"}'
   ```

## 🔒 Security Checklist

- [ ] ✅ All sensitive data in environment variables (not hardcoded)
- [ ] ✅ CORS configured with your frontend URL only
- [ ] ✅ Rate limiting enabled (5 requests/minute by default)
- [ ] ✅ Helmet security headers enabled
- [ ] ✅ HTTPS enabled (automatic on Render/Railway/Vercel)

## 🐛 Troubleshooting

### Issue: "Email authentication failed"
**Solution:** Check that you're using a Gmail App Password, not your regular password.

### Issue: "CORS error"
**Solution:** Make sure `FRONTEND_URL` in backend env vars matches your frontend URL exactly.

### Issue: "Connection timeout"
**Solution:** 
- Check if EMAIL_PORT is set to `587` (not 465)
- Ensure your hosting provider allows outbound SMTP connections

### Issue: Cold starts on Render free tier
**Solution:** 
- Render free tier spins down after inactivity
- First request after spin-down takes ~30-60 seconds
- Consider upgrading to paid tier or using Railway for better performance

### Issue: Backend URL not working
**Solution:**
- Wait 2-3 minutes after deployment
- Check deployment logs in your hosting dashboard
- Verify all environment variables are set correctly

## 📊 Monitoring Your Backend

### Render:
- Dashboard → Your Service → Logs
- View real-time logs and metrics

### Railway:
- Dashboard → Your Project → Observability
- View deployment logs

### Check Uptime:
Use [UptimeRobot](https://uptimerobot.com/) or [Pingdom](https://www.pingdom.com/) to monitor your backend's availability.

## 🚀 Recommended Deployment Path

For your use case (newsletter subscription), I recommend:

1. **Start with Render** (free tier) - easiest setup
2. **If you need better performance**, upgrade to Railway ($5/month)
3. **Update your frontend env vars** with the backend URL
4. **Test thoroughly** before announcing

## 📝 Next Steps After Deployment

1. Test the subscription flow end-to-end
2. Monitor the logs for any errors
3. Set up a custom domain (optional)
4. Add database for storing subscriber emails (future enhancement)
5. Set up email analytics/tracking

## 💡 Pro Tips

- **Use the same platform for frontend and backend** if possible (e.g., both on Vercel or both on Render)
- **Set up auto-deployment** from GitHub main branch
- **Keep a local `.env` file** with production values backed up securely
- **Test in production** before announcing to users
- **Monitor your email sending limits** (Gmail has daily limits)

---

## 🎉 You're Ready to Deploy!

Choose Render (easiest) or Railway (best performance) and follow the steps above. Your backend will be live in under 10 minutes!

If you need help, check the troubleshooting section or reach out to the platform's support.

Good luck! 🚀
