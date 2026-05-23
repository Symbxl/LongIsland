/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "longislandexoticcars.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
