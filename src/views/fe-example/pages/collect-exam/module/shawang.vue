<!--
 * @Author: your name
 * @Date: 2020-03-11 16:26:30
 * @LastEditTime: 2020-04-09 20:35:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uu-i\src\views\test\pages\vue-test\module\order-control.vue
 -->
<template>
  <div style='margin-top: 30Px'>
    <div>
      <el-date-picker :value='dateValue' type='daterange' range-separator="至" start-placeholder="开始日期"
        end-placeholder="结束日期" @change='datechange'>
      </el-date-picker>
    </div>
    <hr>
    <h4>scorll test</h4>
    <div style="font-size: 10Px">{{view}}</div>
    <div class="box" ref='scrollTest'>
      <!-- <div v-for="(item, k) in count" :key="k" class="li-style" :style="{'background-color': randomColor}">
        <div>88</div>
      </div> -->
      <div>
        <el-table :data='tableData' width="100%">
          <el-table-column prop='date' label='日期'></el-table-column>
          <el-table-column prop='date1' label='日期1'></el-table-column>
          <el-table-column prop='date2' label='日期2'></el-table-column>
        </el-table>
      </div>
    </div>
    <hr>
    <br>
  </div>
</template>

<script>
  const ary = [{
    date: '嘻嘻嘻',
    date1: '是是是'
  }, {
    date: '嘻嘻嘻',
    date1: '是是是'
  }, {
    date: '嘻嘻嘻',
    date1: '是是是'
  }]
  export default {
    name: 'shawang',
    data() {
      return {
        count: 11,
        view: '',
        tableData: [...ary, ...ary, ...ary],
        dateValue: ['2017-2-3']
      }
    },
    methods: {
      datechange(val) {
        console.log(val, 'gggggg')
      }
    },
    mounted() {
      this.$refs.scrollTest.addEventListener('scroll', (e) => {
        const v = e.target
        this.view = `offsetHeight: ${v.offsetHeight} scrollHeight: ${v.scrollHeight} scrollTop: ${v.scrollTop} `
        setTimeout(() => {
          if ((v.scrollTop + v.offsetHeight + 2) >= v.scrollHeight) {
            this.count = this.count + 2
            const content = this.tableData.concat(ary)
            this.tableData = content
            v.scrollTop = v.scrollTop - 10
          }
        }, 0)
      })
    },
    computed: {
      randomColor: () => {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        const color = `rgba(${r}, ${g}, ${b}, .6)`
        return color
      }
    }
  }
</script>

<style>
  .li-style {
    line-height: 60Px;
    width: 60vw;
    margin-top: 20Px;
  }

  .box {
    width: 100%;
    max-height: 200px;
    overflow: auto;
  }
</style>