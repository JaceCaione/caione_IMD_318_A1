module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("_src/style.css");
return {
    dir: {
        input: "_src"
    }
}
};