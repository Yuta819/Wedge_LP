"use client";

import { Card, CardContent } from "@/components/ui/card";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import styles from "./Available.module.css";

const SOLUTION_TITLE = "無線機×ネットワークが生み出す効果";

const SOLUTION_ITEMS = [
  {
    title: "多機能接続",
    description:
      "AIセンサーで人の動きを検知し、どこからでも確認可能。様々なデバイスと連携し、統合的な管理を実現します。",
    animation:
      "https://lottie.host/db29d593-37ac-4e8e-b21f-f1925159431b/oSSNw30AA6.lottie",
  },
  {
    title: "柔軟な働き方をサポート",
    description:
      "固定電話との連携で、作業現場からも電話応対が可能。場所を選ばない業務環境を構築します。",
    animation:
      "https://lottie.host/8872f096-47f9-47d9-82de-e75dab8e540d/c3f9nhsdsI.lottie",
  },
  {
    title: "業務効率化とコスト削減",
    description:
      "受付業務の自動化で時間を有効活用。人員配置の最適化によりコストを削減します。",
    animation:
      "https://lottie.host/a1b7ad48-abf5-4592-86a0-5dcefd4ff31f/mhbQohYqpe.lottie",
  },
];

export default function Solution() {
  return (
    <section
      id="features"
      className="py-20 px-4 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto">
        <h2
          className={`${styles.animatedGradientText} text-3xl font-bold mb-12 text-center`}
        >
          {SOLUTION_TITLE}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SOLUTION_ITEMS.map((item, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 z-10 flex justify-end items-center">
                <div className="w-full h-[120%] absolute right-[-10%] top-[-10%]">
                  <DotLottieReact
                    src={item.animation}
                    loop
                    autoplay
                    className="w-[140%] h-[140%] opacity-80"
                  />
                </div>
              </div>
              <CardContent className="p-6 relative z-20">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
