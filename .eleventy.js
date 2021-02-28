module.exports = function(eleventyConfig) {
  // console.log(eleventyConfig)

  eleventyConfig.addPassthroughCopy("src/**/*.{gif,png,jpg,webp,css,js}");

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getAll()
      .filter(function(post) {
        // Only return content that was originally a markdown file
        let extension = post.inputPath.split('.').pop();
        return extension === "md";
      })
      .sort(function(a, b) {
        return a.data.title.localeCompare(b.data.title);
      });
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
