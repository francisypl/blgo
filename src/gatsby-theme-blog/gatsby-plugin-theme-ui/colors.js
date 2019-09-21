import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

export const yellow    = '#FDE276';
export const pink      = '#ED7874';
export const offwhite  = '#FEFDF7';
export const teal      = '#74C8C1';
export const darkBlue  = '#2A525B';
export const darkGrey  = '#484848';
export const limeGreen = '#7ED321';
export const black     = '#000000';
export const white     = '#FFFFFF';

export default merge(defaultThemeColors, {
  text: darkGrey,
  primary: darkGrey,
  heading: darkGrey,
  background: white,
  section: {
    primary: white,
    alternate: offwhite
  },
  padding: {
    xxsmall: '4px',
    xsmall: '8px',
    small: '16px',
    medium: '24px',
    large: '32px',
    xlarge: '40px'
  }
  // modes: {
  //   dark: {
  //     background: blueGray,
  //     primary: lightBlue,
  //     highlight: lightBlue,
  //   },
  // },
});
