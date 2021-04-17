const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const CleanCSS = require("clean-css");

/**
 * Only return content that was originally a markdown file
 * @param {object} post
 */
function filterMarkdown(post) {
  let extension = post.inputPath.split(".").pop();
  return extension === "md";
}

module.exports = function (eleventyConfig) {
  // Plugins.
  eleventyConfig.addPlugin(syntaxHighlight);

  // Filters.
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Copy assets to to site.
  eleventyConfig.addPassthroughCopy("src/**/*.{gif,svg,png,jpg,webp,js}");

  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi
      .getAll()
      .filter(filterMarkdown)
      .sort((a, b) => a.data.title.localeCompare(b.data.title));
  });

  eleventyConfig.addCollection("tags", (collectionApi) => {
    const posts = collectionApi
      .getAll()
      .filter(filterMarkdown)
      .map((post) => post.data.tags)
      .flat()
      .sort((a, b) => a.localeCompare(b));
    const tags = new Set(posts);

    return tags;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
