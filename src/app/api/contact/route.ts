import { NextRequest, NextResponse } from "next/server";
import ContactMaster from "../(models)/contactMaster";
import nodemailer from "nodemailer";
import { emailTemplate } from "@/utility/emailTemplete";

export async function POST(req: NextRequest) {
  const input = await req.json();
  try {
    const { email, mobileNumber, message } = input;
    const contactData = await ContactMaster.create({
      email,
      mobileNumber,
      message,
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pratik1264675@gmail.com",
        pass: "ijsawgdnwvgknpib",
      },
    });

    const mailOptions = {
      from: '"pratik1264675@email.com"',
      to: contactData.email,
      subject: "Auto Response-Do not reply",
      html: emailTemplate(contactData.email),
    };
    let info = await transporter.sendMail(mailOptions);

    if (info.response) {
      return NextResponse.json({
        success: true,
        message: "Email sent: " + info.response,
        data: contactData,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
