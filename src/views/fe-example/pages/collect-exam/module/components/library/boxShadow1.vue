<template>
  <div class="module">
    <slot>
      <div class="loading1"></div>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'boxShadow1'
  }
</script>

<style scoped lang="scss">
  .module {
    font-size: 12Px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: black;
  }

  .loading1 {
    position: relative;
    width: 8em;
    height: 8em;
    background: black;
    border-radius: 50%;
    box-shadow: inset 0.5em -0.5em crimson;
    animation: spin 2s linear infinite;

    &::before,
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      box-shadow: inherit;
      top: 0;
      left: 0;
    }

    &::before {
      filter: blur(5Px);
    }

    &::after {
      filter: blur(10Px);
    }
  }

  @keyframes spin {
    to {
      transform: rotate(1turn);
    }
  }
</style>