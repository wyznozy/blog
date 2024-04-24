/**
 * 
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV = 'production';
const nextConfig = {
  basePath: isProd ? '/blog' : '',
  output: 'export',
  disDir: 'dist',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;