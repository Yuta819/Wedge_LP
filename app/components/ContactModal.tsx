"use client";

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

interface ContactModalProps {
  isOpen: boolean;
  initialMessage: string;
  onClose: () => void;
}

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  padding: 1rem;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 32rem;
  margin: 2rem auto;
  @media (min-width: 640px) {
    max-width: 36rem;
  }
  @media (min-width: 1024px) {
    max-width: 40rem;
  }
`;

const GlassCard = styled.div`
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  max-height: calc(100vh - 4rem);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(74, 0, 224, 0.2);
    border-radius: 4px;

    &:hover {
      background: rgba(74, 0, 224, 0.3);
    }
  }
`;

const DecorativeShape = styled.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    rgba(110, 69, 226, 0.3),
    rgba(74, 0, 224, 0.3),
    rgba(59, 130, 246, 0.3)
  );
  filter: blur(20px);
  animation: ${gradientAnimation} 15s ease infinite;
  background-size: 200% 200%;

  &:nth-child(1) {
    top: -50px;
    left: -50px;
    width: 150px;
    height: 150px;
  }

  &:nth-child(2) {
    bottom: -30px;
    right: -30px;
    width: 100px;
    height: 100px;
    animation-delay: -7s;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  padding: 2rem;
  color: #4a00e0;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  @media (min-width: 640px) {
    font-size: 1.75rem;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(45deg, #4a00e0, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientAnimation} 10s ease infinite;
  background-size: 200% 200%;
`;

const FormGrid = styled.div`
  display: grid;
  gap: 1rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FormField = styled.div`
  @media (min-width: 640px) {
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(8),
    &:nth-child(9),
    &:nth-child(10) {
      grid-column: span 2;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(74, 0, 224, 0.3);
  color: #4a00e0;
  transition: all 0.3s;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    background-color: rgba(255, 255, 255, 0.8);
  }

  &::placeholder {
    color: rgba(74, 0, 224, 0.5);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(74, 0, 224, 0.3);
  color: #4a00e0;
  transition: all 0.3s;
  font-size: 0.875rem;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    background-color: rgba(255, 255, 255, 0.8);
  }

  &::placeholder {
    color: rgba(74, 0, 224, 0.5);
  }
`;

const Label = styled.label`
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  background: linear-gradient(45deg, #4a00e0, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.25rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button<{ $primary?: string }>`
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s;
  font-size: 0.875rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  ${(props) =>
    props.$primary === "true"
      ? `
    background: linear-gradient(45deg, #4a00e0, #3b82f6);
    color: white;
    border: none;
    &:hover {
      box-shadow: 0 4px 10px rgba(74, 0, 224, 0.3);
    }
  `
      : `
    background-color: rgba(255, 255, 255, 0.5);
    color: #4a00e0;
    border: 1px solid rgba(74, 0, 224, 0.3);
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
      box-shadow: 0 4px 10px rgba(74, 0, 224, 0.1);
    }
  `}
`;

const FormDescription = styled.p`
  color: #4a00e0;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

const PhoneInfo = styled.p`
  color: #4a00e0;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-top: 1rem;
  text-align: center;
`;

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  initialMessage,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    lastNameKana: "",
    firstNameKana: "",
    company: "",
    prefecture: "",
    email: "",
    emailConfirm: "",
    phone: "",
    message: initialMessage,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      message: initialMessage,
    }));
  }, [initialMessage]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "メール送信に失敗しました");
      }

      alert(data.message);
      setFormData({
        lastName: "",
        firstName: "",
        lastNameKana: "",
        firstNameKana: "",
        company: "",
        prefecture: "",
        email: "",
        emailConfirm: "",
        phone: "",
        message: "",
      });
      onClose();
    } catch (error) {
      // console.error("Error sending email:", error); // 開発時のデバッグ用にコメントアウト
      alert(
        error instanceof Error
          ? error.message
          : "メール送信に失敗しました。しばらく経ってから再度お試しください。"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const prefectures = [
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県",
  ];

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <GlassCard>
          <DecorativeShape />
          <DecorativeShape />
          <ContentWrapper>
            <Title>お問い合わせ</Title>
            <FormDescription>
              お問合せについては、下記フォーマットにご自由にご記入ください。弊社よりご連絡をさせていただきます。
              <br />
              このフォームで収集した個人情報は、お問合せの回答のためにのみ使用させていただきます。
            </FormDescription>
            <form onSubmit={handleSubmit}>
              <FormGrid>
                <FormField>
                  <Label htmlFor="lastName">姓 *</Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </FormField>
                <FormField>
                  <Label htmlFor="firstName">名 *</Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </FormField>
                <FormField>
                  <Label htmlFor="lastNameKana">セイ *</Label>
                  <Input
                    type="text"
                    id="lastNameKana"
                    name="lastNameKana"
                    value={formData.lastNameKana}
                    onChange={handleChange}
                    required
                  />
                </FormField>
                <FormField>
                  <Label htmlFor="firstNameKana">メイ *</Label>
                  <Input
                    type="text"
                    id="firstNameKana"
                    name="firstNameKana"
                    value={formData.firstNameKana}
                    onChange={handleChange}
                    required
                  />
                </FormField>
                <FormField>
                  <Label htmlFor="company">会社名 *</Label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="ウェッジ株式会社"
                    required
                  />
                </FormField>
                <FormField>
                  <Label htmlFor="prefecture">都道府県 *</Label>
                  <select
                    id="prefecture"
                    name="prefecture"
                    value={formData.prefecture}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-white/50 border border-purple-300/30"
                  >
                    <option value="">選択してください</option>
                    {prefectures.map((pref) => (
                      <option key={pref} value={pref}>
                        {pref}
                      </option>
                    ))}
                  </select>
                </FormField>
                <FormField>
                  <Label htmlFor="email">メールアドレス *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@co.jp"
                    required
                  />
                </FormField>
                <FormField>
                  <Label htmlFor="emailConfirm">メールアドレス(確認) *</Label>
                  <Input
                    type="email"
                    id="emailConfirm"
                    name="emailConfirm"
                    value={formData.emailConfirm}
                    onChange={handleChange}
                    placeholder="上記と同じアドレスを入力"
                    required
                  />
                </FormField>
                <FormField>
                  <Label htmlFor="phone">電話番号</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="012-3456-7890"
                  />
                </FormField>
                <FormField>
                  <Label htmlFor="message">お問い合わせ内容</Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </FormField>
              </FormGrid>
              <ButtonGroup>
                <Button type="button" onClick={onClose} disabled={isSubmitting}>
                  閉じる
                </Button>
                <Button type="submit" $primary="true" disabled={isSubmitting}>
                  {isSubmitting ? "送信中..." : "メールを送信"}
                </Button>
              </ButtonGroup>
            </form>
            <PhoneInfo>
              お電話でのお問い合わせ：0120-248-144
              <br />
              （受付時間：平日9：15～12：00、13：00～18：00）
            </PhoneInfo>
          </ContentWrapper>
        </GlassCard>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ContactModal;
