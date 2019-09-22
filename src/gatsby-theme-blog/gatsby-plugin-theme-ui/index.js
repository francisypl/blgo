import merge from "deepmerge"
import defaultConfig from "gatsby-theme-blog/src/gatsby-plugin-theme-ui";

export default merge(defaultConfig, {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
});
