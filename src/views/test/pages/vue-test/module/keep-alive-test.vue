<!--
 * @Author: your name
 * @Date: 2020-03-11 15:22:27
 * @LastEditTime: 2020-03-11 17:21:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uu-i\src\views\test\pages\vue-test\module\keep-alive.vue
 -->
<template>
  <div>
    <h5>test1</h5>
    <test1 v-if='isOk'>
      <div>sdfs</div>
    </test1>
    <test2 v-else></test2>
  </div>
</template>

<script>
  import test1 from './components/test1'
  import test2 from './components/test2'
  export default {
    name: 'test-sdf',
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