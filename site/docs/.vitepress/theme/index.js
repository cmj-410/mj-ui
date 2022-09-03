import DefaultTheme from 'vitepress/theme'
import showBox from '../../components/showBox.vue'
import showBlock from '../../components/showBlock.vue'
import propsTable from '../../components/propsTable.vue'
import mjUI from 'mj-ui'

import './styles.less'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component('show-box', showBox)
    app.component('show-block', showBlock)
    app.component('props-table', propsTable)
    app.use(mjUI)
  },
}
