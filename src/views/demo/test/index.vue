<template>
	<div class="test">
		test
		<van-button type="default">默认按钮</van-button>
		<van-button type="primary">主要按钮</van-button>
		<van-button type="info">信息按钮</van-button>
		<van-button type="warning">警告按钮</van-button>
		<van-button type="danger">危险按钮</van-button>
		<br>
		<div class="tabs">
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
			<div>测试</div>
		</div>
		<br>
		<test1></test1>
	</div>
</template>

<script>
import Button from 'vant/lib/button'
import 'vant/lib/button/style'
import test1 from './component/test1'
export default {
  name: "test",
  data () {
    return {

	}
  },
  components: {
    [Button.name]: Button,
	test1
  }
}
</script>

<style scoped>
	.test {
		color: red;
	}
	.tabs {
		display: flex;
	}
	.tabs div {
		/*width: 50vw;*/
	}
</style>