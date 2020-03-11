/*
 * @Author: your name
 * @Date: 2020-03-11 15:08:43
 * @LastEditTime: 2020-03-11 16:25:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uu-i\src\views\test\utils.js
 */
export const vueTest_childrenRoute = []
const requireComponent = require.context(
  './pages/vue-test/module',
  false,
  /[A-Z|-]\w+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  // `./pages/vue-test/module/${componentConfig.default.name}`
  vueTest_childrenRoute.push({
    path: componentConfig.default.name,
    name: componentConfig.default.name,
    component: componentConfig.default || componentConfig

  })
})

// export default {
//   vueTest_childrenRoute
// }