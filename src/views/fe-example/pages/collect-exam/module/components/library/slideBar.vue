<template>
  <div class="module" @click="click">
    <slot>
      <div class="content" v-if="isOk" :key="1">
        <h1 class="title slide-bar">I'm alphardex.</h1>
        <p class="subtitle slide-bar">A CSS Wizard</p>
      </div>
      <div class="content" v-else :key="2">
        <h1 class="title slide-bar">I'm alphardex.</h1>
        <p class="subtitle slide-bar">A CSS Wizard</p>
      </div>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'slideBar',
    data() {
      return {
        isOk: true
      }
    },
    methods: {
      click() {
        this.isOk = !this.isOk
      }
    }
  }
</script>

<style scope lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Lato");
  @import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700");

  .module {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: #222;
    font-size: 14Px;
  }

  .slide-bar {
    position: relative;
    color: transparent;
    animation: fill-text-white 2s 1.6s forwards;

    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #35b9f1;
      transform: scaleX(0);
      transform-origin: left;
      animation: slide-in-out 2s cubic-bezier(0.75, 0, 0, 1) forwards;
    }
  }

  @keyframes slide-in-out {
    50% {
      transform: scaleX(1);
      transform-origin: left;
    }

    50.1% {
      transform-origin: right;
    }

    100% {
      transform: scaleX(0);
      transform-origin: right;
    }
  }

  @keyframes fill-text-white {
    to {
      color: white;
    }
  }

  .content {

    .title,
    .subtitle {
      width: 250Px;
      height: 30Px;
    }

    .title {
      margin: 0;
      font-family: Lora, serif;
      font-size: 32Px;
      line-height: 30Px;

      &::before {
        background: #FF4081;
      }
    }

    .subtitle {
      margin: 10Px 0 0 0;
      font-family: Lato, sans-serif;
      font-size: 12Px;
      line-height: 30Px;
      letter-spacing: 5Px;
      text-transform: uppercase;
      animation-delay: 3.2s;

      &::before {
        background: #03A9F4;
        animation-delay: 2s;
      }
    }
  }
</style>