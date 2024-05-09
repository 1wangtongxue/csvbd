import { defineConfig } from 'vitepress'
import { nav, sidebar } from './relaconf'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/csvbd/',
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    sidebar:sidebar,
    outline:{  //右边侧边栏的跳转目录
      level: [1, 60],
      label: '目录'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
