# WhatsApp Integration Guide

Your booking system now sends appointment requests silently to your WhatsApp (no redirect needed). The appointment details are logged server-side and can be integrated with a WhatsApp API service.

## Current Setup

- Users fill the booking form → Click "Book" → See success message ✅
- Appointment details are logged on the server (visible in console when you run `npm run dev`)
- Ready to integrate with WhatsApp API

## How to Enable Real WhatsApp Messaging

Choose one of these services:

### Option 1: WhatsApp Cloud API (Official - Recommended)

**Requires:** Meta Business Account (free)

1. **Set up WhatsApp Business Account**
   - Go to https://developers.facebook.com/
   - Create an app with WhatsApp product
   - Follow Meta's setup wizard to get:
     - `PHONE_NUMBER_ID` (your business number)
     - `ACCESS_TOKEN` (API key)

2. **Add environment variables**
   Create `.env.local` in your project root:
   ```
   NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER_ID=YOUR_PHONE_NUMBER_ID
   WHATSAPP_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
   WHATSAPP_BUSINESS_ACCOUNT_ID=YOUR_ACCOUNT_ID
   ```

3. **Update the API endpoint**
   Edit `/app/api/send-whatsapp/route.ts`:
   
   ```typescript
   // Uncomment and modify this section:
   const response = await fetch(
     `https://graph.instagram.com/v18.0/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER_ID}/messages`,
     {
       method: 'POST',
       headers: {
         'Authorization': `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         messaging_product: 'whatsapp',
         to: SALON_CONTACT.WHATSAPP,
         type: 'text',
         text: { body: message },
       }),
     }
   )

   if (!response.ok) {
     const error = await response.json()
     console.error('WhatsApp API error:', error)
   }
   ```

---

### Option 2: Twilio WhatsApp API

**Requires:** Twilio account ($5-20/month depending on volume)

1. **Sign up** at https://www.twilio.com/whatsapp

2. **Get credentials:**
   - Account SID
   - Auth Token
   - WhatsApp Sandbox Number (for testing) or verified business number

3. **Add environment variables**
   ```
   TWILIO_ACCOUNT_SID=your_account_sid
   TWILIO_AUTH_TOKEN=your_auth_token
   TWILIO_WHATSAPP_NUMBER=whatsapp:+1234567890
   ```

4. **Install Twilio SDK**
   ```bash
   npm install twilio
   ```

5. **Update API endpoint:**
   ```typescript
   import twilio from 'twilio'

   const client = twilio(
     process.env.TWILIO_ACCOUNT_SID,
     process.env.TWILIO_AUTH_TOKEN
   )

   const response = await client.messages.create({
     from: process.env.TWILIO_WHATSAPP_NUMBER,
     to: `whatsapp:+91${SALON_CONTACT.WHATSAPP}`,
     body: message,
   })
   ```

---

### Option 3: Message Bird

**Requires:** Message Bird account (free tier available)

Visit https://messagebird.com/en/whatsapp for setup

---

## Testing Locally

Right now, when users submit a booking:

1. ✅ They see a success message
2. 📱 Appointment details appear in your terminal (where you ran `npm run dev`)
3. 📋 Look for lines like:
   ```
   📱 New Appointment Request:
   Name: John Doe
   Email: john@example.com
   ...
   ```

You can manually forward these to your WhatsApp or integrate an API as above.

## File Locations

- **API Endpoint:** `/app/api/send-whatsapp/route.ts` ← Modify this for your service
- **Appointment Popup:** `/components/appointment-popup.tsx`
- **Booking Form:** `/components/booking-form.tsx`
- **Phone Number:** `/lib/constants.ts` (WHATSAPP field)

## Support

If you get stuck, check:
- Meta Developer Docs: https://developers.facebook.com/docs/whatsapp/cloud-api/
- Twilio Docs: https://www.twilio.com/docs/whatsapp
- Console errors: Check browser DevTools (F12 → Console tab)
- Server logs: Check terminal where you ran `npm run dev`
