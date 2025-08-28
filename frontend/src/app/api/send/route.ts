import { Resend } from 'resend';
import ContactFormEmail from '@/emails/contact-form-email';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  const { name, email, phone, subject, message, inquiryType } = await req.json();

  if (!process.env.RESEND_API_KEY) {
    return new NextResponse(JSON.stringify({ error: 'Resend API key not configured' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: '22c44.thejas@sjec.ac.in', // Replace with your email address
      subject: `New contact form submission: ${subject}`,
      react: ContactFormEmail({
        name,
        email,
        phone,
        subject,
        message,
        inquiryType,
      }),
    });

    return new NextResponse(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new NextResponse(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    return new NextResponse(JSON.stringify({ error: 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}

