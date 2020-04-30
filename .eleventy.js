module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('style.css')
  eleventyConfig.addPassthroughCopy('scripts.js')
  eleventyConfig.addPassthroughCopy('markdown.png')
  eleventyConfig.addPassthroughCopy('me.jpg')
}
