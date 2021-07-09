import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Fun Components',
  favicon: 'https://api.multiavatar.com/funguy.png',
  logo: 'https://api.multiavatar.com/funguy.png',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '指南',
      path: '/guide',
    },
    {
      title: '组件',
      path: '/components',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/alindas',
    },
    // {
    //   title: '我有二级导航',
    //   path: '链接是可选的',
    //   // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
    //   children: [
    //     { title: '第一项', path: 'https://d.umijs.org' },
    //     { title: '第二项', path: '/guide' },
    //   ],
    // },
  ],
  menus: {
    '/components': [
      {
        title: '3D按钮',
        path: '/components/3DButton',
      },
      {
        title: 'Input输入框',
        path: '/components/Input',
      },
    ],
  },


  // more config: https://d.umijs.org/config
});
