<template>
  <div class="module">
    <slot>
      <div class="box">
        <video autoplay muted loop preload poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg">
          <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" />
          <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" />
        </video>
        <h1>ocean</h1>
      </div>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'mixBlendMode'
  }
</script>

<style scoped lang="scss">
  @font-face {
    font-family: Biko;
    src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/biko-black.woff");
  }

  .module {
    height: 100%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: white;

    .box {
      position: relative;
      width: 100%;
      height: 100%;
      top: 40%;
    }
  }

  video,
  h1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  video {
    object-fit: cover;
  }

  h1 {
    font-size: 7vw;
    font-family: Biko, sans-serif;
    font-weight: 700;
    line-height: 8vw;
    text-transform: uppercase;
    text-align: center;
    background: white;
    mix-blend-mode: screen;
  }
</style>