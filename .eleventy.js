module.exports = function(eleventyConfig) {
  // console.log(eleventyConfig)

  eleventyConfig.addPassthroughCopy("src/**/*.{gif,png,jpg,webp,css,js}");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
