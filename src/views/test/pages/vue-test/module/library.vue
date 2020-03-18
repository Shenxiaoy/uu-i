<!--
 * @Author: your name
 * @Date: 2020-03-18 14:09:11
 * @LastEditTime: 2020-03-18 16:27:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uu-i\src\views\test\pages\vue-test\module\library.vue
 -->
<template>
  <div style='padding: 24px'>
    <p>vue 工具库</p>
    <div>
      <h4>v-hotKey—— 组件自定义指令绑定快捷键</h4>
      <div style='color: #ccc; font-size: 12px'>按键：ctrl+y ; 按键： enter 按下、松开</div>
      <br>
      <div v-hotkey='keymap' v-show='show'>
        多业态O2O管理系统
      </div>
    </div>
    <br>
    <hr>
    <br>
    <div>
      <h4>v-clipboard —— 指令拷贝</h4>
      <div v-clipboard='clipboardValue'>
        <el-button>copy 姓名</el-button>
      </div>
      <br>
      <div @click='handleHtml'>
        <el-button ref='copyhtml' type='primary'>copy html片段</el-button>
      </div>
    </div>
    <hr>
    <br>

    <div>
      <h4>v-ripple-derective —— 波纹效果</h4>
      <div v-ripple class="ripple-style">波纹效果</div>
    </div>
    <hr>
    <br>

    <div>
      <h4>v-blur —— 半透明模糊效果</h4>
      <el-button @click='blurConfig.isBlurred = !blurConfig.isBlurred'>切换</el-button>
      <div class="blur-style" v-blur="blurConfig"></div>
      <div class="blur-style"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'library',
    data() {
      return {
        show: true,
        clipboardValue: '钱学森',
        blurConfig: {
          isBlurred: false,
          // opacity: .3,
          filter: 'blur(1.2px)',
          transition: 'all .3s linear'
        }
      }
    },
    methods: {
      toggle() {
        this.show = !this.show
      },
      show1() {
        this.show = true
      },
      hide() {
        this.show = false
      },
      handleHtml() {
        this.$clipboard('copy====*&^%$%')
      }
    },
    computed: {
      keymap() {
        return {
          'ctrl+y': this.toggle,
          'enter': {
            keydown: this.hide,
            keyup: this.show1
          }
        }
      }
    }
  }
</script>

<style scoped>
  .ripple-style {
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: steelblue;
  }

  .blur-style {
    width: 100px;
    height: 100px;
    background: teal;
    display: inline-block;
    margin-left: 30px;
  }
</style>