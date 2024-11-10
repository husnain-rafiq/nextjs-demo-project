import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'main-cdn.grabone.co.nz',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'japannext.fr',
        pathname: '/**',
      },       {
        protocol: 'https',
        hostname: 'www.kindpng.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.independent.co.uk',
        pathname: '/**',
      }, {
        protocol: 'https',
        hostname: 'hardwaremarket.net',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: 'hardwaremarket.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'e7.pngegg.com',
        pathname: '/**',
      },
      // Add other domains as needed
    ],
  },
};

export default nextConfig;
