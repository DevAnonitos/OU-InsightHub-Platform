/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    }
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // crossOrigin: 'use-credentials',
};

export default nextConfig;  
