export default {
  themeConfig: {
    siteTitle: false,
    logo: '/mjUI_logo.png',
    nav: [
      { text: '指南', link: '/guild/installation' },
      { text: '组件', link: '/examples/alert/' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/cmj-410/mj-ui' }],
    base: '/mj-ui-doc/',
    // head: [
    //   [
    //     'script',
    //     {
    //       async: 'true',
    //     },
    //     `
    //     var resource = document.createElement('link');
    //     resource.setAttribute("rel", "stylesheet");
    //     resource.setAttribute("href","https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined");
    //     resource.setAttribute("type","text/css");
    //     var head = document.querySelector('head');
    //     head.appendChild(resource);
    //       `,
    //   ],
    // ],
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
              text: 'alert 警告提醒',
              link: '/examples/alert/',
            },
            {
              text: 'button 按钮',
              link: '/examples/button/',
            },
            {
              text: 'checkbox 复选框',
              link: '/examples/checkbox/',
            },
            {
              text: 'select 选择器',
              link: '/examples/select/',
            },
          ],
        },
      ],
    },
  },
}
