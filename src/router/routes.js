import Layout from '@/views/layout/Layout'
const _import = require('./_import_' + process.env.NODE_ENV)
// 除菜单之外的路由
export const otherRouter = [
  { path: '/404', name: '404', component: _import('public/404') },
  {
    path: '/test',
    name: 'test',
    component: _import('public/test')
  },
  { path: '*', redirect: '/404' }
]

// 菜单  ignore 不显示到菜单
export const appRouter = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: '控制台', icon: 'iconfont icon-dashboard', menu: true },
    name: 'home',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: _import('dashboard/index'),
        meta: { defAuth: true }
      }
    ]
  }
]

export const routes = [...appRouter, ...otherRouter]
