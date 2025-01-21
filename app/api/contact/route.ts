import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      lastName,
      firstName,
      lastNameKana,
      firstNameKana,
      company,
      prefecture,
      email,
      emailConfirm,
      phone,
      message,
    } = body;

    // メールアドレスの一致確認
    if (email !== emailConfirm) {
      return NextResponse.json(
        { error: "メールアドレスが一致しません" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER || "uta.3662@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // メール送信前の検証
    if (!process.env.GMAIL_APP_PASSWORD) {
      throw new Error("GMAIL_APP_PASSWORDが設定されていません");
    }

    // 会社宛のメール設定
    const companyMailOptions = {
      from: email,
      to: "uta.3662@gmail.com",
      subject: "Transceiverに関するお問い合わせ",
      text: `
無線機×インターネットによる業務改革のお問い合わせ

お名前: ${lastName} ${firstName}
フリガナ: ${lastNameKana} ${firstNameKana}
会社名: ${company}
都道府県: ${prefecture}
メールアドレス: ${email}
電話番号: ${phone || "未入力"}

ご相談内容:
${message}
      `,
    };

    // お客様宛の確認メール設定
    const customerMailOptions = {
      from: "uta.3662@gmail.com",
      to: email,
      subject: "お問い合わせありがとうございます",
      text: `${lastName} ${firstName} 様

お問い合わせありがとうございます。
以下の内容で承りました。

無線機×インターネットによる業務改革のお問い合わせ

お名前: ${lastName} ${firstName}
フリガナ: ${lastNameKana} ${firstNameKana}
会社名: ${company}
都道府県: ${prefecture}
メールアドレス: ${email}
電話番号: ${phone || "未入力"}

ご相談内容:
${message}

内容を確認の上、担当者より折り返しご連絡させていただきます。
      `,
    };

    // 両方のメールを送信
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json({
      success: true,
      message:
        "お問い合わせを受け付けました。入力いただいたメールアドレスに確認メールをお送りしましたのでご確認ください。",
    });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "メール送信に失敗しました。しばらく経ってから再度お試しください。",
      },
      { status: 500 }
    );
  }
}
