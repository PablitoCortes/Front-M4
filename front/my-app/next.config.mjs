/** @type {import('next').NextConfig} */
const nextConfig = {
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
      "http2.mlstatic.com",
      "example.com",
      "p3-ofp.static.pub",
      "mac-center.com",
      "fdn2.gsmarena.com"
    ],
  },
};

export default nextConfig; 