// next.config.mjs

// ① v0-user-next.config を読み込む (存在しなければ無視する)
let userConfig = {};
try {
  userConfig = await import("./v0-user-next.config.js");
  // ↑ ファイル名に拡張子を付けるほうが安全
} catch (e) {
  // ファイルが無い場合などは無視
}

// ② ベースとなる nextConfig を定義
/** @type {import('next').NextConfig} */
let nextConfig = {
  // 静的エクスポートを有効化 (Next.js 13 以降)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  compiler: {
    styledComponents: true,
  },
};

// ③ userConfig をマージする関数
function mergeConfig(baseConfig, overrideConfig) {
  if (!overrideConfig) {
    return baseConfig;
  }
  for (const key in overrideConfig) {
    if (
      typeof baseConfig[key] === "object" &&
      baseConfig[key] !== null &&
      !Array.isArray(baseConfig[key])
    ) {
      // オブジェクト同士ならスプレッド演算子でマージ
      baseConfig[key] = {
        ...baseConfig[key],
        ...overrideConfig[key],
      };
    } else {
      // それ以外の場合は上書き
      baseConfig[key] = overrideConfig[key];
    }
  }
  return baseConfig;
}

// ④ マージ処理を実行
nextConfig = mergeConfig(nextConfig, userConfig.default || userConfig);

// ⑤ 最終的に一度だけ export
export default nextConfig;
