import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "可动程序文档",
  description: "Documentation for the CGexe Project",
  head: [['link', { rel: 'icon', href: '/img/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'https://cgexe.com/' },
      { text: 'Plugins', link: 'https://cgexe.com/plugins/' }
    ],
    logo: '/img/cgexe-logo.webp',
    siteTitle: '可动程序文档',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: 'deep',
    outlineTitle: '章节导航',
    lastUpdatedText: '上次更新时间',
    sidebar: {

      '/RS-NodeTool/': [
        {
          text: 'RS-NodeTool',
          collapsed: false,
          items: [
            { text: '简介/更新说明', link: '/RS-NodeTool/' },
            { text: '插件设置/登录验证', link: '/RS-NodeTool/01-RNT-setting' },
            { text: 'AutoPBR（自动PBR）', link: '/RS-NodeTool/02-RNT-AutoPBR' },
            { text: 'AutoNode（自动节点）', link: '/RS-NodeTool/03-RNT-AutoNode' },
            { text: 'AutoID（自动ID）', link: '/RS-NodeTool/04-RNT-AutoID' },
            { text: 'To PBR（PBR连接）', link: '/RS-NodeTool/05-RNT-To_PBR' },
            { text: 'Set TriPlanar（处理平铺）', link: '/RS-NodeTool/06-RNT-TriPlanar' },
            { text: 'UV PSR（添加PSR控制）', link: '/RS-NodeTool/07-RNT-UV_PSR' },
            { text: 'Set UDIM（设置UDIM）', link: '/RS-NodeTool/08-RNT-Set_UDIM' },
            { text: 'Color Space（设置颜色空间）', link: '/RS-NodeTool/09-RNT-Color_Space' },
            { text: 'To Sprite（转为Sprite）', link: '/RS-NodeTool/10-RNT-To_Sprite' },
            { text: 'Optimize Node（优化节点）', link: '/RS-NodeTool/11-RNT-Optimize_Node' },
            { text: 'Blur Node（模糊节点）', link: '/RS-NodeTool/12-RNT-Blur_Node' },
          ]
        }
      ],

      '/guide/': [
        {
          text: 'guide',
          collapsed: false,
          items: [
            { text: 'Markdown Examples', link: '/guide/markdown-examples' },
            { text: 'Runtime API Examples', link: '/nav/index' },
            { text: 'about', link: '/guide/about-project' },
          ]
        }
      ]
    },
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      {
        icon: {
          svg: '<svg t="1700899801979" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4192" width="200" height="200"><path d="M977.2 208.2c33.4 36.2 48.8 79.4 46.6 131.4v404.8c-0.8 52.8-18.4 96.2-53 130.2-34.4 34-78.2 51.8-131 53.4H184.04c-52.9-1.6-96.42-19.6-130.56-54.4C19.364 838.8 1.534 793 0 736.4V339.6c1.534-52 19.364-95.2 53.48-131.4C87.62 175.5 131.14 157.54 184.04 156h58.76L192.1 104.38c-11.5-11.46-17.26-26-17.26-43.58 0-17.6 5.76-32.12 17.26-43.594C203.6 5.736 218.2 0 235.8 0s32.2 5.736 43.8 17.206L426.2 156h176l149-138.794C763.4 5.736 778.4 0 796 0c17.6 0 32.2 5.736 43.8 17.206 11.4 11.474 17.2 25.994 17.2 43.594 0 17.58-5.8 32.12-17.2 43.58L789.2 156h58.6c52.8 1.54 96 19.5 129.4 52.2z m-77.6 139.4c-0.8-19.2-7.4-34.8-21.4-47-10.4-12.2-28-18.8-45.4-19.6H192.1c-19.18 0.8-34.9 7.4-47.16 19.6-12.28 12.2-18.8 27.8-19.56 47v388.8c0 18.4 6.52 34 19.56 47s28.76 19.6 47.16 19.6H832.8c18.4 0 34-6.6 46.6-19.6 12.6-13 19.4-28.6 20.2-47V347.6z m-528.6 85.4c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.4 12.6-28 19-47.2 19-19.2 0-35-6.4-47.2-19-12.2-12.6-18.8-28-19.6-46.4v-66.6c0.8-18.2 7.6-33.8 20.2-46.4 12.6-12.6 26.4-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z m383 0c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.2 12.6-28 19-47.2 19-19.2 0-34.8-6.4-47.2-19-14-12.6-18.8-28-19.4-46.4v-66.6c0.6-18.2 7.4-33.8 20-46.4 12.6-12.6 28.2-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z" p-id="4193"></path></svg>'
        },
        link: 'https://space.bilibili.com/1435411362',
      }
    ],

    footer: {
      message: '',
      copyright: 'Copyright © 可动程序 CGexe',
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: { //zh是不生效的，改为root即可
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭搜索',
                }
              }
            }
          }
        }
      }
    },
  }
})
