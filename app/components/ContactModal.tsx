// "use client";

// import React, { useState } from "react";
// import styled, { keyframes } from "styled-components";
// import Link from "next/link";

// interface ContactModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const gradientAnimation = keyframes`
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// `;

// const ModalOverlay = styled.div`
//   position: fixed;
//   inset: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1000;
//   background-color: rgba(255, 255, 255, 0.4);
//   backdrop-filter: blur(10px);
//   padding: 1rem;
// `;

// const ModalContent = styled.div`
//   position: relative;
//   width: 100%;
//   max-width: 32rem;
//   @media (min-width: 640px) {
//     max-width: 36rem;
//   }
//   @media (min-width: 1024px) {
//     max-width: 40rem;
//   }
// `;

// const GlassCard = styled.div`
//   position: relative;
//   border-radius: 1.5rem;
//   overflow: hidden;
//   background: rgba(255, 255, 255, 0.7);
//   backdrop-filter: blur(10px);
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
// `;

// const DecorativeShape = styled.div`
//   position: absolute;
//   border-radius: 50%;
//   background: linear-gradient(
//     45deg,
//     rgba(110, 69, 226, 0.3),
//     rgba(74, 0, 224, 0.3),
//     rgba(59, 130, 246, 0.3)
//   );
//   filter: blur(20px);
//   animation: ${gradientAnimation} 15s ease infinite;
//   background-size: 200% 200%;

//   &:nth-child(1) {
//     top: -50px;
//     left: -50px;
//     width: 150px;
//     height: 150px;
//   }

//   &:nth-child(2) {
//     bottom: -30px;
//     right: -30px;
//     width: 100px;
//     height: 100px;
//     animation-delay: -7s;
//   }
// `;

// const ContentWrapper = styled.div`
//   position: relative;
//   padding: 2rem;
//   color: #4a00e0;
// `;

// const Title = styled.h2`
//   font-size: 1.5rem;
//   @media (min-width: 640px) {
//     font-size: 1.75rem;
//   }
//   @media (min-width: 1024px) {
//     font-size: 2rem;
//   }
//   font-weight: bold;
//   margin-bottom: 1.5rem;
//   text-align: center;
//   background: linear-gradient(45deg, #4a00e0, #3b82f6);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   animation: ${gradientAnimation} 10s ease infinite;
//   background-size: 200% 200%;
// `;

// const FormGrid = styled.div`
//   display: grid;
//   gap: 1rem;
//   @media (min-width: 640px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

// const FormField = styled.div`
//   @media (min-width: 640px) {
//     &:nth-child(3),
//     &:nth-child(4),
//     &:nth-child(5) {
//       grid-column: span 2;
//     }
//   }
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem 1rem;
//   border-radius: 0.5rem;
//   background-color: rgba(255, 255, 255, 0.5);
//   border: 1px solid rgba(74, 0, 224, 0.3);
//   color: #4a00e0;
//   transition: all 0.3s;
//   font-size: 0.875rem;

//   &:focus {
//     outline: none;
//     border-color: #3b82f6;
//     box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
//     background-color: rgba(255, 255, 255, 0.8);
//   }

//   &::placeholder {
//     color: rgba(74, 0, 224, 0.5);
//   }
// `;

// const TextArea = styled.textarea`
//   width: 100%;
//   padding: 0.75rem 1rem;
//   border-radius: 0.5rem;
//   background-color: rgba(255, 255, 255, 0.5);
//   border: 1px solid rgba(74, 0, 224, 0.3);
//   color: #4a00e0;
//   transition: all 0.3s;
//   font-size: 0.875rem;
//   resize: vertical;
//   min-height: 100px;

//   &:focus {
//     outline: none;
//     border-color: #3b82f6;
//     box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
//     background-color: rgba(255, 255, 255, 0.8);
//   }

//   &::placeholder {
//     color: rgba(74, 0, 224, 0.5);
//   }
// `;

// const Label = styled.label`
//   display: block;
//   font-size: 0.75rem;
//   font-weight: 600;
//   background: linear-gradient(45deg, #4a00e0, #3b82f6);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   margin-bottom: 0.25rem;
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 1rem;
//   margin-top: 2rem;
// `;

// const Button = styled.button<{ $primary?: string }>`
//   flex: 1;
//   padding: 0.75rem 1rem;
//   border-radius: 0.5rem;
//   font-weight: 600;
//   transition: all 0.3s;
//   font-size: 0.875rem;
//   text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(
//       90deg,
//       transparent,
//       rgba(255, 255, 255, 0.2),
//       transparent
//     );
//     transition: 0.5s;
//   }

//   &:hover::before {
//     left: 100%;
//   }

//   ${(props) =>
//     props.$primary === "true"
//       ? `
//     background: linear-gradient(45deg, #4a00e0, #3b82f6);
//     color: white;
//     border: none;
//     &:hover {
//       box-shadow: 0 4px 10px rgba(74, 0, 224, 0.3);
//     }
//   `
//       : `
//     background-color: rgba(255, 255, 255, 0.5);
//     color: #4a00e0;
//     border: 1px solid rgba(74, 0, 224, 0.3);
//     &:hover {
//       background-color: rgba(255, 255, 255, 0.8);
//       box-shadow: 0 4px 10px rgba(74, 0, 224, 0.1);
//     }
//   `}
// `;

// const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     company: "",
//     position: "",
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const subject = encodeURIComponent("Transceiverに関するお問い合わせ");
//     const body =
//       encodeURIComponent(`無線機×インターネットによる業務改革のお問い合わせ

// 企業名: ${formData.company}
// 役職: ${formData.position}
// お名前: ${formData.name}
// メールアドレス: ${formData.email}
// ご相談内容:
// ${formData.message}
//   `);
//     const mailtoLink = `mailto:tyokorann819@gmail.com?subject=${subject}&body=${body}`;

//     if (window.confirm("デフォルトのメーラーを開いて送信しますか？")) {
//       window.location.href = mailtoLink;

//       // Send confirmation email to the sender
//       const confirmationSubject =
//         encodeURIComponent("お問い合わせありがとうございます");
//       const confirmationBody = encodeURIComponent(`${formData.name} 様

// お問い合わせありがとうございます。
// 以下の内容で承りました。

// 無線機×インターネットによる業務改革のお問い合わせ

// 企業名: ${formData.company}
// 役職: ${formData.position}
// お名前: ${formData.name}
// メールアドレス: ${formData.email}
// ご相談内容:
// ${formData.message}

// 内容を確認の上、担当者より折り返しご連絡させていただきます。
//       `);
//       const confirmationMailtoLink = `mailto:${formData.email}?subject=${confirmationSubject}&body=${confirmationBody}`;

//       // Open the confirmation email in a new window
//       window.open(confirmationMailtoLink, "_blank");

//       onClose();
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <ModalOverlay onClick={onClose}>
//       <ModalContent onClick={(e) => e.stopPropagation()}>
//         <GlassCard>
//           <DecorativeShape />
//           <DecorativeShape />
//           <ContentWrapper>
//             <Title>お問い合わせ</Title>
//             <form onSubmit={handleSubmit}>
//               <FormGrid>
//                 <FormField>
//                   <Label htmlFor="company">企業名</Label>
//                   <Input
//                     type="text"
//                     id="company"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     placeholder="株式会社トランシーバー"
//                     required
//                   />
//                 </FormField>
//                 <FormField>
//                   <Label htmlFor="position">役職</Label>
//                   <Input
//                     type="text"
//                     id="position"
//                     name="position"
//                     value={formData.position}
//                     onChange={handleChange}
//                     placeholder="マネージャー"
//                     required
//                   />
//                 </FormField>
//                 <FormField>
//                   <Label htmlFor="name">お名前</Label>
//                   <Input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="山田 太郎"
//                     required
//                   />
//                 </FormField>
//                 <FormField>
//                   <Label htmlFor="email">メールアドレス</Label>
//                   <Input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="yamada@example.com"
//                     required
//                   />
//                 </FormField>
//                 <FormField>
//                   <Label htmlFor="message">ご相談内容</Label>
//                   <TextArea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="ご相談内容をご記入ください"
//                     required
//                   />
//                 </FormField>
//               </FormGrid>
//               <ButtonGroup>
//                 <Button type="button" onClick={onClose}>
//                   閉じる
//                 </Button>
//                 <Link href="https://www.aaa-wedge.co.jp/contact/" passHref>
//                   <Button as="a" $primary="true">
//                     外部フォームで問い合わせ
//                   </Button>
//                 </Link>
//               </ButtonGroup>
//             </form>
//           </ContentWrapper>
//         </GlassCard>
//       </ModalContent>
//     </ModalOverlay>
//   );
// };

// export default ContactModal;
