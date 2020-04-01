<!--
 * @Author: your name
 * @Date: 2020-03-18 14:09:11
 * @LastEditTime: 2020-04-01 17:56:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uu-i\src\views\test\pages\vue-test\module\library.vue
 -->
<template>
  <div style='padding: 24px'>
    <div class="module-item" v-for='(item, k) in componentNameList' :key="k">
      <div :is='item'></div>
    </div>
  </div>
</template>

<script>
  // 动态获取组件模块
  let ary = []

  function getComponentBatch() {
    const components = require.context(
      './components/library',
      false,
      /\w+\.(vue)$/
    )
    let obj = {}
    components.keys().forEach(fileName => {
      const componentConfig = components(fileName)
      obj[componentConfig.default.name] = componentConfig.default || componentConfig
      ary.push(componentConfig.default.name)
    })
    return obj
  }
  const components = getComponentBatch()
  export default {
    name: 'library',
    data() {
      return {
        componentNameList: ary
      }
    },
    components: {
      ...components
    },
    methods: {},
    computed: {},
    mounted() {}
  }
</script>

<style scoped>
  .module-item {
    width: 30vw;
    height: 18vw;
    border: 1px darkblue dashed;
    display: inline-block;
    margin: 5Px;
    vertical-align: middle;
  }

  .di {
    display: inline-block;
  }
</style>