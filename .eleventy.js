
const { DateTime } = require("luxon")


module.exports = function(eleventyConfig) {

  // by default 11ty doesn't take in CSS
  eleventyConfig.addPassthroughCopy('./src/index.css')

  eleventyConfig.addFilter("formatDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
  })

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}