/*
 * @Author: your name
 * @Date: 2020-02-28 15:45:28
 * @LastEditTime: 2020-03-11 15:20:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uu-i\src\views\test\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

import DragBasic from '../pages/drag-basic'
import CanvasDrag from '../pages/canvas-drag/canvas-drag'
import VueTest from '../pages/vue-test'

import {
  vueTest_childrenRoute
} from '../utils'

// const _import = require('./_import_' + process.env.NODE_ENV)
// const Test = _import('demo/test/index')
// const Index = _import('demo/App')

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [{
      path: '/drag',
      name: 'drag',
      component: DragBasic
    },
    {
      path: '/canvas',
      name: 'canvas-拖拽-绑定数据',
      component: CanvasDrag
    },
    {
      path: '/vue-test',
      name: 'vue test',
      component: VueTest,
      children: vueTest_childrenRoute
    }
  ]
})

export default router