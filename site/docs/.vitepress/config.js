export default {
  themeConfig: {
    siteTitle: false,
    logo: '/mjUI_logo.png',
    nav: [
      { text: '指南', link: '/guild/installation' },
      { text: '组件', link: '/examples/alert/' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/cmj-410/mj-ui' }],
    sidebar: {
      '/guild/': [
        {
          text: '基础',
          items: [
            {
              text: '安装',
              link: '/guild/installation',
            },
            {
              text: '快速开始',
              link: '/guild/quickstart',
            },
          ],
        },
        {
          text: '进阶',
          items: [
            {
              text: 'xx',
              link: '/xx',
            },
          ],
        },
      ],
      '/examples/': [
        {
          text: '基础组件',
          collapsible: true,
          items: [
            {
              text: 'alert',
              link: '/examples/alert/',
            },
            {
              text: 'button',
              link: '/examples/button/',
            },
          ],
        },
      ],
    },
  },
}
