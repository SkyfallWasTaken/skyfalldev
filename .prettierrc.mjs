// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  trailingComma: "all",
  singleQuote: false,

  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
