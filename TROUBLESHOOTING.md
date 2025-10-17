# 🔧 TROUBLESHOOTING GUIDE - Backend Not Working

## ✅ Current Status

**Backend Health:** ✅ RUNNING (https://qunatzen-backend.onrender.com/health returns 200)

**Problem:** ❌ Subscribe endpoint returns 500 error

---

## 🎯 ISSUE IDENTIFIED

The backend is running but the **subscribe endpoint is failing with a 500 Internal Server Error**. This means:

1. ✅ Backend deployed successfully
2. ✅ Server is running
3. ❌ **Email configuration is missing or incorrect in Render**

---

## 🔥 QUICK FIX (Follow These Steps)

### Step 1: Check Render Environment Variables

Go to your Render dashboard:
1. Open [Render Dashboard](https://dashboard.render.com/)
2. Click on your `quantzen-backend` service
3. Go to **"Environment"** tab on the left
4. **Verify these variables are set:**

```
NODE_ENV = production
PORT = 3001
EMAIL_HOST = smtp.gmail.com
EMAIL_PORT = 587
EMAIL_USER = your-gmail-address@gmail.com
EMAIL_PASS = your-16-character-app-password
EMAIL_FROM = your-gmail-address@gmail.com
FRONTEND_URL = https://zenith-studio-ten.vercel.app
MAX_REQUESTS_PER_MINUTE = 5
```

### Step 2: Gmail App Password (CRITICAL!)

⚠️ **You MUST use a Gmail App Password, NOT your regular Gmail password!**

#### How to Generate Gmail App Password:

1. **Enable 2-Factor Authentication on Gmail:**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Find "2-Step Verification" and turn it ON
   - Complete the setup

2. **Generate App Password:**
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" as the app
   - Select "Other" as the device
   - Name it "QuantZen Backend"
   - Click "Generate"
   - **Copy the 16-character password** (looks like: `abcd efgh ijkl mnop`)

3. **Update Render Environment Variable:**
   - In Render dashboard → Your service → Environment
   - Find `EMAIL_PASS`
   - Paste the 16-character app password (remove spaces)
   - Click "Save Changes"

### Step 3: Update FRONTEND_URL for CORS

Currently your backend only allows: `https://zenith-studio-ten.vercel.app/`

**If your frontend is at a different URL:**
1. Go to Render → Your service → Environment
2. Update `FRONTEND_URL` to match your actual frontend URL
3. Remove the trailing slash: `https://your-domain.vercel.app` (no `/` at end)
4. Save changes

### Step 4: Redeploy Backend

After updating environment variables:
1. Go to Render → Your service
2. Click "Manual Deploy" → "Deploy latest commit"
3. Wait for deployment to complete (2-3 minutes)

### Step 5: Test Again

Once deployment is done, test:

**Option A - Using PowerShell:**
```powershell
# Test health
curl https://qunatzen-backend.onrender.com/health

# Test subscribe
$body = @{ email = "test@example.com" } | ConvertTo-Json
Invoke-RestMethod -Uri "https://qunatzen-backend.onrender.com/api/subscribe" -Method POST -Body $body -ContentType "application/json"
```

**Option B - Using Browser:**
Open: `http://localhost:5173/test-connection.html` (if running frontend locally)

**Option C - Using the verification script:**
```powershell
node backend/verify-backend.js https://qunatzen-backend.onrender.com
```

---

## 🔍 COMMON ISSUES & SOLUTIONS

### Issue 1: "Email authentication failed"
**Cause:** Using regular Gmail password instead of App Password
**Solution:** Generate Gmail App Password (see Step 2 above)

### Issue 2: "EAUTH" error in logs
**Cause:** Wrong email credentials
**Solution:** 
- Double-check `EMAIL_USER` is your full Gmail address
- Double-check `EMAIL_PASS` is the 16-char app password
- Make sure no spaces in the app password

### Issue 3: "CORS error" in browser console
**Cause:** `FRONTEND_URL` doesn't match your actual frontend domain
**Solution:** Update `FRONTEND_URL` in Render to match exactly (no trailing slash)

### Issue 4: "ECONNECTION" error
**Cause:** Wrong email port or host
**Solution:** 
- Verify `EMAIL_HOST = smtp.gmail.com`
- Verify `EMAIL_PORT = 587` (NOT 465)

### Issue 5: Backend "spins down" on free tier
**Cause:** Render free tier sleeps after 15 min inactivity
**Solution:** 
- First request after sleep takes 30-60 seconds
- Either wait or upgrade to paid tier ($7/month)
- Or switch to Railway ($5/month)

---

## 📋 COMPLETE CHECKLIST

Before testing:
- [ ] 2FA enabled on Gmail
- [ ] App Password generated (16 characters)
- [ ] All environment variables set in Render
- [ ] `EMAIL_PASS` uses App Password (not regular password)
- [ ] `EMAIL_PORT` is `587` (not 465)
- [ ] `FRONTEND_URL` matches your domain exactly
- [ ] Backend redeployed after env var changes
- [ ] Waited 2-3 minutes for deployment to complete

---

## 🧪 VERIFY ENVIRONMENT VARIABLES

### In Render Dashboard:

Check these EXACT values:

```bash
# Email Configuration
EMAIL_HOST     = smtp.gmail.com
EMAIL_PORT     = 587
EMAIL_USER     = youremail@gmail.com         # Your full Gmail address
EMAIL_PASS     = abcdefghijklmnop            # 16-char app password (no spaces)
EMAIL_FROM     = youremail@gmail.com         # Same as EMAIL_USER

# Server Configuration  
NODE_ENV       = production
PORT           = 3001

# CORS Configuration
FRONTEND_URL   = https://your-frontend.vercel.app    # NO trailing slash!

# Rate Limiting
MAX_REQUESTS_PER_MINUTE = 5
```

---

## 🚨 CRITICAL MISTAKES TO AVOID

1. ❌ Using your regular Gmail password instead of App Password
2. ❌ Not enabling 2FA before generating App Password
3. ❌ Including spaces in the App Password
4. ❌ Using port 465 instead of 587
5. ❌ Adding trailing slash to FRONTEND_URL
6. ❌ Not redeploying after changing environment variables
7. ❌ Testing immediately after deploy (wait 2-3 min)

---

## 📞 STILL NOT WORKING?

### Check Render Logs:

1. Go to Render Dashboard
2. Click your service
3. Click "Logs" tab
4. Look for errors when you try to subscribe
5. Common errors to look for:
   - "EAUTH" → Wrong credentials
   - "ECONNECTION" → Wrong host/port
   - "Invalid login" → App Password not set
   - "535 authentication failed" → Wrong password

### Get Help:

1. Copy the error from Render logs
2. Check if email credentials are correct
3. Verify 2FA is enabled on Gmail
4. Try generating a new App Password
5. Make sure no firewall blocking SMTP

---

## ✅ SUCCESS INDICATORS

You'll know it works when:
- ✅ Health check returns 200 OK
- ✅ Subscribe endpoint returns success message
- ✅ Email arrives in test inbox
- ✅ No errors in Render logs
- ✅ Frontend subscription form works

---

## 🎯 NEXT STEPS AFTER FIX

1. Test with real email address
2. Update frontend `.env.production` if needed
3. Redeploy frontend if already deployed
4. Test end-to-end: Form → Backend → Email
5. Monitor logs for first 24 hours

---

## 💡 PRO TIPS

- **Keep App Password secure** - treat it like a real password
- **Test locally first** with same env vars
- **Use Railway** ($5/mo) if Render free tier is too slow
- **Monitor your Gmail sending limits** (500 emails/day)
- **Set up email forwarding** to track sent emails

---

Good luck! The most common issue is the App Password. Make sure you follow Step 2 carefully! 🚀
