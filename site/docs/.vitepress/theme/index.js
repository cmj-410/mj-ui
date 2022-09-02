import DefaultTheme from 'vitepress/theme'
import mjUI from 'mj-ui'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(mjUI)
  },
}
