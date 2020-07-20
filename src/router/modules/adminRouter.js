import Layout from '@/layout'

const adminRouter = [
  {
    path: '/admin',
    component: Layout,
    name: 'Admin Router',
    meta: {
      title: 'Admin Router',
      icon: 'table',
      roles: ['admin'],
    },
    children: [
      {
        path: 'page1',
        component: () => import('@/views/admin/page1'),
        name: 'Page 1',
        meta: {
          title: 'Page 1',
          roles: ['admin'],
        },
      },
      {
        path: 'page2',
        component: () => import('@/views/admin/page2'),
        name: 'Page 2',
        meta: {
          title: 'Page 2',
          roles: ['admin'],
        },
      },
    ],
  },
]

export default adminRouter
