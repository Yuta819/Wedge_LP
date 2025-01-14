"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, FileText } from "lucide-react";
import styled from "styled-components";
import Link from "next/link";

const CTASection = styled.section`
  position: relative;
  overflow: hidden;
  padding: 4rem 0;
  min-height: 400px;
  background: linear-gradient(-45deg, #6e45e2, #88d3ce, #4a00e0, #3f5efb);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 400px;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.05) 50%,
    transparent 70%
  );
  animation: glow 8s ease-in-out infinite alternate;

  @keyframes glow {
    from {
      opacity: 0.7;
      transform: translateX(-50%) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) scale(1.1);
    }
  }
`;

const FloatingLight = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.1)
  );
  filter: blur(60px);
  animation: float 20s infinite ease-in-out;

  &:nth-child(1) {
    top: -30px;
    left: 5%;
    animation-delay: -5s;
  }

  &:nth-child(2) {
    bottom: -30px;
    right: 5%;
    width: 150px;
    height: 150px;
    animation-delay: -10s;
  }

  &:nth-child(3) {
    top: 30%;
    left: 50%;
    width: 100px;
    height: 100px;
    animation-delay: -15s;
  }

  @media (min-width: 768px) {
    &:nth-child(1) {
      width: 150px;
      height: 150px;
    }

    &:nth-child(2) {
      width: 180px;
      height: 180px;
    }

    &:nth-child(3) {
      width: 120px;
      height: 120px;
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(20px, 20px);
    }
    50% {
      transform: translate(0, 40px);
    }
    75% {
      transform: translate(-20px, 20px);
    }
  }
`;

const StyledButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-weight: 400;
  padding: 1.5rem 2rem;
  transition: all 0.2s ease;
  white-space: nowrap;
  min-width: max-content;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const CheckItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9375rem;
  line-height: 1.6;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  svg {
    flex-shrink: 0;
    margin-top: 0.25rem;
    width: 16px;
    height: 16px;
    stroke-width: 3px;
  }
`;

const Divider = styled.div`
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.2),
    transparent
  );
  position: absolute;
  left: 5%;
  right: 5%;
  height: 1px;
  top: 50%;
  display: none;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1),
      transparent
    );
    filter: blur(2px);
  }

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1024px) {
    width: 1px;
    height: auto;
    top: 10%;
    bottom: 10%;
    left: 50%;
    right: auto;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2),
      transparent
    );

    &::before {
      top: 0;
      left: 50%;
      right: auto;
      bottom: 0;
      width: 3px;
      height: auto;
      transform: translateX(-50%);
      background: linear-gradient(
        to bottom,
        transparent,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.1),
        transparent
      );
    }
  }
`;

export default function CTA() {
  return (
    <CTASection>
      <FloatingLight />
      <FloatingLight />
      <FloatingLight />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight tracking-tight mb-6">
              無料で資料請求、
              <br />
              どんなご相談でもお聞かせください。
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://www.aaa-wedge.co.jp/contact/"
                passHref
                legacyBehavior
              >
                <StyledButton>
                  <FileText className="mr-2 h-5 w-5" />
                  資料請求
                </StyledButton>
              </Link>
              <Link
                href="https://www.aaa-wedge.co.jp/contact/"
                passHref
                legacyBehavior
              >
                <StyledButton>
                  <Mail className="mr-2 h-5 w-5" />
                  メールで相談
                </StyledButton>
              </Link>
            </div>
          </div>
          <Divider />
          <div className="space-y-6 md:space-y-8 pt-8 md:pt-0">
            <ul className="space-y-4 md:space-y-6">
              <CheckItem>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  導入事例と具体的な業務改善効果の詳細データをご確認いただけます
                </span>
              </CheckItem>
              <CheckItem>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  業界別の活用方法と期待できる効果の具体例をご紹介します
                </span>
              </CheckItem>
              <CheckItem>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  導入までの流れと初期費用・運用コストの詳細が分かります
                </span>
              </CheckItem>
              <CheckItem>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>
                  製品仕様と対応可能なカスタマイズの範囲をご確認いただけます
                </span>
              </CheckItem>
            </ul>
          </div>
        </div>
      </div>
      <GlowEffect />
    </CTASection>
  );
}
