module.exports = function(eleventyConfig) {
  // Ensure images and the redirect file are copied to the live site
  eleventyConfig.addPassthroughCopy("src/logo.png");
  eleventyConfig.addPassthroughCopy("src/_redirects");
  eleventyConfig.addPassthroughCopy("src/*.jpg");
  eleventyConfig.addPassthroughCopy("src/*.png");
  
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
