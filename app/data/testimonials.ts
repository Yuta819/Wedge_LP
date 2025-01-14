import {
  FaHospital,
  FaIndustry,
  FaStore,
  FaHotel,
  FaSchool,
  FaUtensils,
} from "react-icons/fa";

export interface Testimonial {
  Icon: React.ElementType;
  description: string;
  name: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    Icon: FaHospital,
    description:
      "Transceiverの導入により、患者の待ち時間が30%削減され、スタッフの負担も大幅に軽減されました。緊急時の対応速度が向上し、患者様の安全性が高まりました。",
    name: "田中 美咲",
    title: "看護部長, 東京中央病院",
  },
  {
    Icon: FaIndustry,
    description:
      "工場内のコミュニケーションが円滑になり、生産性が15%向上しました。特に緊急時の対応が迅速になり、ダウンタイムの削減に大きく貢献しています。",
    name: "佐藤 健太",
    title: "生産管理部長, 日本製造株式会社",
  },
  {
    Icon: FaStore,
    description:
      "店舗スタッフ間の連携が強化され、顧客サービスの質が向上しました。在庫確認や商品案内がスムーズになり、売上が前年比10%増加しています。",
    name: "鈴木 愛",
    title: "店舗運営マネージャー, ABCストア",
  },
  {
    Icon: FaHotel,
    description:
      "ゲストの要望にすぐに対応できるようになり、顧客満足度が大幅に向上しました。特に多言語対応機能により、インバウンド観光客への対応が格段に改善されました。",
    name: "山田 隆",
    title: "総支配人, グランドホテル東京",
  },
  {
    Icon: FaSchool,
    description:
      "校内の安全管理が強化され、緊急時の対応がスムーズになりました。また、教職員間の情報共有が容易になり、業務効率が向上しています。",
    name: "伊藤 由美",
    title: "教頭, 青葉学園",
  },
  {
    Icon: FaUtensils,
    description:
      "キッチンとホールのコミュニケーションが改善され、料理の提供時間が短縮されました。お客様の待ち時間が減少し、回転率が20%向上しています。",
    name: "中村 誠",
    title: "オーナーシェフ, レストランサクラ",
  },
];
