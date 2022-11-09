import $router from "@/router";

console.log($router.history.current, 'router', '获取不到当前的路由信息',$router); // 如果路由懒加载就获取不到

$router.onReady(() => {
  console.log($router.history.current, 'router', '不可以获取到当前的路由信息内部的');
  //  很遗憾此处也获取不到 
})
$router.afterEach((to) => {  // 此处可以获取到
  console.log($router.history.current, 'afterEach', '可以获取到当前的路由信息内部的');
  console.log(to,'7897897989')
})

$router.beforeResolve((to, from, next) =>{ 
  console.log('to', to, 'beforeResolve///////////////    getTest')
  console.log('from', from)
  next()
})
// setTimeout(() => {   // 该方法也可以获取到 但不推荐 
//   console.log($router.history.current, 'router..............', '可以获取到当前的路由信息');
// }, 3000);