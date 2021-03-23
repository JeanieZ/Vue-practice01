import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import homeworkCenter from '@/components/homework/homeworkCenter'
import homeworkIndex from '@/components/homework/homeworkIndex'
import practiceCenter from '@/components/practice/practiceCenter'
import awardCenter from '@/components/award/awardCenter'
import wrongBook from '@/components/wrongBook/wrongBook'
import slider from '@/components/slider/slider'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'homeworkCenter',
      component: homeworkCenter,
      children:[
        {
          path:'awardCenter',
          name:'awardCenter',
          component:awardCenter
        },
        {
          path:'homeworkCenter',
          name:'homeworkCenter',
          component:homeworkCenter
        },
        {
          path:'practiceCenter',
          name:'practiceCenter',
          component:practiceCenter
        },{
          path:'wrongBook',
          name:'wrongBook',
          component:wrongBook
        },{
          path:'slider',
          name:'slider',
          component:slider
        }
      ]
    },{
      path:'/homeworkIndex',
      name:'homeworkIndex',
      component:homeworkIndex
    }
    
  ]
})
