<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'test1',
    mounted() {
      console.log(this, '-------------')
    }
  }
</script>

<style>

</style>