"use client";
import { Card, CardContent } from "@/components/ui/card";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import styles from "./Available.module.css";

const steps = [
  {
    title: "ヒアリング＆初回面談",
    description: "専門スタッフが丁寧にご要望をヒアリング致します。",
    animation: "/Lottiejson/Step1.lottie",
  },
  {
    title: "初回提案",
    description:
      "どのような業務が削減可能か、どんな付加価値が創出可能か、とことん寄り添い考え抜きます。",
    animation: "/Lottiejson/Step2.lottie",
  },
  {
    title: "二次面談",
    description:
      "概算費用の提示と共に、導入の費用対効果を担当が一緒に考え抜き、本当の満足を追求します。",
    animation: "/Lottiejson/Step3.lottie",
  },
  {
    title: "デモの実施",
    description:
      "最も効果を実感頂ける機能に集中し、変化を体験していただきます。",
    animation: "/Lottiejson/Step4.lottie",
  },
  {
    title: "カスタマイズと見積",
    description:
      "デモの結果を踏まえ、貴社の業務を効率化するべくカスタマイズを行います。ご予算に合わせて最も効果の高い導入の形を一緒に考え、最終見積を提示いたします。",
    animation: "/Lottiejson/Step5.lottie",
  },
  {
    title: "設計・設定・導入管理",
    description:
      "最終お見積の仕様に基づき、エンジニアが設計・設定を行い、導入完了までの管理を行います。",
    animation: "/Lottiejson/Step6.lottie",
  },
  {
    title: "実運用開始",
    description:
      "担当者及びエンジニアが速やかな実運用を伴走させていただきます。",
    animation: "/Lottiejson/Step7.lottie",
  },
  {
    title: "アフターサポート",
    description:
      "担当が保守管理をメインに行いつつ、定期的にご状況をお伺いし、スムーズな運用と使い道の発展をサポート致します。",
    animation: "/Lottiejson/Step8.lottie",
  },
];

export default function Steps() {
  return (
    <section id="steps" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-grid-pattern"></div>
      <div className="relative z-1 ">
        <div className="container mx-auto relative z-2">
          <h2
            className={`${styles.animatedGradientText} text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center`}
          >
            簡単導入ステップ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mb-16 relative">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              >
                <CardContent className="p-6 flex flex-col md:flex-row items-center">
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:order-first" : "md:order-last"
                    } lg:order-none`}
                  >
                    <div className="w-24 h-24 mx-auto mb-4 md:mb-0">
                      <DotLottieReact src={step.animation} loop autoplay />
                    </div>
                  </div>
                  <div
                    className={`w-full md:w-1/2 text-center md:text-left ${
                      index % 2 === 0 ? "md:order-last" : "md:order-first"
                    } lg:order-none`}
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl mb-4">
              課題解決ではなく、情報収集等でカジュアルにお話しだけ聞いてみたいという方も大歓迎です！
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-grid-pattern {
          background-size: 50px 50px;
          background-image: linear-gradient(
              to right,
              rgba(59, 130, 246, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(59, 130, 246, 0.1) 1px,
              transparent 1px
            );
        }
      `}</style>
    </section>
  );
}
