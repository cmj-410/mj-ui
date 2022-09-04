import * as components from './src/index'
export * from './src/index'
import './styles/index.less'

export default {
  install: (app: any) => {
    for (const comkey in components) {
      // if (comkey == 'Message') {
      if ((components as any)[comkey].theName == 'mj-' + 'message') {
        const temp = (components as any)[comkey]
        temp._context = app._context
        app.config.globalProperties.$Message = temp
      } else {
        app.component(
          (components as any)[comkey].name,
          (components as any)[comkey]
        )
      }
    }
  }
}
