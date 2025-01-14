"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import styles from "./Available.module.css";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2
          className={`${styles.animatedGradientText} text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center`}
        >
          よくある質問
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              無線機はどのような業種で利用できますか？
            </AccordionTrigger>
            <AccordionContent>
              無線機は、建設、介護、看護、飲食、宿泊をはじめ、さまざまな業種で活用できます。特にスタッフ間のコミュニケーションや情報共有が重要な業種において、その効果を発揮します。各業種特有の課題に対応したソリューションを提供しています。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              既存の通信システムとの統合は可能ですか？
            </AccordionTrigger>
            <AccordionContent>
              はい、可能です。弊社の無線機は既存の通信システムや業務用ソフトウェアと柔軟に連携できるよう設計されています。例えば、固定電話システムやPOSシステム、顧客管理システムなどとの統合が可能です。具体的な統合方法については、お客様の環境に合わせてカスタマイズいたします。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              導入にあたって特別な設備や工事は必要ですか？
            </AccordionTrigger>
            <AccordionContent>
              弊社の無線機は基本的にクラウドベースのシステムであり、特別な設備や大規模な工事は必要ありません。無線機器とスマートフォンやタブレットなどの端末があれば導入可能です。ただし、より安定した通信環境を確保するために、Wi-Fi環境の整備をお勧めする場合があります。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>セキュリティ面は大丈夫ですか？</AccordionTrigger>
            <AccordionContent>
              弊社の無線機は高度な暗号化技術を採用しており、通信内容の安全性を確保しています。また、ユーザー認証システムにより、許可されたスタッフのみがアクセスできる仕組みを構築しています。さらに、定期的なセキュリティアップデートを行い、最新の脅威にも対応しています。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              導入後のサポート体制はどうなっていますか？
            </AccordionTrigger>
            <AccordionContent>
              導入後も安心してご利用いただけるよう、充実したサポート体制を整えています。24時間365日の技術サポート、定期的なシステムアップデート、操作方法のトレーニングセッションなどを提供しています。また、お客様のニーズに応じたカスタマイズや機能拡張のご相談も承っております。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
