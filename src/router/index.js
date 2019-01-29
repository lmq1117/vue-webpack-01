import Vue from 'vue'
import Router from 'vue-router'
import RouteContent from '@/components/RouteContent'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import User from '@/components/User'
import UserPost from '@/components/UserPost'

Vue.use(Router)

// console.log(User);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RouteContent',
      component: RouteContent
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    },
    // 单个路由参数
    {
      path: '/user/:userId',
      component: User
    },
    //多个路由参数
    {
      path: '/member/:userId/post/:postId',
      component: UserPost
    }
  ]
})
