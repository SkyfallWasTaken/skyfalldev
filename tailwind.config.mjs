/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.pink[800]"),
            "--tw-prose-bold": theme("colors.text"),
            "--tw-prose-headings": theme("colors.text"),
            "--tw-prose-links": theme("colors.text"),
            "--tw-prose-hr": theme("colors.pink[300]"),
            "--tw-prose-quotes": theme("colors.text"),
            "--tw-prose-kbd": theme("colors.text"),

            "--tw-prose-quote-borders": theme("colors.pink[300]"),
            "--tw-prose-captions": theme("colors.pink[700]"),
            "--tw-prose-code": theme("colors.text"),
            "--tw-prose-pre-code": theme("colors.text"),
            "--tw-prose-pre-bg": theme("colors.pink[900]"),
          },
        },
      }),
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "macchiato",
    }),
    require("@tailwindcss/typography"),
  ],
};
