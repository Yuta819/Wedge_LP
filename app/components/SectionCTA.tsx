"use client";

import React from "react";
import { FileText, Mail } from "lucide-react";
import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import Link from "next/link";

const CTASection = styled.section`
  position: relative;
  overflow: hidden;
  padding: 3rem 0;
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
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 300px;
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
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.1)
  );
  filter: blur(40px);
  animation: float 15s infinite ease-in-out;

  &:nth-child(1) {
    top: -20px;
    left: 10%;
    animation-delay: -5s;
  }

  &:nth-child(2) {
    bottom: -20px;
    right: 10%;
    width: 120px;
    height: 120px;
    animation-delay: -7s;
  }

  @keyframes float {
    0%,
    100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 20px);
    }
  }
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-weight: 400;
  padding: 1rem 1.5rem;
  transition: all 0.2s ease;
  text-decoration: none;
  width: 100%;

  @media (min-width: 640px) {
    width: auto;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

interface SectionCTAProps {
  title: string;
}

export default function SectionCTA({ title }: SectionCTAProps) {
  return (
    <CTASection>
      <FloatingLight />
      <FloatingLight />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <h2 className="text-2xl md:text-3xl font-normal text-white leading-tight tracking-tight">
            {title}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
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
      </div>
      <GlowEffect />
    </CTASection>
  );
}
