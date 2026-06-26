import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email, phone } = await request.json();

    const data = await resend.emails.send({
      from: 'Audit App <onboarding@resend.dev>', // Resend testing domain
      to: ['prince@mutanttechnologies.com'],
      subject: 'New Implementation Contract Request',
      html: `
        <h2>New Implementation Contract Request</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
