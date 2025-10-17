# 🚀 Deployment Checklist for QuantZen

## Pre-Deployment

### Backend Preparation
- [ ] Backend runs successfully locally (`cd backend && npm start`)
- [ ] Health endpoint works: http://localhost:3001/health
- [ ] Email sending works (test with real email)
- [ ] Environment variables are properly configured
- [ ] `.env` file is NOT committed to Git
- [ ] Gmail App Password is generated and ready

### Frontend Preparation
- [ ] Frontend runs successfully locally (`npm run dev`)
- [ ] Email subscription form works with local backend
- [ ] Build succeeds (`npm run build`)
- [ ] No console errors in production build

### Git Repository
- [ ] All code committed to Git
- [ ] Pushed to GitHub/GitLab
- [ ] `.env` files are in `.gitignore`
- [ ] README is up to date

---

## Backend Deployment (Choose One Platform)

### Option A: Render ⭐ (Recommended)

**Setup Steps:**
- [ ] Created account at [Render.com](https://render.com)
- [ ] Created new Web Service
- [ ] Connected GitHub repository
- [ ] Set root directory to `backend`
- [ ] Configured build command: `npm install`
- [ ] Configured start command: `npm start`
- [ ] Selected Free plan

**Environment Variables:**
- [ ] `NODE_ENV` = `production`
- [ ] `PORT` = `3001`
- [ ] `EMAIL_HOST` = `smtp.gmail.com`
- [ ] `EMAIL_PORT` = `587`
- [ ] `EMAIL_USER` = your Gmail address
- [ ] `EMAIL_PASS` = your Gmail App Password
- [ ] `EMAIL_FROM` = your Gmail address
- [ ] `FRONTEND_URL` = your frontend URL
- [ ] `MAX_REQUESTS_PER_MINUTE` = `5`

**Verification:**
- [ ] Deployment succeeded
- [ ] Service is "Live"
- [ ] Backend URL copied (e.g., `https://quantzen-backend.onrender.com`)
- [ ] Health endpoint returns OK: `[YOUR_URL]/health`
- [ ] No errors in deployment logs

---

### Option B: Railway 🚂

**Setup Steps:**
- [ ] Created account at [Railway.app](https://railway.app)
- [ ] Created new project from GitHub repo
- [ ] Set root directory to `backend`
- [ ] Added all environment variables
- [ ] Generated domain

**Verification:**
- [ ] Deployment succeeded
- [ ] Domain is active
- [ ] Health check works
- [ ] Logs show no errors

---

### Option C: Vercel Functions 🔷

**Setup Steps:**
- [ ] Installed Vercel CLI: `npm install -g vercel`
- [ ] Logged in: `vercel login`
- [ ] Deployed from backend folder: `cd backend && vercel`
- [ ] Added environment variables in Vercel dashboard
- [ ] Production deployment: `vercel --prod`

**Verification:**
- [ ] Function URL received
- [ ] Health endpoint works
- [ ] No cold start issues

---

## Frontend Configuration Update

After backend is deployed:

- [ ] Created/updated `.env.production` in root
- [ ] Added: `VITE_API_URL=https://your-backend-url.com`
- [ ] Tested locally with production backend
- [ ] Committed changes (NOT the .env file itself)
- [ ] Frontend redeployed (if already deployed)

---

## Testing & Verification

### Automated Tests
- [ ] Run verification script: `node backend/verify-backend.js https://your-backend-url.com`
- [ ] All tests pass ✅

### Manual Testing
- [ ] Open your live frontend website
- [ ] Navigate to newsletter subscription form
- [ ] Enter a test email address
- [ ] Submit form
- [ ] Check for success message
- [ ] Check test email inbox
- [ ] Verify welcome email received
- [ ] Email formatting looks correct
- [ ] All links in email work

### API Testing
- [ ] Health check: `curl https://your-backend-url.com/health`
- [ ] Subscribe test: 
  ```bash
  curl -X POST https://your-backend-url.com/api/subscribe \
    -H "Content-Type: application/json" \
    -d '{"email":"test@example.com"}'
  ```
- [ ] Rate limiting works (try 6+ requests quickly)
- [ ] Invalid email validation works

### Cross-Origin Testing
- [ ] Frontend can connect to backend (no CORS errors)
- [ ] Console shows no errors
- [ ] Network tab shows successful API calls

---

## Post-Deployment

### Documentation
- [ ] Backend URL documented
- [ ] Environment variables backed up securely
- [ ] Deployment process documented for team

### Monitoring Setup
- [ ] Check logs for any errors
- [ ] Set up uptime monitoring (optional):
  - [ ] [UptimeRobot](https://uptimerobot.com/)
  - [ ] [Pingdom](https://pingdom.com/)
  - [ ] [Better Uptime](https://betteruptime.com/)

### Performance
- [ ] Backend responds within 2 seconds
- [ ] Email sent within 5 seconds
- [ ] No timeout errors

### Security
- [ ] HTTPS enabled (automatic on modern platforms)
- [ ] Environment variables not exposed
- [ ] Rate limiting working
- [ ] CORS only allows your frontend domain
- [ ] Security headers enabled (Helmet)

---

## Troubleshooting Checklist

If something doesn't work:

### Backend Issues
- [ ] Check deployment logs
- [ ] Verify all environment variables are set
- [ ] Test health endpoint first
- [ ] Check email credentials (use App Password!)
- [ ] Verify SMTP port is 587 (not 465)
- [ ] Check hosting provider SMTP restrictions

### Frontend Issues
- [ ] Verify VITE_API_URL is correct
- [ ] Check browser console for errors
- [ ] Verify CORS settings on backend
- [ ] Test API directly with curl/Postman
- [ ] Clear browser cache and rebuild

### Email Issues
- [ ] Using Gmail App Password (not regular password)
- [ ] 2FA enabled on Gmail account
- [ ] Check Gmail sending limits (500/day for free)
- [ ] Verify EMAIL_FROM matches EMAIL_USER
- [ ] Check spam folder

---

## Final Checklist ✨

- [ ] ✅ Backend deployed and running
- [ ] ✅ Frontend deployed and running
- [ ] ✅ Email subscription works end-to-end
- [ ] ✅ No errors in logs
- [ ] ✅ All tests passing
- [ ] ✅ Documentation complete
- [ ] ✅ Team notified of deployment

---

## 🎉 Deployment Complete!

**Your URLs:**
- Frontend: `____________________________________`
- Backend: `____________________________________`
- Backend Health: `____________________________________/health`

**Next Steps:**
1. Monitor logs for first 24 hours
2. Test with real users
3. Collect feedback
4. Set up analytics (optional)
5. Plan for scaling if needed

---

## Quick Reference

**Common Commands:**

```bash
# Test local backend
cd backend && npm start

# Test local frontend  
npm run dev

# Verify backend
node backend/verify-backend.js https://your-url.com

# View logs (Render)
# Dashboard → Your Service → Logs

# Redeploy (Git-based)
git add . && git commit -m "Update" && git push

# Redeploy (Vercel)
cd backend && vercel --prod
```

**Support Resources:**
- Render Docs: https://render.com/docs
- Railway Docs: https://docs.railway.app  
- Vercel Docs: https://vercel.com/docs
- Full Guide: `BACKEND_DEPLOYMENT.md`

---

Good luck with your deployment! 🚀
