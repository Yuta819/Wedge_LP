"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import RequestButton from "./RequestButton";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const StyledLoader = styled.div`
  .loader {
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
    font-size: 14px;
    height: 24px;
    display: flex;
    overflow: hidden;

    @media (min-width: 640px) {
      font-size: 16px;
      height: 30px;
    }

    @media (min-width: 1024px) {
      font-size: 20px;
      height: 35px;
    }
  }

  .word {
    color: #333;
    display: block;
    height: 100%;
    padding-left: 6px;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
    animation: spin_4991 14s infinite;
    font-weight: 300;
  }

  @keyframes spin_4991 {
    0%,
    13% {
      transform: translateY(0%);
    }
    16.66%,
    30% {
      transform: translateY(-100%);
    }
    33.33%,
    46% {
      transform: translateY(-200%);
    }
    50%,
    63% {
      transform: translateY(-300%);
    }
    66.66%,
    80% {
      transform: translateY(-400%);
    }
    83.33%,
    96% {
      transform: translateY(-500%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;

const CircularAnimation = styled.div<{
  $angle: number;
  $radius: number;
  $index: number;
}>`
  position: absolute;
  width: 30%;
  height: 30%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${(props) => props.$angle}deg)
    translateX(${(props) => props.$radius}px)
    rotate(-${(props) => props.$angle}deg);
  animation: rotate 20s linear infinite;
  animation-delay: ${(props) => props.$index * -3.33}s;
  z-index: 30;

  @media (min-width: 768px) {
    width: 20%;
    height: 20%;
  }

  @media (min-width: 1024px) {
    width: 15%;
    height: 15%;
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(${(props) => props.$angle}deg)
        translateX(${(props) => props.$radius}px)
        rotate(-${(props) => props.$angle}deg);
    }
    to {
      transform: translate(-50%, -50%)
        rotate(${(props) => props.$angle + 360}deg)
        translateX(${(props) => props.$radius}px)
        rotate(-${(props) => props.$angle + 360}deg);
    }
  }
`;

export default function Hero() {
  const [radius, setRadius] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateRadius = () => {
      if (heroRef.current) {
        const { width, height } = heroRef.current.getBoundingClientRect();
        const newRadius = Math.min(width, height) * 0.25;
        setRadius(newRadius);
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const circularAnimations = [
    "https://lottie.host/4aa54927-f14e-4b98-af67-2b4ed8cd05d4/LlxfDjuvkv.lottie",
    "https://lottie.host/28c9112e-4204-430a-a2ee-a3b06b39a7b6/9VRcwPR3Kk.lottie",
    "https://lottie.host/c7ce75d9-0d28-4de2-b448-1a84d144fd34/YlP53okm8o.lottie",
    "https://lottie.host/c00000e2-2def-43e8-8183-7fb0e574947d/uzs4kK78Y2.lottie",
    "https://lottie.host/9f67aefb-2461-42b9-ae1f-cac67a32c919/MvT7J1cENj.lottie",
    "https://lottie.host/9bd2e1db-9cb0-440e-903a-64ef27236f2e/Tz3YHehhX2.lottie",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden" ref={heroRef}>
      <div className="relative grid h-auto min-h-screen grid-cols-1 md:grid-cols-12 gap-4 z-10 overflow-visible">
        <div className="col-span-12 md:col-span-7 relative overflow-visible h-[50vh] md:h-screen">
          <div className="absolute inset-0 z-30 flex items-center justify-center">
            <DotLottieReact
              src="https://lottie.host/671f1bfa-3089-482a-99ac-842fad4cdee5/muU6xpWZXb.lottie"
              loop
              autoplay
              className="w-full h-full md:w-4/5 md:h-4/5 lg:w-2/3 lg:h-2/3"
              style={{ zIndex: 21 }}
            />
          </div>
          {circularAnimations.map((src, index) => (
            <CircularAnimation
              key={index}
              className="z-40"
              $angle={index * 60}
              $radius={radius}
              $index={index}
            >
              <DotLottieReact
                src={src}
                loop
                autoplay
                className="w-full h-full"
                style={{ zIndex: 41 }}
              />
            </CircularAnimation>
          ))}
        </div>
        <div className="col-span-12 md:col-span-5 relative p-4 md:p-8 flex flex-col justify-end h-[50vh] md:h-screen">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute right-4 md:right-8 top-4 md:top-8 z-50"
          >
            <RequestButton />
          </motion.div>
          <div className="z-20 bg-transparent mb-8 md:mb-0">
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <div>
                <h2 className="text-blue-600 text-xs sm:text-sm md:text-base lg:text-lg mb-2 md:mb-4">
                  STATEMENT
                </h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2 md:space-y-3 lg:space-y-4"
                >
                  <p className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light">
                    無駄の多い確認作業を「０」に。
                  </p>
                  <p className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light">
                    業務負担を減らし、
                  </p>
                  <p className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light">
                    業務ストレスと人件費の削減へ。
                  </p>
                </motion.div>
              </div>

              <StyledLoader>
                <div className="loader">
                  <p className="text-gray-800 text-xs sm:text-sm md:text-base">
                    connecting with ...
                  </p>
                  <div className="words">
                    <span className="word">AI搭載機器</span>
                    <span className="word">固定電話</span>
                    <span className="word">入店ベル</span>
                    <span className="word">店内放送</span>
                    <span className="word">PC/タブレット</span>
                    <span className="word">顧客データ</span>
                  </div>
                </div>
              </StyledLoader>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const StyledWaveContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  pointer-events: none;
  z-index: 2;
  overflow: visible;

  @media (min-width: 640px) {
    width: 250px;
    height: 250px;
  }

  @media (min-width: 1024px) {
    width: 300px;
    height: 300px;
  }

  .wave {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    left: 0;
    top: 0;
    background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
    border-radius: 40%;
    animation: wave 55s infinite linear;
  }

  .wave1 {
    animation-duration: 3s;
  }
  .wave2 {
    animation-duration: 4s;
    opacity: 0.4;
  }
  .wave3 {
    animation-duration: 5s;
    opacity: 0.2;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
