"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white flex flex-col min-h-screen">
      <div className="flex-grow container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Products Column */}
          <div>
            <h3 className="text-white font-semibold mb-1">商品を選ぶ</h3>
            <p className="text-[#af40ff] text-xs mb-4">PRODUCTS</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/maker/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>メーカーから選ぶ
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/job/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>業種から選ぶ
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/ability/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>性能から選ぶ
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/type/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>種類から選ぶ
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/number/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>型番から選ぶ
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/accessory/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>アクセサリ
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/rental_item/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>レンタル製品一覧
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Column */}
          <div>
            <h3 className="text-white font-semibold mb-1">サービス一覧</h3>
            <p className="text-[#af40ff] text-xs mb-4">SERVICE</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/lease/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>ウェッジ・リース
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/original/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>
                  オリジナル商品・サービス
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/first/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>
                  初めてウェッジをご利用のお客様へ
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/bestchoice/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>BEST CHOICE
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/support/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>
                  インカムのサポート
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/application_agency/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>
                  行政書士を通した免許管理サービス
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/repair/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>
                  修理・メンテナンス
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/catalog/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>カタログ
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/guidebook/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>マニュアル
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/magazine/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>WEBマガジン一覧
                </Link>
              </li>
            </ul>
          </div>

          {/* About Transceiver Column */}
          <div>
            <h3 className="text-white font-semibold mb-1">
              インカム・トランシーバー・無線機について
            </h3>
            <p className="text-[#af40ff] text-xs mb-4">ABOUT TRANACEIVER</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/about_power/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>
                  特定小電力無線機について
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/about_proof/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>
                  防水・防塵性能について
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/about_license/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>
                  登録局・免許局について
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/about_ip/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>IP無線機について
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/about_vhf/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>国際VHFについて
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/about_network/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>
                  ネットワークについて
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/about_lan/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>無線LANについて
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/original/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>
                  オリジナル無線機について
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/lp/fuhou/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>
                  海外違法無線の啓発
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/lp/license/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>免許申請について
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/lp/ip/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>IP無線の比較
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/lp/aicamera/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>AIカメラ
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/lp/ic-drc1/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>
                  アイコム新トランシーバー
                </Link>
              </li>
            </ul>
          </div>

          {/* Recruit & Company Column */}
          <div>
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-1">採用情報</h3>
              <p className="text-[#af40ff] text-xs mb-4">RECRUIT</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://www.aaa-wedge.co.jp/recruit/"
                    className="hover:text-[#af40ff] flex items-center"
                  >
                    <span className="text-[#af40ff] mr-2">─</span>採用情報
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.aaa-wedge.co.jp/recruit_number/"
                    className="hover:text-[#af40ff] flex items-center"
                  >
                    <span className="text-[#af40ff] mr-2">─</span>
                    数字で見るウェッジ
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.aaa-wedge.co.jp/recruit_voice/"
                    className="hover:text-[#af40ff] flex items-center"
                  >
                    <span className="text-[#af40ff] mr-2">─</span>先輩からの声
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.aaa-wedge.co.jp/recruit_company/"
                    className="hover:text-[#af40ff] flex items-center"
                  >
                    <span className="text-[#af40ff] mr-2">─</span>社内風景
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.aaa-wedge.co.jp/recruit_privacy/"
                    className="hover:text-[#af40ff] flex items-center"
                  >
                    <span className="text-[#af40ff] mr-2">─</span>
                    個人情報取扱いについて
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-1">会社概要</h3>
              <p className="text-[#af40ff] text-xs mb-4">COMPANY</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://www.aaa-wedge.co.jp/company_overview"
                    className="hover:text-[#af40ff] flex items-center"
                  >
                    <span className="text-[#af40ff] mr-2">─</span>会社概要
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.aaa-wedge.co.jp/company_greeting/"
                    className="hover:text-[#af40ff] flex items-center"
                  >
                    <span className="text-[#af40ff] mr-2">─</span>ご挨拶
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.aaa-wedge.co.jp/company_chart/"
                    className="hover:text-[#af40ff] flex items-center"
                  >
                    <span className="text-[#af40ff] mr-2">─</span>組織図
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">全国拠点</h3>
              <p className="text-[#af40ff] text-xs mb-4">ACCESS</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://www.aaa-wedge.co.jp/situation/"
                    className="hover:text-[#af40ff] flex items-center"
                  >
                    <span className="text-[#af40ff] mr-2">─</span>拠点一覧
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Other Links Column */}
          <div>
            <h3 className="text-white font-semibold mb-1">お問い合わせ</h3>
            <p className="text-[#af40ff] text-xs mb-4">CONTACT</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/about_secondary/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>二次代理店募集
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/news/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>ニュース
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/magazine/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>WEBマガジン一覧
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/notation/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>
                  特定商取引に関する表記
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/link/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>リンク集
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/sitemap/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>サイトマップ
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/faq/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>FAQ よくある質問
                </Link>
              </li>
              <li>
                <Link
                  href="https://incom-navi.jp/support_trouble.php"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>
                  トラブルシューティング
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/privacy/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/whistleblowing/"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>通報制度
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/privacy/#security"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>
                  情報セキュリティ基本方針
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aaa-wedge.co.jp/privacymark"
                  className="hover:text-[#af40ff] flex items-center"
                >
                  <span className="text-[#af40ff] mr-2">─</span>
                  プライバシーマーク・ISO/IEC 27001
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 mt-auto">
        <p className="text-center text-white text-sm py-4">
          Copyright © 2025 Wedge co.,ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
