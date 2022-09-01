import { resolve } from "path";

//组件库根目录
export const componentPath = resolve(__dirname, "../../../components");
// 发布dist需要的package.json所在地址
export const distPackagePath = resolve(__dirname, "../../transitpkg");
