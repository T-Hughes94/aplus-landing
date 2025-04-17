import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message, boxes } = await req.json();

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    return NextResponse.json(
      { success: false, error: "Missing Yahoo credentials in .env" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: { user, pass },
  });

  // Build HTML from boxes array
  const boxDetailsHTML = boxes
    .map(
      (box: { collection: string; boxType: string; quantity: string }, idx: number) => `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">${idx + 1}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${box.collection}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${box.boxType}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${box.quantity}</td>
        </tr>`
    )
    .join("");

  const htmlContent = `
    <h3 style="color: #333;">New Contact Request</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>

    <h4>Box Selections:</h4>
    <table style="border-collapse: collapse; width: 100%; margin-bottom: 16px;">
      <thead>
        <tr>
          <th style="padding: 8px; border: 1px solid #ddd;">#</th>
          <th style="padding: 8px; border: 1px solid #ddd;">Collection</th>
          <th style="padding: 8px; border: 1px solid #ddd;">Box Size</th>
          <th style="padding: 8px; border: 1px solid #ddd;">Quantity</th>
        </tr>
      </thead>
      <tbody>
        ${boxDetailsHTML}
      </tbody>
    </table>

    <p><strong>Message:</strong></p>
    <p style="background-color: #f9f9f9; padding: 12px; border-radius: 6px;">${message}</p>
  `;

  const mailOptions = {
    from: user,
    to: user,
    replyTo: email,
    subject: `New Contact Request from ${name}`,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}



