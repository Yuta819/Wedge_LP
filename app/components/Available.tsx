"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import useMeasure from "react-use-measure";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./Available.module.css";
import { availableItems, ItemType } from "../data/availableItems";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @keyframes wave {
    0% { transform: translateX(0) translateZ(0) scaleY(1) }
    50% { transform: translateX(-25%) translateZ(0) scaleY(0.5) }
    100% { transform: translateX(-50%) translateZ(0) scaleY(1) }
  }

  .wave-background {
    position: absolute;
    left: 0;
    right: 0;
    top: -50%;
    bottom: -50%;
    background: linear-gradient(180deg, #af40ff, #5b42f3, #00ddeb);
    opacity: 0.2;
    transform-origin: center center;
    overflow: hidden;
  }

  .animate-wave {
    animation: wave 10s infinite linear;
    animation-fill-mode: forwards;
  }

  .wave-background::before,
  .wave-background::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: inherit;
    opacity: 0.5;
  }

  .animate-wave::before {
    animation: wave 16s infinite linear reverse;
    animation-fill-mode: forwards;
  }

  .animate-wave::after {
    animation: wave 20s infinite linear;
    animation-fill-mode: forwards;
  }

  @media (max-width: 640px) {
    .wave-background {
      top: -25%;
      bottom: -25%;
    }
  }

  .combination-tag {
    background: linear-gradient(90deg, #3b82f6, #1d4ed8);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const CARD_WIDTH = 350;
const CARD_HEIGHT = 450;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const Available: React.FC = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (availableItems.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) return;
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) return;
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section
      className="py-12 sm:py-20 px-4 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
      ref={ref}
    >
      <GlobalStyle />
      <div className="container mx-auto mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className={`${styles.animatedGradientText} text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center`}
          >
            トランシーバーの新たな可能性
          </h2>
          <p className="text-center text-lg sm:text-xl text-slate-500 mb-2 sm:mb-3">
            インカム・トランシーバー・無線機×ネットワーク
          </p>
          <p className="text-center text-lg sm:text-xl text-slate-500 mb-8 sm:mb-12">
            ネットワークを介してあらゆるツール/システムと連携可能に。
          </p>
          <p className="text-center text-lg sm:text-xl text-slate-500 mb-8 sm:mb-12">
            通信を軸として、業務改善＆人件費削減
          </p>
        </motion.div>
      </div>
      <div className="w-full overflow-hidden py-8 sm:py-12">
        <div className="relative">
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex"
          >
            {availableItems.map((item, index) => (
              <Card key={item.id} {...item} index={index} />
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <>
            <motion.button
              initial={false}
              animate={{
                x: CAN_SHIFT_LEFT ? "0%" : "-100%",
              }}
              className="absolute left-0 top-[60%] z-31 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
              onClick={shiftLeft}
            >
              <FiChevronLeft />
            </motion.button>
            <motion.button
              initial={false}
              animate={{
                x: CAN_SHIFT_RIGHT ? "0%" : "100%",
              }}
              className="absolute right-0 top-[60%] z-31 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
              onClick={shiftRight}
            >
              <FiChevronRight />
            </motion.button>
          </>
        </div>
      </div>
    </section>
  );
};

const Card = ({
  title,
  description,
  animation,
  combination,
  index,
}: ItemType & { index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl overflow-hidden"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 z-11">
        <DotLottieReact
          src={animation}
          loop
          autoplay
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-21 rounded-2xl p-4 sm:p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40 z-11"></div>
        <div
          className={`wave-background z-21 ${isHovered ? "animate-wave" : ""}`}
        ></div>
        <div
          className={`wave-background z-21 ${isHovered ? "animate-wave" : ""}`}
          style={{ animationDuration: "7s", opacity: 0.1 }}
        ></div>
        <div
          className={`wave-background z-21 ${isHovered ? "animate-wave" : ""}`}
          style={{ animationDuration: "13s", opacity: 0.15 }}
        ></div>
        <motion.h3
          className="text-xl sm:text-2xl font-semibold mb-2 relative z-31"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm sm:text-base text-slate-200 mr-6 relative z-31"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
        >
          {description}
        </motion.p>
        <motion.p
          className="absolute bottom-4 left-4 text-xs sm:text-sm font-semibold text-white px-2 py-1 rounded-full z-41 combination-tag"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.9 }}
        >
          {combination}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Available;
