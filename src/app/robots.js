export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://kemayoran-sby.vercel.app/sitemap.xml",
  };
}
