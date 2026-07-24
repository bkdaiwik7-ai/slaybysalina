# ⚡ WhatsApp Setup - Quick Reference

## 📋 TL;DR - What You Need

| What | Where to Get | Example |
|------|-------------|---------|
| **Phone Number ID** | Meta Business → WhatsApp → Phone Numbers | `123456789012345` |
| **Access Token** | Meta Business → WhatsApp → API Setup | `EAAx...long...` |
| **Account ID** (optional) | Meta Business → Accounts → WhatsApp | `987654321098765` |

---

## 🚀 3-Step Setup

### Step 1: Get Credentials (15 minutes)
Follow: **`WHATSAPP_CLOUD_API_SETUP.md`** (detailed steps 1-7)

### Step 2: Add to .env.local (2 minutes)
Create `.env.local` in project root:
```env
NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER_ID=YOUR_PHONE_ID
WHATSAPP_ACCESS_TOKEN=YOUR_TOKEN
```

### Step 3: Test (1 minute)
```bash
npm run dev
# Go to http://localhost:3000/book
# Fill form → Click Book → Check WhatsApp
```

---

## ✅ How to Know It's Working

### Terminal Shows:
```
📱 New Appointment Request:
Name: John Doe
...
✅ Message sent via WhatsApp: wamid_xyz123
```

### Your WhatsApp Shows:
```
Hello! I would like to book an appointment.

📋 *Appointment Details:*
• Name: John Doe
• Email: john@example.com
• Phone: 8296883776
• Service: Haircut
• Preferred Date: 2026-07-25
• Preferred Time: 14:30

Please confirm availability. Thank you!
```

---

## 🔗 Quick Links

| Resource | Link |
|----------|------|
| **Full Setup Guide** | `WHATSAPP_CLOUD_API_SETUP.md` |
| **Troubleshooting** | `WHATSAPP_CLOUD_API_SETUP.md` → Troubleshooting |
| **Meta Developer Docs** | https://developers.facebook.com/docs/whatsapp/cloud-api/ |
| **Business Suite** | https://business.facebook.com |

---

## 🚨 Common Mistakes

❌ **Don't:**
- Forget `.env.local` (won't work without it)
- Share your `WHATSAPP_ACCESS_TOKEN` on GitHub
- Use `+91` in WHATSAPP_BUSINESS_ACCOUNT_ID
- Test more than 10 times in a row (rate limit)

✅ **Do:**
- Keep `.env.local` in `.gitignore` ✓ (already done)
- Restart server after adding `.env.local`
- Use international format: `918296883776` (no +)
- Wait 5-10 seconds for message to appear

---

## 📞 Your WhatsApp Number
**+91 82968 83776**

This is where all customer bookings will arrive.

---

## 🆘 Stuck?

1. **Check environment variables:**
   ```bash
   # Terminal (in project folder)
   cat .env.local
   # Should show all 3 variables
   ```

2. **Check server logs:**
   ```
   Look for:
   ✅ Message sent via WhatsApp: wamid_...
   or
   ❌ WhatsApp API Error: ...
   ```

3. **Verify credentials:**
   - Go to https://business.facebook.com
   - WhatsApp → Phone Numbers
   - Copy exact values (no spaces, no extra characters)

4. **Test API token manually:**
   - Go to https://developers.facebook.com/tools/explorer
   - Paste your Access Token
   - Run a test call (see Meta docs)

---

**Need help?** Read `WHATSAPP_CLOUD_API_SETUP.md` or check Meta Docs.
