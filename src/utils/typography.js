import Typography from "typography"
import CodePlugin from 'typography-plugin-code'
import theme from "typography-theme-wordpress-2015"

theme.plugins = [
  new CodePlugin(),
]

theme.overrideThemeStyles = ({ rhythm }, options) => ({
  'ul, ol': {
    marginLeft: rhythm(1),
  }
})

const typography = new Typography(theme)
export const { scale, rhythm, options } = typography
export default typography
