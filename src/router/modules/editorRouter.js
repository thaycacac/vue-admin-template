import Layout from '@/layout'

const editorRouter = [
  {
    path: '/editor',
    component: Layout,
    name: 'Editor Router',
    meta: {
      title: 'Editor Router',
      icon: 'table',
      roles: ['editor'],
    },
    children: [
      {
        path: 'page1',
        component: () => import('@/views/editor/page1'),
        name: 'Page 1',
        meta: {
          title: 'Page 1',
          roles: ['editor'],
        },
      },
      {
        path: 'page2',
        component: () => import('@/views/editor/page1'),
        name: 'Page 2',
        meta: {
          title: 'Page 2',
          roles: ['editor'],
        },
      },
    ],
  },
]

export default editorRouter
