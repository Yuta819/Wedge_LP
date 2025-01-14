"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import useMeasure from "react-use-measure";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./Available.module.css";
import { availableItems, ItemType } from "../data/availableItems";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 450; // Increased height to accommodate Lottie animation
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const waveAnimation = `...省略...`; // アニメーション CSS は省略します。

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

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = waveAnimation;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <section
      className="py-12 sm:py-20 px-4 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
      ref={ref}
    >
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
            ネットワークを介してあらゆるツール/システムと連携可能に。
          </p>
          <p className="text-center text-lg sm:text-xl text-slate-500 mb-8 sm:mb-12">
            通信から業務改善＆人件費削減
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
              <Card key={item.id} {...item} $index={index} />
            ))}
          </motion.div>

          {/* BUTTONS */}
          <motion.button
            className="absolute left-0 top-[60%] z-30"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            className="absolute right-0 top-[60%] z-30"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
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
  $index,
}: ItemType & { $index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: $index * 0.2, ease: "easeOut" }}
      className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <DotLottieReact src={animation} loop autoplay className="absolute" />
      <motion.h3>{title}</motion.h3>
      <motion.p>{description}</motion.p>
      <motion.p>{combination}</motion.p>
    </motion.div>
  );
};

export default Available;
