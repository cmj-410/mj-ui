import { src, dest } from 'gulp'
import { componentPath } from '../utils/paths'
import less from 'gulp-less'
import autoprefixer from 'gulp-autoprefixer'
import run from '../utils/run'

//处理样式（整体的样式）
export const buildTotalStyle = () => {
  return src(`${componentPath}/styles/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${componentPath}/dist/lib/styles`))
    .pipe(dest(`${componentPath}/dist/es/styles`))
}

//处理样式（每个组件的）
export const buildStyle = () => {
  return src(`${componentPath}/src/**/styles/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${componentPath}/dist/lib/src`))
    .pipe(dest(`${componentPath}/dist/es/src`))
}

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath)
}
