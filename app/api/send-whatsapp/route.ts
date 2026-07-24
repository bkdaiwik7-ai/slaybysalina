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

    // Get WhatsApp credentials from environment
    const phoneNumberId = process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER_ID
    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN

    // If credentials not set, just log and return success
    // (for development without WhatsApp API setup)
    if (!phoneNumberId || !accessToken) {
      console.log('ℹ️ WhatsApp Cloud API not configured. To set up:')
      console.log('1. Create .env.local in your project root')
      console.log('2. Add your WhatsApp credentials from Meta Business')
      console.log('3. See WHATSAPP_CLOUD_API_SETUP.md for instructions')
      return NextResponse.json(
        {
          success: true,
          message: 'Appointment request received (WhatsApp API not configured)',
        },
        { status: 200 }
      )
    }

    // Send via WhatsApp Cloud API
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
