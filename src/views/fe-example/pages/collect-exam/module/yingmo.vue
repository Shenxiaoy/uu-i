<!--
 * @Author: your name
 * @Date: 2020-03-11 15:22:27
 * @LastEditTime: 2020-03-23 17:37:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uu-i\src\views\test\pages\vue-test\module\keep-alive.vue
 -->
<template>
  <div>
    <br>
    <div style='padding: 24px'>
      <keep-alive>
        <test1 v-if='isOk'></test1>
        <test2 v-else></test2>
      </keep-alive>
      <br>
      <div>
        <el-button @click="isOk = !isOk">切换</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import test1 from './components/test1'
  import test2 from './components/test2'
  export default {
    name: 'yingmo',
    data() {
      return {
        isOk: true
      }
    },
    components: {
      test1,
      test2
    }
  }
</script>

<style>

</style>