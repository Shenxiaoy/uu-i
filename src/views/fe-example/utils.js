/*
 * @Author: your name
 * @Date: 2020-03-11 15:08:43
 * @LastEditTime: 2020-03-23 18:20:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uu-i\src\views\test\utils.js
 */
export const exam_childrenRoute = []
const requireComponent = require.context(
  './pages/collect-exam/module',
  false,
  /\w+\.(vue)$/
)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  // `./pages/collect-exam/module/${componentConfig.default.name}`
  exam_childrenRoute.push({
    path: componentConfig.default.name,
    name: componentConfig.default.name,
    component: componentConfig.default || componentConfig

  })
})