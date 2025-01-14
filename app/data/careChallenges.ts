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

export const careChallenges = [
  {
    title: "コミュニケーション不足",
    description:
      "夜勤と日勤スタッフの人数がギリギリで回しているため、申し送り事項や各入居者の状態把握に抜け漏れが発生。とくに夜間は看取り対応やナースコールが頻発するにもかかわらず、スタッフ同士の共有不足でトラブルが起きがち。",
    solution:
      "無線機を導入することで、ワンタッチで音声通信が可能になり、離れた場所にいるスタッフとも瞬時に連絡を取り合える。口頭でのやり取りだけではなく、施設内に置いてあるPCやスマホとも連携し、AI音声認識を活用して申し送り内容をテキスト化できるため、共有漏れを防止。",
    icon: FaComments,
  },
  {
    title: "現場と事務所の連携遅延",
    description:
      "入居者の体調が急変した際、現場スタッフが事務所へ状況を報告するまでに時間がかかり、緊急車両の手配や医療機関との連絡が後手に回る。事務所側も紙ベースの記録を頼りにするため、正確な情報を得るのに手間がかかり、書類確認と電話問い合わせに時間を費やしている。",
    solution:
      "無線機のネットワーク接続機能を利用し、現場スタッフはタブレットやPCを介して事務所とリアルタイムにやり取り可能。緊急時の報告が即座に共有されるため、事務所スタッフは医療機関やご家族への連絡をスピーディーに行える。必要に応じてAIが状況に合わせた対応フローを提示することで、的確な指示を迅速に出せる。",
    icon: FaExchangeAlt,
  },
  {
    title: "緊急時の対応遅れ",
    description:
      "夜間の巡回中に入居者が転倒し、担当者が一人で対応せざるを得ず、他スタッフへの連絡に時間がかかって応急処置が遅れてしまう。心肺停止や徘徊など予期せぬ事態が発生した際、全スタッフへ周知が徹底されるまでタイムラグが発生するため、救急対応や捜索が後手に回る。",
    solution:
      "無線機の緊急通報ボタンや特定チャンネルで一斉放送ができる機能により、発生直後に全スタッフへ周知可能。AI連携機能が備わっている場合、事前に登録した緊急マニュアルが自動表示され、スタッフは指示に従いながら迅速に対応できる。",
    icon: FaExclamationTriangle,
  },
  {
    title: "顧客対応の質のばらつき",
    description:
      "新人スタッフとベテランスタッフで入居者対応の差が大きく、不満を抱えるご家族からクレームが発生。認知症ケアや医療的ケアが必要な入居者に対して、各スタッフの知識や経験差が大きいため、トラブル対応に時間がかかる。",
    solution:
      "無線機を使うことで、新人スタッフが困ったときに即座にベテランスタッフへ相談・支援要請可能。音声ガイダンス機能やAIによる事例検索を導入することで、個々の入居者に合わせた標準的なケア方法をリアルタイムで参照し、ケアの質を均一化できる。",
    icon: FaUserFriends,
  },
  {
    title: "業務効率の低下",
    description:
      "毎日のバイタルチェックや食事介助、排泄介助などルーティン業務が多数存在し、記録や報告作業が後回しになりがち。情報伝達がスタッフ個人のメモや口頭伝達に依存しているため、入力ミスや伝達漏れが頻発し、確認作業に余計な時間がかかる。",
    solution:
      "無線機の音声認識機能とAI連携を活用し、バイタルチェックやケア内容をその場で音声入力→自動テキスト化・自動記録。スマホやPCとも連動させれば、スタッフはわざわざナースステーションに戻らなくても必要事項を入力・閲覧できるため、移動時間が削減され業務効率が向上。",
    icon: FaCogs,
  },
  {
    title: "リアルタイム情報共有の欠如",
    description:
      "夜勤帯に発生した出来事が、朝の申し送りで十分に共有されず、日勤メンバーが正しい対応策を把握できていない。認知症の入居者が昼夜逆転気味の場合、夜勤スタッフの状況把握を日中のスタッフがスムーズに引き継げず、ケアの継続性が担保できない。",
    solution:
      "無線機のグループ通話機能を使うことで、重要な出来事をその都度対象チーム全員にリアルタイム通知。音声記録とテキストログが紐づくシステムと連動させることで、朝の時点で夜間の経過報告を短時間で共有し、意思決定を速やかに行える。",
    icon: FaShareAlt,
  },
  {
    title: "人員配置の非効率性",
    description:
      "広い施設内を少人数で回す必要があるが、誰がどこにいるか正確に把握できず、必要なときに人手が足りないエリアが出てしまう。夜勤スタッフが複数フロアを兼任している場合、フロア間の移動時間と連絡不足が重なり、個々の業務負荷に偏りが生じる。",
    solution:
      "無線機の位置情報機能を活用し、どのスタッフがどのエリアにいるかをリアルタイムで可視化。AI分析によって、巡回ルートや割り当て業務を最適化し、スタッフの偏りを減らして稼働効率を高める。",
    icon: FaUsers,
  },
  {
    title: "セキュリティリスクの増大",
    description:
      "個人情報を含むケアプランや入居者の医療データなど、機密性の高い情報をメールや紙ベースでやり取りしているため、紛失や漏えいのリスクがある。施設内で使用する通信ツールがバラバラで、セキュリティポリシーが徹底されていない。",
    solution:
      "無線機がもつ高度な暗号化通信と二段階認証の仕組みを導入することで、外部からの盗聴や不正アクセスを防止。パソコンやスマホなど、ほかのデバイスと連携する際も同様の暗号化プロトコルを適用し、全体の情報セキュリティレベルを統一して高められる。",
    icon: FaShieldAlt,
  },
];