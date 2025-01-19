import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { company, position, name, email, message } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "uta.3662@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email to the company
    const companyMailOptions = {
      from: email, // Use the email from the form
      to: "uta.3662@gmail.com",
      subject: "Transceiverに関するお問い合わせ",
      text: `
無線機×インターネットによる業務改革のお問い合わせ

企業名: ${company}
役職: ${position}
お名前: ${name}
メールアドレス: ${email}
ご相談内容:
${message}
      `,
    };

    // Email to the customer (confirmation)
    const customerMailOptions = {
      from: "uta.3662@gmail.com",
      to: email,
      subject: "お問い合わせありがとうございます",
      text: `${name} 様

お問い合わせありがとうございます。
以下の内容で承りました。

無線機×インターネットによる業務改革のお問い合わせ

企業名: ${company}
役職: ${position}
お名前: ${name}
メールアドレス: ${email}
ご相談内容:
${message}

内容を確認の上、担当者より折り返しご連絡させていただきます。
      `,
    };

    // Send both emails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
