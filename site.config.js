const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Trần Đức Ngạn",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Student",
    bio: "Xin chào đây là blog của Trần Đức Ngạn",
    email: "ducngan.contact@gmail.com",
    linkedin: "",
    github: "ngan-tranduc",
    instagram: "ngan.tranduc",
  },
  projects: [
    // Bạn có thể thêm projects sau này nếu muốn
    // {
    //   name: `project-name`,
    //   href: "https://github.com/ngan-tranduc/project-name",
    // },
  ],
  // blog setting (required)
  blog: {
    title: "Blog Của Ngạn",
    description: "Chào mừng bạn đến với blog của Ngạn!",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configuration (required)
  link: "https://ngan-blog.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "vi-VN", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR', 'vi-VN']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Bình luận",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }