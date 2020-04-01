<!--
 * @Author: your name
 * @Date: 2020-03-02 14:22:59
 * @LastEditTime: 2020-03-23 21:31:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uu-i\src\views\test\pages\fabric\index.vue
 -->

<template>
  <div>
    <div>
      <div>
        <el-radio-group v-model="tabPosition" style="margin-left: 30px;">
          <el-radio-button v-for="(item, k) in childrenRoute" :key="k" :label="item.name"
            @click.native="linkRoute(item)">
            {{item.name}}
          </el-radio-button>
        </el-radio-group>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    exam_childrenRoute
  } from '../../utils'
  export default {
    name: "index",
    data() {
      return {
        childrenRoute: exam_childrenRoute,
        tabPosition: exam_childrenRoute[0].name
      }
    },
    methods: {
      linkRoute(item) {
        const router = `/exam/${item.path}`
        this.$router.push(router).catch(err => err)
      }
    },
    mounted() {}
  }
</script>

<style scoped>
</style>