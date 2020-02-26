import Vue from 'vue'
import Router from 'vue-router'

import DragBasic from '../pages/drag-basic'
import CanvasDrag from '../pages/canvas-drag/canvas-drag'

// const _import = require('./_import_' + process.env.NODE_ENV)
// const Test = _import('demo/test/index')
// const Index = _import('demo/App')

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/drag',
      name: 'drag',
      component: DragBasic
    },
    {
      path: '/canvas',
      name: 'canvas-drag',
      component: CanvasDrag
    }
  ]
})

export default router