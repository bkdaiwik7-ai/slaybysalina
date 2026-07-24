# WhatsApp Appointment Booking Setup

## Overview
Your salon website now integrates WhatsApp for appointment bookings. When users submit the appointment form, they are automatically redirected to WhatsApp with all their appointment details pre-filled.

## How It Works

1. **User fills the appointment form** with:
   - Name
   - Email
   - Phone number
   - Service
   - Preferred date
   - Preferred time

2. **User clicks "Confirm Appointment"**

3. **Success message appears** with WhatsApp opening notice

4. **WhatsApp opens automatically** (or prompts to open) with:
   - Pre-filled message containing all appointment details
   - Ready to send to your salon

## Configuration

### Update WhatsApp Number

The WhatsApp number is stored in `/lib/constants.ts`

**Default number:** `918296883776`

To change it:

1. Open `/lib/constants.ts`
2. Find the `WHATSAPP` field
3. Replace with your actual WhatsApp number (without +, country code first)

**Example:**
```typescript
export const SALON_CONTACT = {
  PHONE: '+918296883776',
  WHATSAPP: '918296883776',  // ← Change this
  NAME: 'Slay By Salina',
  EMAIL: 'contact@slaybysalina.com',
}
```

### WhatsApp Number Format

- **With +:** `+918296883776`
- **Without + (for WhatsApp API):** `918296883776` ✓ Use this format
- **Country codes:**
  - India: 91
  - USA: 1
  - UK: 44
  - etc.

## Message Format

When the user submits the appointment form, they receive this pre-filled message:

```
Hello! I would like to book an appointment.

📋 *Appointment Details:*
• Name: [Customer Name]
• Email: [Customer Email]
• Phone: [Customer Phone]
• Service: [Selected Service]
• Preferred Date: [Date]
• Preferred Time: [Time]

Please confirm availability. Thank you!
```

## Features

✅ **Automatic WhatsApp Redirect** - Opens WhatsApp web or app
✅ **Pre-filled Message** - All appointment details included
✅ **Mobile Friendly** - Works on all devices
✅ **One-Click Confirmation** - User just needs to tap send
✅ **Formatted Message** - Professional formatting with emojis
✅ **Error Handling** - Works offline and online

## Customization

### Change Success Message

Edit the success message in `/components/appointment-popup.tsx` around line 164-169:

```typescript
<h3 className="font-serif text-2xl font-light uppercase tracking-widest">
  Opening WhatsApp
</h3>
<p className="max-w-xs text-sm font-light leading-relaxed text-muted-foreground">
  Thank you, {formData.name.split(' ')[0] || 'there'}! Connecting you to our WhatsApp for confirmation.
</p>
```

### Change WhatsApp Message Template

Edit the message in `/components/appointment-popup.tsx` around line 73-81:

```typescript
const appointmentMessage = `Hello! I would like to book an appointment.

📋 *Appointment Details:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Service: ${formData.service.charAt(0).toUpperCase() + formData.service.slice(1)}
• Preferred Date: ${formData.date}
• Preferred Time: ${formData.time}

Please confirm availability. Thank you!`
```

### Change Redirect Timing

The WhatsApp redirect happens 1.5 seconds after form submission. To change this, edit line 96 in `/components/appointment-popup.tsx`:

```typescript
setTimeout(() => {
  window.open(whatsappLink, '_blank')
}, 1500) // Change 1500 to desired milliseconds
```

## Testing

### Test on Web
1. Fill out the appointment form
2. Click "Confirm Appointment"
3. You should see success message
4. WhatsApp Web should open with pre-filled message

### Test on Mobile
1. Open website on mobile device
2. Fill out the appointment form
3. Click "Confirm Appointment"
4. WhatsApp app should open automatically
5. Message is pre-filled and ready to send

### Test WhatsApp Link Format
```
https://wa.me/[phone_number]?text=[message]

Example:
https://wa.me/918296883776?text=Hello%20I%20would%20like%20to%20book%20an%20appointment
```

## Browser Support

✅ Chrome
✅ Firefox
✅ Safari
✅ Edge
✅ Mobile Safari (iOS)
✅ Chrome Mobile (Android)

## Known Limitations

- Requires WhatsApp to be installed on mobile or WhatsApp Web to be accessible
- Desktop users will need WhatsApp Web open
- Some messaging apps may have character limits
- Special characters are URL-encoded automatically

## Troubleshooting

### WhatsApp not opening
- Check that the phone number includes country code (e.g., 91 for India)
- Remove any spaces or special characters from phone number
- Ensure WhatsApp Web is logged in on desktop
- Ensure WhatsApp app is installed on mobile

### Message not appearing
- Check message encoding (should be automatic)
- Verify phone number is correct in constants.ts
- Clear browser cache and reload

### Phone number format issues
- Use only digits and country code
- No spaces, dashes, or parentheses
- Example correct: `918296883776`
- Example incorrect: `+91 82968 83776`

## Security Notes

✅ Phone number is only visible in client-side code
✅ No data is stored on server
✅ Message goes directly to WhatsApp
✅ No personal data transmitted except to WhatsApp

## Links

- WhatsApp API Docs: https://www.whatsapp.com/business/
- WhatsApp Web: https://web.whatsapp.com/

---

**Last Updated:** 2026-07-23
**Version:** 1.0
