# 🚨 IMMEDIATE FIX REQUIRED

## Issues Found:

### 1. Gmail App Password Format ❌
**Problem:** Your `EMAIL_PASS=yzsa kkqd psqh hjoi` has spaces
**Fixed:** Removed spaces → `yzsakkqdpsqhhjoi`

### 2. Port Mismatch ❌
**Problem:** Backend was set to port 3000, but should be 3001
**Fixed:** Changed `PORT=3001` in backend/.env

### 3. CORS Configuration ❌
**Problem:** Backend expected frontend on :8080, but Vite uses :5173
**Fixed:** Changed `FRONTEND_URL=http://localhost:5173`

### 4. Frontend API URL ❌
**Problem:** Frontend fallback was pointing to :3000 instead of :3001
**Fixed:** Updated emailService.ts to use :3001

---

## 🔥 CRITICAL: Update Render Environment Variables

**Your Render backend STILL has the wrong configuration!**

### Go to Render Dashboard:
1. https://dashboard.render.com/
2. Click `quantzen-backend`
3. Click "Environment" tab
4. Update these variables:

```
EMAIL_PASS = yzsakkqdpsqhhjoi
```
**⚠️ REMOVE THE SPACES from your Gmail App Password!**

```
FRONTEND_URL = https://zenith-studio-ten.vercel.app
```
**⚠️ Update to your actual frontend URL (no trailing slash!)**

### Save & Redeploy:
- Click "Save Changes"
- Wait 2-3 minutes for redeploy
- Check "Live" status

---

## 🧪 Testing Instructions

### For Local Development:
1. **Start Backend:**
   ```powershell
   cd "F:\Intersnhip project\QuantZen\backend"
   npm start
   ```
   Should show: `🚀 Server running on http://localhost:3001`

2. **Start Frontend (New Terminal):**
   ```powershell
   cd "F:\Intersnhip project\QuantZen"
   npm run dev
   ```
   Should show: `Local: http://localhost:5173`

3. **Test Subscription:**
   - Open http://localhost:5173
   - Use newsletter form
   - Should connect to local backend on :3001

### For Production:
1. **Update Render env vars** (see above)
2. **Test production backend:**
   ```powershell
   $body = @{ email = "test@example.com" } | ConvertTo-Json
   Invoke-RestMethod -Uri "https://qunatzen-backend.onrender.com/api/subscribe" -Method POST -Body $body -ContentType "application/json"
   ```
3. **Use your deployed frontend** with production backend

---

## 🎯 Environment Configuration Summary

### Local Development (.env.local):
```env
VITE_API_URL=http://localhost:3001
```

### Production (.env.production):
```env
VITE_API_URL=https://qunatzen-backend.onrender.com
```

### Backend (.env):
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=priyamsatya08@gmail.com
EMAIL_PASS=yzsakkqdpsqhhjoi  # NO SPACES!
EMAIL_FROM=priyamsatya08@gmail.com
PORT=3001                    # Changed from 3000
FRONTEND_URL=http://localhost:5173  # Changed from :8080
```

### Render Environment Variables:
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=priyamsatya08@gmail.com
EMAIL_PASS=yzsakkqdpsqhhjoi  # NO SPACES!
EMAIL_FROM=priyamsatya08@gmail.com
NODE_ENV=production
PORT=3001
FRONTEND_URL=https://zenith-studio-ten.vercel.app  # Your actual frontend URL
```

---

## ✅ Next Steps:

1. **Fix Render env vars** (most important!)
2. **Test locally** with both frontend and backend running
3. **Test production** after Render redeploys
4. **Verify emails arrive** in inbox

The "Unable to connect to server" error should be resolved once you:
- ✅ Remove spaces from Gmail App Password in Render
- ✅ Update FRONTEND_URL in Render
- ✅ Run both frontend and backend locally for testing

Try these fixes and let me know the results! 🚀