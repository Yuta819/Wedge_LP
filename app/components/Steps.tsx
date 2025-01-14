"use client";
import { Card, CardContent } from "@/components/ui/card";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import styles from "./Available.module.css";

const steps = [
  {
    title: "ヒアリング＆初回面談",
    description: "専門スタッフが丁寧にご要望をヒアリング致します。",
    animation:
      "https://lottie.host/cd107020-a40a-4875-a988-31b614a6fc2e/l1vWvH8JdH.lottie",
  },
  {
    title: "初回提案",
    description:
      "どのような業務が削減可能か、どんな付加価値が創出可能か、とことん寄り添い考え抜きます。",
    animation:
      "https://lottie.host/b37f4081-3410-48c5-83d6-74ef50da7110/EkitBMua1O.lottie",
  },
  {
    title: "二次面談",
    description:
      "概算費用の提示と共に、導入の費用対効果を担当が一緒に考え抜き、本当の満足を追求します。",
    animation:
      "https://lottie.host/fa3cc07c-b9fb-451f-aa18-7286b93c51e1/25FVzWGWRC.lottie",
  },
  {
    title: "デモの実施",
    description:
      "最も効果を実感頂ける機能に集中し、変化を体験していただきます。",
    animation:
      "https://lottie.host/9599a53d-2fb8-4a3e-9ade-590af537f394/8sWk1aSI75.lottie",
  },
  {
    title: "カスタマイズと見積",
    description:
      "デモの結果を踏まえ、より貴社のビジネスを効率化するべくカスタマイズを行います。ご予算に合わせて最も効果の得られる導入の形を一緒に考え、最終見積を提示いたします。",
    animation:
      "https://lottie.host/224d059a-fa56-4f23-9488-d5e30dbc77b5/vW1hB1HAZU.lottie",
  },
  {
    title: "実運用開始",
    description:
      "ご発注頂いた段階で無線機のセッティングを行い、いよいよ実運用がスタートします。専門技術者が迅速に設計・設定・導入管理を行います。",
    animation:
      "https://lottie.host/a50031e1-7bca-47fe-977e-dec1ddc2a696/bPmQoi0cXR.lottie",
  },
  {
    title: "アフターサポート",
    description:
      "担当が保守管理をメインに行いつつ、定期的にご状況をお伺いし、スムーズな運用と使い道の発展をサポート致します。",
    animation:
      "https://lottie.host/68a68c51-cfe5-46e3-b658-8aa8cee90c20/5lIg6FC5P0.lottie",
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
              カジュアルにお話しだけ聞いてみたいという方も大歓迎です！
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
