import * as components from './src/index'
export * from './src/index'
import './styles/index.less'
import { IMJUI } from './types/global'

export default {
  install: (app: any) => {
    for (const comkey in components) {
      if ((components as any)[comkey]?.theName == 'mj-' + 'message') {
        const temp = (components as any)[comkey]
        temp._context = app._context
        app.config.globalProperties.$Message = temp
      } else {
        app.use((components as any)[comkey])
      }
    }
    app.config.globalProperties.$MJUI = {
      drawers: [],
      modals: [],
    } as IMJUI
  },
}
