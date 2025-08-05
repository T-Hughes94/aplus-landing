// lib/email.ts
"use client";

import emailjs from "@emailjs/browser";

type BoxSelection = {
  orderDate: string;
  quantity: string;
};

type FormData = {
  name: string;
  email: string;
  message: string;
  boxes: BoxSelection[];
  eventInquiry: string;
};

export const sendEmail = async (formData: FormData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      box_orders: formData.boxes
        .map((box, index) => `Box ${index + 1}: ${box.quantity} chocolates on ${box.orderDate}`)
        .join("\n"),
      event_inquiry: formData.eventInquiry,
    };

    console.log("Sending email with params:", templateParams);

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    console.log("✅ Email sent successfully:", response.status, response.text);
    return response;
  } catch (error) {
    console.error("❌ EmailJS Error:", error);
    throw error;
  }
};







