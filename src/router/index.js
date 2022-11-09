import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './config'

const { isNavigationFailure, NavigationFailureType } = VueRouter

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history', //使用路由 history模式   默认使用hash模式  使用history模式需要在项目中配置  服务端配置
  mode: 'history',
  /* 注意：此处应有值，至少应该写上 routes：[]  否则会警告：No routes found in router {}*/
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    // { path: '*', component: () => import('@/components/404View.vue') },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    console.log('to', to, from, savedPosition, 'scrollBehavior')
    // 如果你要模拟“滚动到锚点”的行为：
    // if (to.hash) {
    //     return {
    //         selector: to.hash
    //     }
    // }
    // 对于所有路由导航，简单地让页面滚动到顶部。
    // 返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样： 每次切换路由都会回到顶部
    // if (savedPosition) {
    //     return savedPosition
    // } else {
    //     return { x: 0, y: 0 }
    // }
    //    只需将 behavior 选项添加到 scrollBehavior 内部返回的对象中，就可以为支持它的浏览器 (opens new window)启用原生平滑滚动：  以下写法可以实现返回上一页保留滚动位置的功能  注意：此写法需要是一个异步操作，因为可能存在路由的过渡等问题，同步不能达到预期效果
    if (to.hash.length > 0) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      }
    }
    // 也可以返回一个 Promise 来得出预期的位置描述  例如：当有路由过渡时，可以返回一个 Promise，在过渡结束时，计算出预期的位置，并返回
    return new Promise((resolve) => {
      let newSavedPosition = savedPosition || {}
      setTimeout(() => {
        resolve({ x: 0, y: newSavedPosition.y || 0, behavior: 'smooth' })
      }, 500)
    })
  }
})
// 正在尝试访问 expresspdf 页面
// 导航故障是一个 Error 实例，附带了一些额外的属性。要检查一个错误是否来自于路由器，可以使用 isNavigationFailure 函数：
router.push('/expresspdf').catch((failure) => {
  if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
    // 向用户显示一个小通知
    // showToast('Login in order to access the admin panel')
    console.log('Login in order to access the admin panel')
  }
})
// 所有的导航故障都会有 to 和 from 属性，分别用来表达这次失败的导航的目标位置和当前位置。
// 正在尝试访问 admin 页面
// router.push('/admin').catch((failure) => {
//     if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
//         failure.to.path // '/admin'
//         failure.from.path // '/'
//     }
// })
// routes.forEach((routes) => {
//     router.addRoute(routes)
// })
// router.beforeEach((to, from, next) => {
//     console.log('to', to)
//     console.log('from', from)
//     next()
// })

router.beforeResolve((to, from, next) => {
  console.log('to', to, 'beforeResolve///////////////')
  console.log('from', from)
  next()
})

// router.afterEach((to, from) => {
//     console.log('to', to)
//     console.log('from', from)
// })

// router.addRoute({   // 可以添加多个路由 但一次性只能添加一个
//   path: "/digui",
//   name: "递归调用组件",
//   component: () =>
//     import(/* webpackChunkName: "about" */ "@/components/digui2.vue")
// });
export default router
