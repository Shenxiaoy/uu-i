<!--
 * @Author: your name
 * @Date: 2020-02-19 10:20:50
 * @LastEditTime: 2020-03-11 18:04:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uu-i\src\views\test\pages\drag-basic\index.vue
 -->
<template>
  <div style="padding: 20px">
    <div class="box" ref="box" :style="{width: boxData.width + 'Px', height: boxData.height + 'Px'}">
      <div v-for="(item, index) in areaList" :key="index">
        <div sxy="s22xy" :key="index" :style="{width: item.w + 'Px', height: item.h + 'Px'}" class="area-style">33</div>
      </div>
    </div>
    <div>
      <br>
      <el-button type="default" @click="onAdd">添加</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        areaList: [],
        box: null,
        boxData: {
          width: 400,
          height: 300
        }
      }
    },
    methods: {
      onAdd() {
        const area = new this.DrawArea(this.boxData.width / 2, this.boxData.height / 2, null, this)
        this.areaList.push(area)
      },
      DrawArea(x, y, r, _this) {
        this._this = _this
        this.x = x
        this.y = y
        this.r = r
        this.w = 50
        this.h = 50
        this.zoomRadio = 1
        this.link = ''
        this.isCurrent = false
      }
    },
    mounted() {
      this.box = this.$refs.box
      this.box.addEventListener('mousedown', (e) => {
        e.preventDefault()
      })
    }
  }
</script>

<style scoped>
  .box {
    border: 1px solid #ccc;
    position: relative;
    margin-left: 20Px;
    box-sizing: border-box;
    padding: 10Px;
  }

  .area-style {
    background: rgba(40, 41, 35, 0.1);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>