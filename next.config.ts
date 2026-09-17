import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["humanshu1745.localhost", "humanshu1745.local","humanshuise.localhost", "humanshuise.local","humanshuise.dev","humanshuise.com","www.humanshuise.in","www.humanshuise.com","humanshuise.in","www.humanshuise.in","humanshuise.me","www.humanshuise.me","humanshuise.org","www.humanshuise.org","humanshuise.co","www.humanshuise.co","humanshuise.net","www.humanshuise.net","humanshuise.io","www.humanshuise.io","humanshuise.app","www.humanshuise.app","humanshuise.tech","www.humanshuise.tech","humanshuise.online","www.humanshuise.online","humanshuise.web.app","www.humanshuise.web.app","humanshuise.vercel.app","www.humanshuise.vercel.app","humanshuise.sakshaminstitute.in","www.humanshuise.sakshaminstitute.in","developer.sakshaminstitute.in","www.developer.sakshaminstitute.in","developer.iskconravet.in","www.developer.iskconravet.in","developer.eternasrushti.in","www.developer.eternasrushti.in","developer.kesarievents.in","www.developer.kesarievents.in","humanshuise.netlify.app","www.humanshuise.netlify.app","humanshuise.fly.dev","www.humanshuise.fly.dev","humanshuise.pages.dev","www.humanshuise.pages.dev","humanshuise.github.io","www.humanshuise.github.io"],
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.humanshuise.in",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
    qualities: [75, 100],
  },
  compiler:
    process.env.NODE_ENV === "production"
      ? {
        removeConsole: {
          exclude: ["error"],
        },
      }
      : undefined,
}

export default nextConfig
