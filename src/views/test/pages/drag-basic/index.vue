<template>
	<div>
		<div class="dragger" draggable></div>
		<div class="drap" @dragover="onDrap($event)"></div>
	</div>
</template>

<script>
export default {
  name: "index",
  methods: {
    onDrap (e) {
      e.preventDefault()
	  console.log(e, 'dragover')
	}
  }
}
</script>

<style scoped>
	.dragger {
		width: 200px;
		height: 200px;
		background-color: slateblue;
	}
	.drap {
		width: 600px;
		height: 400px;
		background-color: #969799;
		opacity: .8;
	}
</style>