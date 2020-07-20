/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const allRouter = [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard'),
        name: 'All Permission',
        meta: {
          title: 'All Permission',
          icon: 'chart',
          roles: ['admin', 'editor'],
        },
      },
    ],
  },
]
export default allRouter
