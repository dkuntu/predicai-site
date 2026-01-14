module.exports = function (eleventyConfig) {
  // Copy these folders/files straight through to output
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("robots.txt");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "partials"
    }
  };
};