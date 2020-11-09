import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect: 'index/1',
    children: [{
      path: 'index/1',
      name: 'Tuijie',
      component: () => import('../components/shouye/Tuijie.vue')
    },
    {
      path: 'index/0',
      name: 'Guanzhu',
      component: () => import('../components/shouye/Guanzhu.vue')
    },
    {
      path: 'index/2',
      name: 'Rebang',
      component: () => import('../components/shouye/Rebang.vue')
    },
    {
      path: 'index/3',
      name: 'Shiping',
      component: () => import('../components/shouye/Shiping.vue')
    },
    {
      path: 'index/4',
      name: 'Quanzi',
      component: () => import('../components/shouye/Quanzi.vue')
    },]

  },
  {
    path: '/vip',
    name: 'Vip',
    redirect: "/vip/0",
    children:[

      
      {
        path: '0',
        name: 'Vhuiyuan',
        component: () => import('../components/vip/Vhuiyuan.vue')
      },
      {
        path: '1',
        name: 'Vxiaoshuo',
        component: () => import('../components/vip/Vxiaoshuo.vue')
      },
      {
        path: '2',
        name: 'Vdushu',
        component: () => import('../components/vip/Vdushu.vue')
      },
      {
        path: '3',
        name: 'Vzazhi',
        component: () => import('../components/vip/Vzazhi.vue')
      },
    



    ],
    component: () => import('../views/Vip.vue')
  },
  {
    path: '/faxian',
    name: 'Faxian',
    redirect: '/faxian/ffenqu',
    component: () => import('../views/Faxian.vue'),
    children: [{
      path: 'fpingdao',
      name: 'Fpingdao',
      component: () => import('../components/faxian/Fpingdao.vue')
    },
    {
      path: 'ffenqu',
      name: 'Ffenqu',
      component: () => import('../components/faxian/Ffenqu.vue')
    }]
  },
  {
    path: '/wode',
    name: 'Wode',
    component: () => import('../views/Wode.vue')
  },
  {
    path: '/xiaoxi',
    name: 'Xiaoxi',
    redirect: '/xiaoxi/xxiaoxi',
    component: () => import('../views/Xiaoxi.vue'),
    children: [{
      path: 'xdongtai',
      name: 'Xdongtai',
      component: () => import('../components/xiaoxi/Xdongtai.vue')
    },
    {
      path: 'xxiaoxi',
      name: 'Xxiaoxi',
      component: () => import('../components/xiaoxi/Xxiaoxi.vue')
    },
  
  
  ]
  },
  {
    path: '/sindex',
    name: 'Sindex',
    component: () => import('../components/sousu/Sindex.vue')
  },
  {
    path: '/sresou',
    name: 'Sresou',
    component: () => import('../components/sousu/Sresou.vue')
  },
  {
    path: '/wguanzhu',
    name: 'Wguanzhu',
    component: () => import('../components/wode/Wguanzhu.vue')
  },
  {
    path: '/wgeren',
    name: 'Wgeren',
    component: () => import('../components/wode/Wgeren.vue')
  },
  {
    path: '/zzhuce',
    name: 'Zzhuce',
    component: () => import('../components/zhuce/Zzhuce.vue')
  },
  {
    path: '/zdenglu',
    name: 'Zdenglu',
    component: () => import('../components/zhuce/Zdenglu.vue')
  },
  
  {
    path: '/guanzhux',
    name: 'Guanzhux',
    component: () => import('../components/shouye/Guanzhux.vue')
  },
  {
    path: '/rebangx',
    name: 'Rebangx',
    component: () => import('../components/shouye/Rebangx.vue')
  },
  {
    path: '/vdushux1',
    name: 'Vdushux1',
    component: () => import('../components/vip/Vdushux1.vue')
  },
  {
    path: '/bangdan',
    name: 'Bangdan',
    component: () => import('../components/vip/Bangdan.vue')
  },
  {
    path: '/fuli',
    name: 'Fuli',
    component: () => import('../components/vip/Fuli.vue')
  },
  {
    path: '/fenlei',
    name: 'Fenlei',
    component: () => import('../components/vip/Fenlei.vue')
  },
  {
    path: '/tuijiex',
    name: 'Tuijiex',
    component: () => import('../components/vip/Tuijiex.vue')
  },
  {
    path: '/xiaoshuox',
    name: 'Xiaoshuox',
    component: () => import('../components/vip/Xiaoshuox.vue')
  },
  {
    path: '/xiaoshuox1',
    name: 'Xiaoshuox1',
    component: () => import('../components/vip/Xiaoshuox1.vue')
  },
  {
    path: '/chupin',
    name: 'Chupin',
    component: () => import('../components/vip/Chupin.vue')
  },
  {
    path: '/shubang',
    name: 'Shubang',
    component: () => import('../components/vip/shubang1/Shubang.vue')
  }, {
    path: '/jiangshu',
    name: 'Jiangshu',
    component: () => import('../components/vip/jiangshu/Jiangshu.vue')
  },
  {
    path: '/fenlei1',
    name: 'Fenlei1',
    component: () => import('../components/vip/fenlei/Fenlei1.vue')
  },
  {
    path: '/dushuxiang',
    name: 'Dushuxiang',
    component: () => import('../components/vip/Vdushuxiang.vue')
  },
  {
    path: '/zazhix',
    name: 'Zazhix',
    component: () => import('../components/vip/Zazhix.vue')
  }, {
    path: '/zazhix2',
    name: 'Zazhix2',
    component: () => import('../components/vip/Zazhix2.vue')
  },
  {
    path: '/shezhi',
    name: 'Shezhi',
    component: () => import('../components/wode/Shezhi.vue')
  },
  {
    path: '/tuijiexiang',
    name: 'Tuijiexiang',
    component: () => import('../components/shouye/Tuijiexiang.vue')
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
