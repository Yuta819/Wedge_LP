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

export const schoolChallenges = [
  // {
  //   title: "コミュニケーション不足",
  //   description:
  //     "高層ビルの建設現場にて、現場監督が上層階の作業員に急ぎの連絡をとろうとしても、作業員は騒音の中で携帯の着信に気づかず、結局地上階まで降りてくるまで連絡を受け取れない。作業工程に遅れが生じ、他チームとの連携にも支障が出てしまう。",
  //   solution:
  //     "無線機を導入し、リアルタイムの音声通信を可能にすることで、騒音環境下でも確実なコミュニケーションを実現。事務所にいながらでも作業員の状況を音声で把握できるため、チーム全体の連携がスムーズになる。",
  //   icon: FaComments,
  // },
  {
    title: "事務所とスタッフの連携",
    description:
      "先生やスタッフがどこにいるかわからないため、個人携帯等でしか連絡手段しかとれない。また、同じような内容の連絡を何度も繰り返さなければならない。",
    solution:
      "ネットワークに連携可能なインカム・トランシーバー・無線機では、電話との連携も可能であるため、どこにいても外線・内線に発信ができ、着信もできます。またワンプッシュで一斉送信が可能となり、離れた場所にいるスタッフと瞬時に連絡・情報共有が可能になります。\n\n※GIGAスクール構想の一環で導入が進んでいます",
    icon: FaExchangeAlt,
  },
  {
    title: "事故やトラブル等の緊急対応や不審者情報の共有",
    description:
      "事務所側の状況や他のスタッフの状況がわからないため、事故等の緊急対応や不審者情報等の一斉共有や状況共有や把握が難しい。",
    solution:
      "ネットワークに連携可能なインカム・トランシーバー・無線機の活用によって、ワンプッシュで一斉送信が可能となり、離れた場所にいるスタッフと瞬時に連絡・情報共有が可能になります。他フロアにいるスタッフに対しての応援要請や緊急時の役割分担もスムースに対応可能となります。\n\n※GIGAスクール構想の一環で導入が進んでいます",
    icon: FaExclamationTriangle,
  },
  // {
  //   title: "顧客対応の質のばらつき",
  //   description:
  //     "大手施主からの現地視察があり、担当者が現場で直接説明を行うが、ベテラン担当者と新人担当者で説明内容や質問回答のレベルが大きく異なる。結果、施主からの信頼を失う恐れがある。",
  //   solution:
  //     "無線機を通じて、新人担当者が説明時にベテラン担当者へサポート要請を行える。口頭だけでなく、タブレット画面や映像を介して資料を共有できるため、客先での質疑応答の精度が上がり、顧客満足度を向上。",
  //   icon: FaUserFriends,
  // },
  // {
  //   title: "業務効率の低下",
  //   description:
  //     "情報伝達がアナログ（紙ベースの指示書・電話）で行われるため、現場での作業手順変更や資材在庫の確認などをすぐに共有できず、対応待ちが頻発している。工期が延びる原因になる。",
  //   solution:
  //     "無線機の音声認識機能とAI連携を活用し、作業指示の自動作成や共有が可能に。作業報告も音声入力ですぐに共有できるため、二重入力の手間や指示ミスが減り、業務効率が大幅に向上。",
  //   icon: FaCogs,
  // },
  // {
  //   title: "リアルタイム情報共有の欠如",
  //   description:
  //     "建設現場では、作業環境の変化や天候の急変など突発的なアクシデントが多い。現場監督は都度メンバー全員に連絡したいが、個別に連絡するとタイムラグが生じ、指示が徹底されない。",
  //   solution:
  //     "無線機のグループ通話機能により、チーム別・エリア別に一斉放送や全体放送を切り替えられる。データ共有機能やクラウド連携により、作業進捗や現場の写真・動画を即時に共有し、迅速な意思決定をサポート。",
  //   icon: FaShareAlt,
  // },
  // {
  //   title: "人員配置の非効率性",
  //   description:
  //     "複数の工事エリアを同時並行で進める大規模現場において、どこに何人必要なのかが担当者の経験と勘に頼りがち。結果的に、人が余っているエリアと人手不足のエリアが発生してしまう。",
  //   solution:
  //     "無線機の位置情報機能とAI分析を活用し、各作業員の現在位置や稼働状況をリアルタイムで可視化。必要に応じて自動的に「作業Aには〇名配置してください」といった最適人員数を提案し、移動指示をワンタッチで共有可能。",
  //   icon: FaUsers,
  // },
  {
    title: "安全性の向上",
    description: "幅広い学校内で発生した事故やトラブル等を瞬時に把握したい",
    solution:
      "ネットワークに連携可能なインカム・トランシーバー・無線機では、インターホンや各種センサー、見守りカメラ、AI カメラとの連携も可能であるため、速やかなアラートや異常検知により現場確認等の移動距離、移動時間が短縮でき、効率的なオペレーションが可能となります。\n\n※GIGAスクール構想の一環で導入が進んでいます",
    icon: FaShieldAlt,
  },
  // {
  //   title: "校内の連絡体制が不十分",
  //   description: "緊急時の連絡が遅れる、教職員間の情報共有が難しい",
  //   solution:
  //     "無線機とネットワークの連携で、リアルタイムな情報共有と緊急連絡体制を構築",
  //   icon: FaSchool,
  // },
  // {
  //   title: "校内放送との連携が必要",
  //   description: "放送設備と連携した効率的な運営が求められる",
  //   solution: "校内放送システムと無線機を連携し、柔軟な情報伝達を実現",
  //   icon: FaSchool,
  // },
];
