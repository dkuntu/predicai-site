module.exports = function(eleventyConfig) {
  // 1. Copy the images directly so /logo.png works
  eleventyConfig.addPassthroughCopy("src/logo.png");
  eleventyConfig.addPassthroughCopy("src/*.jpg");
  eleventyConfig.addPassthroughCopy("src/*.png");
  eleventyConfig.addPassthroughCopy("src/*.ico");

  // 2. Copy the redirect rules so old .html links work
  eleventyConfig.addPassthroughCopy("src/_redirects");
  
  // 3. Keep copying assets if you still use them
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("robots.txt");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
