# Quick Deployment Guide

## 🚀 Deploy Backend (Choose One)

### Option 1: Render (Recommended - Free) ⭐

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Add deployment files"
   git push origin main
   ```

2. Go to [render.com](https://render.com) and sign up

3. Click "New +" → "Web Service"

4. Connect GitHub repo → Select `backend` folder

5. Settings:
   - Name: `quantzen-backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
   
6. Add Environment Variables (see `backend/.env.example`)

7. Deploy! 🎉

8. Copy your backend URL (e.g., `https://quantzen-backend.onrender.com`)

9. Update `.env.production` with your backend URL

10. Redeploy frontend on Vercel

---

### Option 2: Railway (Better Performance - $5/month)

1. Go to [railway.app](https://railway.app)

2. New Project → Deploy from GitHub

3. Select your repo → Set root directory to `backend`

4. Add environment variables

5. Generate domain

6. Update `.env.production` with Railway URL

---

## 🔧 Local Testing

Start backend:
```bash
cd backend
npm install
npm start
```

Start frontend (new terminal):
```bash
npm run dev
```

Test: http://localhost:5173

---

## ✅ Checklist

- [ ] Backend deployed and running
- [ ] Health check working: `https://your-backend-url/health`
- [ ] Environment variables set in hosting platform
- [ ] `.env.production` updated with backend URL
- [ ] Frontend redeployed with new env vars
- [ ] Subscription form tested end-to-end
- [ ] Email received successfully

---

## 📞 Support

- Render Docs: https://render.com/docs
- Railway Docs: https://docs.railway.app
- Full guide: See `BACKEND_DEPLOYMENT.md`
