"use client";

export interface ItemType {
  id: number;
  title: string;
  description: string;
  animation: string;
  combination: string;
}

export const availableItems: ItemType[] = [
  {
    id: 1,
    title: "情報伝達ツールとしての更なる利便性の向上",
    description:
      "電話（外線・内線）との融合、インターホンや館内放送設備との連携で、「場所」にいかなくても、現場から各自の裁量で即時連絡や放送が可能に。",
    animation:
      "https://lottie.host/b2d147ca-1103-499a-aa4e-c1d2c3c58899/NWgf2X1iIn.lottie",
    combination: "無線機×電話/放送設備",
  },
  {
    id: 2,
    title: "業務の効率化と CX の最大化",
    description:
      "見守りカメラ、AI カメラやデータベースとの連携も可能であるため、常に最適なタイミングで必要な情報を受け取り、行動することが可能となり、業務効率の向上と顧客満足度のUP を実現します。",
    animation:
      "https://lottie.host/5dfe1105-607d-4d1a-bb2c-cbd4c137d7b7/QRiTIra8zO.lottie",
    combination: "無線機×AI/カメラ/データベース",
  },
  {
    id: 3,
    title: "シームレスな通信エリアの確保と死角をゼロに",
    description:
      "無線 LAN との接続で、複数の建物や地下、高層階や屋上、そして広大な敷地内においてもシームレスな通信エリアの確保が可能となる上に、各種センサーとの連動で、現場確認等の移動距離、移動時間が短縮でき、なおかつ死角をゼロにできます。",
    animation:
      "https://lottie.host/9fe1a2bf-cc72-418f-b136-65187de7e5be/kv1ixbk0Dt.lottie",
    combination: "無線機×センサー",
  },
  // {
  //   id: 4,
  //   title: "情報伝達ツールの利便性向上",
  //   description:
  //     "販促放送の遠隔操作や災害時の避難放送や災害状況の伝達など、放送設備の下に行かずとも、現場から各自の裁量で即時放送が可能",
  //   animation:
  //     "https://lottie.host/2096f85d-ccb6-47f4-8fb7-53e5768183a0/nwYruLTr5L.lottie",
  //   combination: "無線機×放送機器",
  // },
];
