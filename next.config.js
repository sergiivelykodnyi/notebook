const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra({
  basePath: "/notebook",
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
});
