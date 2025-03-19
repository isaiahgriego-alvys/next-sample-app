import NextBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone'
};

export default bundleAnalyzer(nextConfig);
