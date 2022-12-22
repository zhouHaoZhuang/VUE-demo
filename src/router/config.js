import HomeView from '../views/HomeView.vue'
// const HomeView = () => import('../views/HomeView.vue')  // 异步加载

const routes = [
  {
    path: '/',
    name: '主页',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/shengming',
    name: 'updata生命周期',
    component: () => import('@/views/UpdataCom.vue')
  },
  {
    path: '/expresspdf',
    name: '页面导出PDF',
    component: () => import('@/components/expressPDFfile/expressPdf.vue')
  },
  {
    path: '/digui',
    name: '递归调用组件',
    component: () => import('@/components/digui2.vue')
  },
  {
    path: '/model',
    name: '自定义model',
    component: () => import('@/views/diymodel.vue')
  },
  {
    path: '/instruction',
    name: '指令instruction',
    component: () => import('@/views/instructionTest.vue')
  },
  {
    path: '/testaxios',
    name: '请求本地数据',
    component: () => import('@/views/ReqData.vue')
  },
  {
    path: '/AttributeDemo',
    name: '特殊的属性',
    props: (route) => {
      return {
        name: route.query.name,
        age: route.query.age
      }
    },
    component: () => import('@/views/AttributeDemo.vue')
  },
  {
    path: '/InComponents',
    name: '内置的组件',
    props: true,
    component: () => import('@/views/InComponents.vue')
  },
  {
    path: '/routerstest',
    name: '路由演示', //  Named Route '路由演示' has a default child route. When navigating to this named route (:to="{name: '路由演示'}"), the default child route will not be rendered. Remove the name from this route and use the name of the default child route for named links instead.    当路由演示被访问时，默认的子路由不会被渲染。从路由演示中删除名称，并使用默认的子路由的名称作为命名链接。
    component: () => import('@/views/routersTest.vue'),
    beforeEnter: (to, from, next) => {
      console.log('路由演示')
      next()
    },
    children: [
      {
        path: '',
        // path: '/routersTest',
        // name: '路由-测试',
        /*  
                redirect: '/b'  
                redirect: { name: 'foo' }
                redirect: to => {
                    方法接收 目标路由 作为参数
                    return 重定向的 字符串路径/路径对象
                    }
                    注意导航守卫并没有应用在跳转路由上，而仅仅应用在其目标上。在下面这个例子中，为 /a 路由添加一个 beforeEnter 守卫并不会有任何效果。
                */
        redirect: {
          // path: 'routerTest',
          name: '二级路由'
        }
      },
      {
        path: 'tworouter',
        name: '二级路由',
        component: () => import('@/views/routersTest.vue')
      }
    ]
  },
  {
    path: '/sroutersTest/routers', //注意这种写法不会产生路由嵌套，只是一个路由路径改变了 
    name: '路由测试',
    alias: '/biemingroutersTest', //  /a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。
    components: {
      //这里的components是一个对象，里面的key就是路由的name，value就是路由的组件
      default: () => import('@/components/routerTest.vue'),
      a: () => import('@/views/routersTest.vue'),
      b: () => import('@/views/ReqData.vue')
    },
    // props: true, //  将路由的 props 传递给组件  如果 props 被设置为 true，route.params 将会被设置为组件属性。
    props: { default: true, a: true }, //  如果 props 是一个对象，它会被按原样设置为组件属性。当 props 是静态的时候有用。
    // props: route => ({ query: route.query.id })  //你可以创建一个函数返回 props。这样你便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等。
    meta: {
      title: '路由测试',
      icon: 'el-icon-s-home'
    }
  },
  {
    path: '/hashMd',
    name: 'hash与锚点',
    props: true,
    component: () => import('@/views/hashMd.vue')
  },
  {
    path: '/adownload',
    name: 'adownload下载',
    component: () => import('@/views/aDownload.vue')
  },
  {
    path: '/gdMap',
    name: '高德地图应用',
    component: () => import('@/views/gdMap.vue')
  },
  {
    path: '/dragdemo',
    name: '自定义拖拽+放缩',
    component: () => import('@/views/dragDemo.vue')
  },
  {
    path: '/ocrpic',
    name: 'web截图（PC）',
    component: () => import('@/views/OcrpicImg.vue')
  },
  {
    path: '/swiper',
    name: 'swiper轮播图',
    component: () => import('@/views/SwiperDemo.vue')
  },
  {
    path: '/weixinssd',
    name: '微信调用地图',
    component: () => import('@/views/WeixinSsd.vue')
  },
  {
    path: '/websql',
    name: 'web数据库',
    component: () => import('@/views/webSql.vue')
  },
  {
    path: '/baiduMapjssk',
    name: '百度地图ssk',
    component: () => import('@/views/BaiduMap.vue')
  },
  {
    path: '/WebbaiduMap',
    name: '百度地图web',
    component: () => import('@/views/BaiduMapWeb.vue')
  }
]

export default routes
