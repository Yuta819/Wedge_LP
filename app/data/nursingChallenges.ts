import {
  FaComments,
  FaExchangeAlt,
  FaExclamationTriangle,
  FaUserFriends,
  FaCogs,
  FaShareAlt,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

export const nursingChallenges = [
  {
    title: "事務所とスタッフの連携",
    description:
      "外線と院内 PHS とが連携できないため、コールバックや外線のある場所まで移動しなければならない。また、同じような内容の連絡をスタッフごとに繰り返さなければならない。",
    solution:
      "ネットワークに連携可能なインカム・トランシーバー・無線機では、電話との連携も可能であるため、どこにいても外線・内線に発信ができ、着信もできます。またワンプッシュで一斉送信が可能となり、離れた場所にいるスタッフと瞬時に連絡・情報共有が可能になります。",
    icon: FaExchangeAlt,
  },
  {
    title: "複数の病棟や広範囲のエリアの連絡手段",
    description:
      "複数の病棟や広範囲のエリアを網羅する通信手段がないために、誰がどこにいるかの把握が難しく、院内 PHS、個人携帯、放送設備等、色々な手段を講じなければならない。",
    solution:
      "ネットワークに連携可能なインカム・トランシーバー・無線機では、無線 LAN を利用するために、複数の病棟や広範囲のエリアでの通信を網羅することが可能です。既設の無線 LANを利用できますので、大規模な投資を必要としません。",
    icon: FaUserFriends,
  },
  {
    title: "院内業務の業務効率化",
    description: "数多くのルーティン業務と各種のモニタリングに時間がとられる。",
    solution:
      "ネットワークに連携可能なインカム・トランシーバー・無線機では、インターホンや各種センサー、見守りカメラ、AI カメラとの連携も可能であるため、速やかなアラートや異常検知により現場確認等の移動距離、移動時間が短縮でき、効率的なオペレーションが可能となります。",
    icon: FaCogs,
  },
];
