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
              通常のトランシーバーとネットワークと連携させた無線機（システム）の違いは何ですか？
            </AccordionTrigger>
            <AccordionContent>
              ネットワークと連携させた無線機（システム）は、お客様のご要望に合わせカスタマイズして、構築するシステムとなります。
              <br />
              通常のトランシーバーはそれぞれのトランシーバーの電波法に定められた定格の出力され機器同士で電波を交信し、通信するため、エリアや外部機器との連携に制限がございますが、ネットワークと連携させた無線機（システム）を構築した場合、エリア拡張や外部機器との連携・接続が容易となります。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              どのような外部機器との連携が可能ですか？
            </AccordionTrigger>
            <AccordionContent>
              お客様の来店センターなどの各種センサー（チャイムやオーダーコール等）をインカム網の音源として取り込み、インカム網へ伝送する事で、迅速な対応が可能となり、顧客満足度の向上の最大化が可能です。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              無線LANトランシーバーはインターネットアクセスが必要ですか？
            </AccordionTrigger>
            <AccordionContent>
              基本的にローカールエリアネットワーク配下で稼働しますので、インターネットアクセスは不要です。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              システムを構築する場合に必要な要件は何ですか？
            </AccordionTrigger>
            <AccordionContent>
              当社エンジニアが現状のヒアリング・課題の確認などを行わせていただき、その内容に沿って、課題を解決するご提案をさせていただきます。設計・設定、施工、導入までお手伝いさせていただきますので、お気軽にご相談ください。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              既設の無線機をシステム化する事はできますか？
            </AccordionTrigger>
            <AccordionContent>
              すでにご導入されている機種や機器によっては可能です。当社エンジニアに確認ください。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              他社で導入したシステムなども修繕・改修可能ですか？
            </AccordionTrigger>
            <AccordionContent>
              可能です。当社エンジニアが調査の上、対応させていただきます。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
