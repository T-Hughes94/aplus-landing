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
  const formattedBoxes = formData.boxes
    .map((box, idx) => `Box ${idx + 1}: ${box.quantity} chocolates on ${box.orderDate}`)
    .join("\n");

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    box_orders: formattedBoxes,
    event_inquiry: formData.eventInquiry,
  };

  try {
    // 1. Send email to A Plus Truffles
    const responseBusiness = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    console.log("✅ Business email sent:", responseBusiness.status, responseBusiness.text);

    // 2. Send auto-reply to customer
    const responseAutoReply = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID!,
      {
        ...templateParams,
        to_email: formData.email,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    console.log("✅ Auto-reply sent:", responseAutoReply.status, responseAutoReply.text);

    return { success: true };
  } catch (error) {
    console.error("❌ EmailJS Error:", error);
    throw error;
  }
};







