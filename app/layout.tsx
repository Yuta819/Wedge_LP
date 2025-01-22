import StyledComponentsRegistry from "./lib/registry";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "無線機×インターネット | Wedge",
  description:
    "無線機とインターネットを組み合わせた革新的なソリューション。業務効率化と生産性向上を実現する次世代の無線機システムをご提供します。",
  keywords:
    "無線機, インターネット, IoT, 業務効率化, デジタル化, 通信システム, Wedge",
  openGraph: {
    title: "無線機×インターネット | Wedge",
    description:
      "無線機とインターネットを組み合わせた革新的なソリューション。業務効率化と生産性向上を実現する次世代の無線機システムをご提供します。",
    url: "https://wedge-lp.vercel.app/",
    siteName: "Wedge",
    images: [
      {
        url: "/wedge-og-image.png",
        width: 1200,
        height: 630,
        alt: "Wedge - 無線機×インターネット",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "無線機×インターネット | Wedge",
    description:
      "無線機とインターネットを組み合わせた革新的なソリューション。業務効率化と生産性向上を実現する次世代の無線機システムをご提供します。",
    images: ["/wedge-og-image.png"],
  },
  icons: {
    icon: [{ url: "/Wedge-logo2_1.ico" }],
    shortcut: [{ url: "/Wedge-logo2_1.ico" }],
    apple: [{ url: "/Wedge-logo2_1.ico" }],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/Wedge-logo2_1.ico",
      },
    ],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://wedge-lp.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
