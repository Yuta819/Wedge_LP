import { IconType } from "react-icons";

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
    title: "要介護者のケアタイミングを自動検知",
    description:
      "監視カメラやセンサー付きカメラとトランシーバーを連携させることで、要介護者の状態をリアルタイムで把握。必要なタイミングで適切なケアを提供することが可能になります。",
    animation:
      "https://lottie.host/9fe1a2bf-cc72-418f-b136-65187de7e5be/kv1ixbk0Dt.lottie",
    combination: "無線機×監視カメラ/センサー付きカメラ",
  },
  {
    id: 2,
    title: "顧客体験の向上とマーケティングの強化",
    description:
      "顧客の行動パターンや嗜好を分析し、パーソナライズされた体験を提供。トランシーバーを通じてスタッフ間で情報を共有し、より効果的なマーケティング戦略を実現します。",
    animation:
      "https://lottie.host/5dfe1105-607d-4d1a-bb2c-cbd4c137d7b7/QRiTIra8zO.lottie",
    combination: "無線機×顧客データ/リサーチデータ",
  },
  {
    id: 3,
    title: "業務効率化×CXの最大化",
    description:
      "常に最適なタイミングで必要な情報を受け取り、行動できることにより、業務効率の向上と顧客満足度の増加を実現します。",
    animation:
      "https://lottie.host/2096f85d-ccb6-47f4-8fb7-53e5768183a0/nwYruLTr5L.lottie",
    combination: "無線機×AI/会話ログ",
  },
  {
    id: 4,
    title: "情報伝達ツールの利便性向上",
    description:
      "販促放送の遠隔操作や災害時の避難放送や災害状況の伝達など、放送設備の下に行かずとも、現場から各自の裁量で即時放送が可能",
    animation:
      "https://lottie.host/b2d147ca-1103-499a-aa4e-c1d2c3c58899/NWgf2X1iIn.lottie",
    combination: "無線機×放送機器",
  },
];
