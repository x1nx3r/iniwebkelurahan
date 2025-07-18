/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.x1nx3r.uk",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
