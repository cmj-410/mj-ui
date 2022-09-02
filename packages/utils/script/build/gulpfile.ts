import { series, parallel } from 'gulp'
import { buildTotalStyle, buildStyle, buildComponent } from './index'

export default series(
  parallel(
    async () => buildTotalStyle(),
    async () => buildStyle(),
    async () => buildComponent()
  )
)
