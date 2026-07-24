# WhatsApp Cloud API Setup - Step by Step

## What You'll Get
- Free WhatsApp API (official Meta solution)
- Messages sent directly to your WhatsApp: **+91 82968 83776**
- No monthly costs (5000 free messages/month, then ~$0.06 per message)

---

## Step 1: Create Meta Business Account (5 minutes)

1. Go to **https://business.facebook.com**
2. Click **Create Account**
3. Fill in:
   - Business Name: `Slay By Salina`
   - Your Email: `your@email.com`
   - Business Phone: `8296883776`
   - Click **Create Account**

---

## Step 2: Create a Facebook App (5 minutes)

1. Go to **https://developers.facebook.com**
2. Click **My Apps** (top right)
3. Click **Create App**
4. Choose:
   - **App Type:** Business
   - **App Name:** `Slay Salon Booking`
   - **App Purpose:** Communication
   - Click **Create App**
5. Verify your email when prompted

---

## Step 3: Add WhatsApp Product (3 minutes)

1. In your app, go to **Add Product** (left sidebar)
2. Search for **WhatsApp**
3. Click **Add** next to WhatsApp
4. Choose **WhatsApp Business Account**
5. Select or create a WhatsApp Business Account
   - Choose your business phone: **8296883776**
6. Click **Get Started**

---

## Step 4: Generate API Token (2 minutes)

1. In your WhatsApp settings, go to **API Setup**
2. Look for **Temporary Access Token** section
3. Click **Generate Token**
4. **Copy the token** (it looks like: `EAAx...long string...`)
   - This is your `WHATSAPP_ACCESS_TOKEN`

---

## Step 5: Get Your Phone Number ID (1 minute)

1. In WhatsApp settings, go to **Phone Numbers**
2. You'll see your phone number: `+91 82968 83776`
3. Below it, copy the **Phone Number ID** (looks like: `123456789012345`)
   - This is your `NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER_ID`

---

## Step 6: Get Your Business Account ID (1 minute)

1. Go to **Settings** (bottom left in Business suite)
2. Click **Business Settings**
3. Go to **Accounts** → **WhatsApp Accounts**
4. Copy the **Business Account ID** (15-digit number)
   - This is your `WHATSAPP_BUSINESS_ACCOUNT_ID`

---

## Step 7: Add Credentials to Your Project

Create/edit `.env.local` in your project root:

```env
# WhatsApp Cloud API Credentials
NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER_ID=123456789012345
WHATSAPP_ACCESS_TOKEN=EAAx...your_long_token_here...
WHATSAPP_BUSINESS_ACCOUNT_ID=987654321098765
```

**⚠️ Important:**
- Keep `.env.local` secret (never commit to Git)
- Only `NEXT_PUBLIC_` variables are visible to browser
- Keep `WHATSAPP_ACCESS_TOKEN` private (backend only)

---

## Step 8: Update the API Code

Open `/app/api/send-whatsapp/route.ts` and replace the entire file:

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { SALON_CONTACT } from '@/lib/constants'

export async function POST(request: NextRequest) {
  try {
    const { message, formData } = await request.json()

    console.log('📱 New Appointment Request:')
    console.log(`Name: ${formData.name}`)
    console.log(`Email: ${formData.email}`)
    console.log(`Phone: ${formData.phone}`)
    console.log(`Service: ${formData.service}`)
    console.log(`Date: ${formData.date}`)
    console.log(`Time: ${formData.time}`)
    console.log(`---`)

    // Send via WhatsApp Cloud API
    const phoneNumberId = process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER_ID
    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN

    if (!phoneNumberId || !accessToken) {
      console.error('❌ Missing WhatsApp credentials in .env.local')
      return NextResponse.json(
        { error: 'WhatsApp not configured' },
        { status: 500 }
      )
    }

    const response = await fetch(
      `https://graph.instagram.com/v18.0/${phoneNumberId}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: SALON_CONTACT.WHATSAPP, // 918296883776
          type: 'text',
          text: {
            body: message,
          },
        }),
      }
    )

    const responseData = await response.json()

    if (!response.ok) {
      console.error('❌ WhatsApp API Error:', responseData)
      return NextResponse.json(
        { error: 'Failed to send WhatsApp message', details: responseData },
        { status: response.status }
      )
    }

    console.log('✅ Message sent via WhatsApp:', responseData.messages[0].id)

    return NextResponse.json(
      {
        success: true,
        message: 'Appointment request sent to WhatsApp',
        messageId: responseData.messages[0].id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Error processing appointment:', error)
    return NextResponse.json(
      { error: 'Failed to process appointment request' },
      { status: 500 }
    )
  }
}
```

---

## Step 9: Test Your Setup

1. Run your project:
   ```bash
   npm run dev
   ```

2. Go to **http://localhost:3000**

3. Open the appointment booking form

4. Fill it out and click **Book**

5. Check two places:

   **A) Your Terminal** (where you ran `npm run dev`):
   ```
   📱 New Appointment Request:
   Name: Test User
   Email: test@example.com
   ...
   ✅ Message sent via WhatsApp: wamid_AbCdEfGhIjKlMnOpQrStUvWxYz
   ```

   **B) Your WhatsApp** on phone/desktop:
   - You should receive the appointment message in WhatsApp:
   ```
   Hello! I would like to book an appointment.
   
   📋 *Appointment Details:*
   • Name: Test User
   • Email: test@example.com
   • Phone: 1234567890
   • Service: Haircut
   • Preferred Date: 2026-07-25
   • Preferred Time: 14:30
   
   Please confirm availability. Thank you!
   ```

---

## Troubleshooting

### ❌ "Missing WhatsApp credentials in .env.local"
- Check `.env.local` exists in project root
- Verify all 3 variables are present and not empty
- Restart server after adding `.env.local`

### ❌ "WhatsApp API Error: Invalid phone number"
- Make sure `WHATSAPP_BUSINESS_ACCOUNT_ID` is correct
- Phone must be in international format: `918296883776` (no +)

### ❌ Message not appearing in WhatsApp
- Check your phone is using the number registered in Meta Business
- Give it 5-10 seconds to arrive
- Check internet connection on your phone

### ❌ "Rate limit exceeded"
- Free tier: 5000 messages/month
- Check you're not sending test messages too quickly
- After going live, you can purchase higher limits

---

## What Happens Next

### For You:
✅ Every booking arrives in your WhatsApp inbox as a message
✅ You can reply directly in WhatsApp to confirm
✅ All conversation history in one place

### For Customers:
✅ They see "Message Sent!" confirmation
✅ They DON'T see WhatsApp opening
✅ They return to your website

---

## Next Steps (Optional)

### Add Verification Badge
1. Go to Meta Business Settings
2. Verify your business phone number
3. Upload ID for WhatsApp verification
4. Get "Verified" badge in your WhatsApp profile

### Set Up Automated Replies
1. In WhatsApp settings, go to **Quick Replies**
2. Create an auto-response:
   - Trigger: `hi`, `hello`
   - Reply: `Hi! Thanks for booking with Slay By Salina. We'll confirm your appointment soon! 💁‍♀️`

### Track Message Status
Messages will show delivery status in the API response:
- `sent` - Message queued
- `delivered` - Message reached WhatsApp
- `read` - Customer read it

---

## Meta Reference
- Official Docs: https://developers.facebook.com/docs/whatsapp/cloud-api/
- API Reference: https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages

**Questions?** Check the official Meta docs or terminal output for error details!
