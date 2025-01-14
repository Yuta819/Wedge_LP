"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, Settings, Server, LineChart, Shield, X } from "lucide-react";
import styles from "./Available.module.css";

// カードデータ
const cards = [
  {
    id: "design",
    title: "設計費",
    category: "initial",
    icon: Settings,
    description: "システム設計と要件定義",
    details: "お客様のニーズに合わせたシステム設計と要件定義を行います。",
  },
  {
    id: "setup",
    title: "設定費",
    category: "initial",
    icon: Server,
    description: "初期設定と環境構築",
    details: "設計に基づいた初期設定と環境構築を実施します。",
  },
  {
    id: "equipment",
    title: "機器代金",
    category: "initial",
    icon: Wallet,
    description: "必要機器の購入費用",
    details:
      "高品質な機器を適正価格で提供。長期的な使用に耐える耐久性を確保します。",
  },
  {
    id: "management",
    title: "導入管理費",
    category: "initial",
    icon: LineChart,
    description: "導入プロセスの管理",
    details:
      "スムーズな導入をサポート。進捗管理から問題解決まで一貫してフォローします。",
  },
  {
    id: "maintenance",
    title: "保守管理費",
    category: "running",
    icon: Shield,
    description: "継続的なメンテナンスとサポート",
    details:
      "24時間365日の監視体制。トラブル時の迅速な対応で、安定稼働を維持します。",
  },
];

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Section = styled.section`
  padding: 4rem 0;
`;

const Timeline = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`;

const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const Classification = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
`;

const PricingCards = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <Section>
      <Container>
        <h2
          className={`${styles.animatedGradientText} text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center`}
        >
          初期導入費用
        </h2>
        <Subtitle>
          ※ネットワーク情報はすべてお客様より開示頂くものと致します。
        </Subtitle>

        <Timeline>
          <Classification>
            <ClassificationBox>
              <ClassificationTitle $color="blue">
                イニシャルコスト
              </ClassificationTitle>
              <Separator>/</Separator>
              <ClassificationTitle $color="purple">
                ランニングコスト
              </ClassificationTitle>
            </ClassificationBox>
          </Classification>
          <TimelineItem>
            {cards
              .filter((card) => card.category === "initial")
              .map((card, index) => (
                <Card
                  key={card.id}
                  {...card}
                  $index={index}
                  onClick={() => setSelectedCard(card.id)}
                />
              ))}
            <RunningCostWrapper>
              {cards
                .filter((card) => card.category === "running")
                .map((card, index) => (
                  <Card
                    key={card.id}
                    {...card}
                    $index={index}
                    onClick={() => setSelectedCard(card.id)}
                  />
                ))}
            </RunningCostWrapper>
          </TimelineItem>
        </Timeline>

        <AnimatePresence>
          {selectedCard && (
            <Modal
              key={selectedCard}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <ModalContent>
                <CloseButton onClick={() => setSelectedCard(null)}>
                  <X size={24} />
                </CloseButton>
                <ModalTitle>
                  {cards.find((c) => c.id === selectedCard)?.title}
                </ModalTitle>
                <ModalDescription>
                  {cards.find((c) => c.id === selectedCard)?.details}
                </ModalDescription>
              </ModalContent>
            </Modal>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
};

interface CardProps {
  title: string;
  icon: React.ElementType;
  description: string;
  category: string;
  $index: number;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  icon: Icon,
  description,
  category,
  $index,
  onClick,
}) => {
  return (
    <StyledCard
      className="e-card playing"
      $category={category}
      $index={$index}
      onClick={onClick}
    >
      <div className="wave" />
      <div className="wave" />
      <div className="wave" />

      <CardContent>
        <Icon size={40} className="icon" />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled.div<{ $category: string; $index: number }>`
  // トランジェントプロップ追加
  cursor: pointer;
  background: transparent;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 8px 28px -9px rgba(0, 0, 0, 0.45);
  transition: all 0.3s ease;

  .wave {
    position: absolute;
    width: 150%;
    height: 150%;
    opacity: 0.6;
    left: -25%;
    top: -50%;
    background: ${(props) =>
      props.$category === "initial"
        ? "linear-gradient(744deg, #3b82f6, #1d4ed8 60%, #60a5fa)"
        : "linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb)"};
    border-radius: 40%;
    animation: wave 20s infinite linear;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg) scale(1.2);
    }
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 30;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: #ffffff;

  .icon {
    margin-bottom: 0.5rem;
    color: #ffffff;
    font-size: 1.5rem;
  }
`;

const CardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  text-align: center;
  color: #ffffff;
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #4b5563;
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1e293b;
`;

const ModalDescription = styled.p`
  font-size: 1rem;
  color: #4b5563;
`;

const RunningCostWrapper = styled.div`
  grid-column: 3;
  grid-row: 2 / span 2;
  border: 2px solid #4a00e0;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ClassificationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  padding: 10px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ClassificationTitle = styled.h3<{ $color: "blue" | "purple" }>`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  background: ${(props) =>
    props.$color === "blue"
      ? "linear-gradient(135deg, #2563eb, #1d4ed8)"
      : "linear-gradient(135deg, #8b5cf6, #7c3aed)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Separator = styled.span`
  margin: 0 10px;
  font-size: 1.5rem;
  color: #6b7280;
`;

export default PricingCards;
