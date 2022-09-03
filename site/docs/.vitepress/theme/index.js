import DefaultTheme from 'vitepress/theme'
import showBox from '../../components/showBox.vue'
import mjUI from 'mj-ui'

import './styles.less'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component('show-box', showBox)
    app.use(mjUI)
  },
}
