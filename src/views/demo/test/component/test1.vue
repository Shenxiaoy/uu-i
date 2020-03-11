<!--
 * @Author: your name
 * @Date: 2020-02-17 20:30:20
 * @LastEditTime: 2020-03-11 18:06:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \uu-i\src\views\demo\test\component\test1.vue
 -->
<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">
        <div slot="title">
          <a style="color: red">标签454</a>
        </div>
        内容 4
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import {
    Tab,
    Tabs
  } from 'vant'
  import 'vant/lib/tab/style'
  import 'vant/lib/tabs/style'
  export default {
    name: "test1",
    data() {
      return {
        active: 2,
        name: '<a>ss</a>'
      }
    },
    components: {
      [Tab.name]: Tab,
      [Tabs.name]: Tabs
    }
  }
</script>

<style scoped>

</style>