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

export const constructionChallenges = [
  {
    title: "コミュニケーション不足",
    description:
      "高層ビルの建設現場にて、現場監督が上層階の作業員に急ぎの連絡をとろうとしても、作業員は騒音の中で携帯の着信に気づかず、結局地上階まで降りてくるまで連絡を受け取れない。作業工程に遅れが生じ、他チームとの連携にも支障が出てしまう。",
    solution:
      "無線機を導入し、リアルタイムの音声通信を可能にすることで、騒音環境下でも確実なコミュニケーションを実現。事務所にいながらでも作業員の状況を音声で把握できるため、チーム全体の連携がスムーズになる。",
    icon: FaComments,
  },
  {
    title: "現場と事務所の連携遅延",
    description:
      "現場で資材が不足しているが、事務所にはメールや電話で連絡しても担当者不在のことが多く、対応が遅れがち。結果として資材の発注や手配が後手に回り、建設スケジュール全体に影響が出る。",
    solution:
      "無線機のネットワーク接続機能により、現場から事務所へのリアルタイムな情報交換を実現。ボタン一つで全体、もしくは特定のグループに一斉連絡できるので、担当者不在の場合でも即座に別の担当者へ接続して対応が可能。",
    icon: FaExchangeAlt,
  },
  {
    title: "緊急時の対応遅れ",
    description:
      "クレーン作業中に強風が発生して作業員に危険が及んだが、全員への周知に時間がかかったため、安全確保までの対応が遅れてしまう。大事故につながるリスクが高まる。",
    solution:
      "無線機に搭載されている緊急通報ボタンを使うことで、一瞬で全スタッフに一斉通知。重力センサーやAIと連携すれば、作業員が転倒したり衝撃を受けた場合にも、自動的にアラートが送信されるため、迅速な救護・対応が可能。",
    icon: FaExclamationTriangle,
  },
  {
    title: "顧客対応の質のばらつき",
    description:
      "大手施主からの現地視察があり、担当者が現場で直接説明を行うが、ベテラン担当者と新人担当者で説明内容や質問回答のレベルが大きく異なる。結果、施主からの信頼を失う恐れがある。",
    solution:
      "無線機を通じて、新人担当者が説明時にベテラン担当者へサポート要請を行える。口頭だけでなく、タブレット画面や映像を介して資料を共有できるため、客先での質疑応答の精度が上がり、顧客満足度を向上。",
    icon: FaUserFriends,
  },
  {
    title: "業務効率の低下",
    description:
      "情報伝達がアナログ（紙ベースの指示書・電話）で行われるため、現場での作業手順変更や資材在庫の確認などをすぐに共有できず、対応待ちが頻発している。工期が延びる原因になる。",
    solution:
      "無線機の音声認識機能とAI連携を活用し、作業指示の自動作成や共有が可能に。作業報告も音声入力ですぐに共有できるため、二重入力の手間や指示ミスが減り、業務効率が大幅に向上。",
    icon: FaCogs,
  },
  {
    title: "リアルタイム情報共有の欠如",
    description:
      "建設現場では、作業環境の変化や天候の急変など突発的なアクシデントが多い。現場監督は都度メンバー全員に連絡したいが、個別に連絡するとタイムラグが生じ、指示が徹底されない。",
    solution:
      "無線機のグループ通話機能により、チーム別・エリア別に一斉放送や全体放送を切り替えられる。データ共有機能やクラウド連携により、作業進捗や現場の写真・動画を即時に共有し、迅速な意思決定をサポート。",
    icon: FaShareAlt,
  },
  {
    title: "人員配置の非効率性",
    description:
      "複数の工事エリアを同時並行で進める大規模現場において、どこに何人必要なのかが担当者の経験と勘に頼りがち。結果的に、人が余っているエリアと人手不足のエリアが発生してしまう。",
    solution:
      "無線機の位置情報機能とAI分析を活用し、各作業員の現在位置や稼働状況をリアルタイムで可視化。必要に応じて自動的に「作業Aには〇名配置してください」といった最適人員数を提案し、移動指示をワンタッチで共有可能。",
    icon: FaUsers,
  },
  {
    title: "セキュリティリスクの増大",
    description:
      "工事現場への不法侵入や工具の盗難による工期の遅れや作業ミスが発生してしまう。",
    solution:
      "無線機を監視カメラや勤怠管理システムとも連携すれば、建設現場への不正侵入をリアルタイムで検知し、アラートを発信できる。",
    icon: FaShieldAlt,
  },
];
