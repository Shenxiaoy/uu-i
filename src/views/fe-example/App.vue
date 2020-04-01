<!--
 * @Author: your name
 * @Date: 2020-02-28 15:53:09
 * @LastEditTime: 2020-03-11 16:29:34
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \uu-i\src\views\test\App.vue
 -->
<template>
  <div>
    <h3>测试</h3>
    <div class="menu-style">
      <el-button @click="linkTo(item)" v-for="(item, k) in routerLists" :key="k" style="margin-left: 10Px">{{item.name}}
      </el-button>
    </div>
    <br>
    <router-view />
  </div>
</template>

<script>
  import routerList from './router'
  export default {
    name: 'test',
    data() {
      return {
        routerLists: routerList.options.routes
      }
    },
    mounted() {},
    methods: {
      linkTo(item) {
        this.$router.push(item.path)
      }
    }
  }
</script>
<style>
  html,
  body {
    margin: 0;
    padding: 0;
  }

  .menu-style {
    padding: 10Px;
    margin: 0 4Px;
    border: 1px dashed #7d7e80;
  }
</style>