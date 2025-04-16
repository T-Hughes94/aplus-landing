import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, collection, boxType, quantity, message } = await req.json();

  const user = process.env.YAHOO_USER;
  const pass = process.env.YAHOO_APP_PASSWORD;

  if (!user || !pass) {
    return NextResponse.json(
      { success: false, error: "Missing Yahoo credentials in .env" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "Yahoo",
    auth: { user, pass },
  });

  const mailOptions = {
    from: user,
    to: user, // change if client wants it to go somewhere else
    replyTo: email,
    subject: `New Contact Request from ${name}`,
    html: `
      <h3>New Contact Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Collection:</strong> ${collection}</p>
      <p><strong>Box Type:</strong> ${boxType}</p>
      <p><strong>Quantity:</strong> ${quantity}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}


