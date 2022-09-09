1. 组件的按需引用，dist中 index导入导出的变量不是同一个
2. component 中引用hook modal等路径的缩写
3. icon在文档中全局引入
4. √---   文档自动部署生成github page
5. 使用组件无属性提示
6. 在vitepress 中组件的部分样式被 .vp-doc覆盖
7. vertical divider在example中无法显示
8. 按钮doc中select展示有小圆点和scrollbar
9. input下的提示信息可设置颜色类型
10. √--- placement位置参数统一  // tooltip,popover 12, select 8 drawer 2
11. 打包的组件库存在冗余的文件夹结构，使用rollup的output.preserveModulesRoot 配置没有生效
12. 打包组件库无法找到声明类型
13. message在setup中无需this的使用
14. 为npm包添加vue的对等依赖才能正常使用该包
