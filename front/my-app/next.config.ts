import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  images: {
    domains: [
      "i.pinimg.com",
      "i.blogs.es",
      "store.storeimages.cdn-apple.com",
      "ipoint.com.ar",
      "m.media-amazon.com",
      "www.apple.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },
};

export default nextConfig;
