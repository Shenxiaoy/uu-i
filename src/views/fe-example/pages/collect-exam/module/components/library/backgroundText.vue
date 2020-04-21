<template>
  <div class="modulebackclip">
    <slot>
      <ul ref="text">
        <li><a href="#">home</a></li>
        <li><a href="#">archives</a></li>
        <li><a href="#">tags</a></li>
        <li><a href="#">categories</a></li>
        <li><a href="#">about</a></li>
      </ul>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'backgroundText1',
    mounted() {
      // const a = this.$refs.text
      // console.log(a.style['background-clip1'], '====')
    }
  }
</script>

<style scoped lang="scss">
  // https://picular.co/bluemoon

  @import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");

  .modulebackclip {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #1A1E23;
    overflow: hidden;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: start;
    list-style-type: none;

    li {
      // padding: 6Px 0;

      a {
        --fill-color: #198CE6;
        position: relative;
        display: block;
        // padding: 4Px 0;
        font-family: Raleway, sans-serif;
        font-size: 3em;
        font-weight: 700;
        text-decoration: none;
        text-transform: uppercase;
        -webkit-text-stroke: 2Px var(--fill-color);
        background: linear-gradient(90deg, var(--fill-color) 0%, var(--fill-color) 100%);
        background-size: 0;
        background-position: left;
        background-repeat: no-repeat;
        transition: 0.5s linear;
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;

        &:hover {
          background-size: 100%;
        }
      }
    }
  }
</style>