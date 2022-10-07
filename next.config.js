/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["agumentik-software.vercel.app"],
  },
  env: {
    MAIL: `nodemailer143@gmail.com`,
    PASS: `srrnmrwwiaamrecd`,
    URL: "https://agumentik-project-suraj745.vercel.app/",
    MY_MAIL: "surajarya745@gmail.com",
    RECAPTCHA: `6LcKbekhAAAAAPp29-83upFuPt37YaZVWayAnyKV

    `,
  },
};

module.exports = nextConfig;
