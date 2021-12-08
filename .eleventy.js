module.exports = function(eleventyConfig) {

  // by default 11ty doesn't take in CSS
  eleventyConfig.addPassthroughCopy('./src/index.css')

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}