import merge from "deepmerge"
import defaultConfig from "gatsby-theme-blog/src/gatsby-plugin-theme-ui";

import space from './space';

export default merge(defaultConfig, {
  space
});
