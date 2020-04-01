<!--
 * @Author: your name
 * @Date: 2020-04-01 17:55:26
 * @LastEditTime: 2020-04-01 18:05:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uu-i\src\views\fe-example\pages\collect-exam\module\components\library\textAni2.vue
 -->
<template>
  <div class="module-textani2" @click="secondShow" :key='testKey'>
    <slot>
      <div class="reveal">sword art online</div>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'textAni2',
    data() {
      return {
        testKey: 1
      }
    },
    mounted() {
      this.animationEffect()
    },
    methods: {
      animationEffect() {
        // let duration = 0.8;
        let delay = 0.3;
        let revealText = document.querySelector(".reveal");
        let letters = revealText.textContent.split("");
        revealText.textContent = "";
        let middle = letters.filter(e => e !== " ").length / 2;
        letters.forEach((letter, i) => {
          let span = document.createElement("span");
          span.textContent = letter;
          span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
          revealText.append(span);
        });

      },
      secondShow() {
        this.testKey = this.testKey === 1 ? 2 : 1
        this.$nextTick(() => {
          this.animationEffect()
        })
      }
    }
  }
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");

  .module-textani2 {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #222;
  }

  .reveal {
    position: relative;
    display: flex;
    color: #6ee1f5;
    font-size: 14Px;
    font-family: Raleway, sans-serif;
    letter-spacing: 3px;
    text-transform: uppercase;
    white-space: pre;

    span {
      opacity: 0;
      transform: scale(0);
      animation: fadeIn 2.4s forwards;
    }

    &::before,
    &::after {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      width: 2px;
      height: 100%;
      background: white;
      opacity: 0;
      transform: scale(0);
    }

    &::before {
      left: 50%;
      animation: slideLeft 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
    }

    &::after {
      right: 50%;
      animation: slideRight 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slideLeft {
    to {
      left: -6%;
      opacity: 1;
      transform: scale(0.9);
    }
  }

  @keyframes slideRight {
    to {
      right: -6%;
      opacity: 1;
      transform: scale(0.9);
    }
  }
</style>