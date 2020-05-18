/*
 * @Author: your name
 * @Date: 2020-02-28 15:45:28
 * @LastEditTime: 2020-03-23 17:54:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uu-i\src\views\test\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

import First from '../pages/first'
import Second from '../pages/second'
import CssExam from '../pages/collect-exam'

import {
  exam_childrenRoute
} from '../utils'

// const _import = require('./_import_' + process.env.NODE_ENV)
// const Test = _import('demo/test/index')
// const Index = _import('demo/App')

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [{
      path: '/first',
      name: 'first',
      component: First
    },
    {
      path: '/second',
      name: 'second',
      component: Second
    },
    {
      path: '/exam',
      name: '收集示例',
      component: CssExam,
      children: exam_childrenRoute,
      redirect: '/exam/library'
    }
  ]
})

export default router