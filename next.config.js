// /** @type {import('next').NextConfig} */

// import { withContentlayer } from 'next-contentlayer';

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// // module.exports = nextConfig;

// export default withContentlayer(nextConfig);

const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
