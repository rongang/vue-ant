<template>
<div>
	<template>
  <div>
    <a-button type="primary">
      Primary
    </a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">
      Dashed
    </a-button>
    <a-button type="danger">
      Danger
    </a-button>
    <a-config-provider :auto-insert-space-in-button="false">
      <a-button type="primary">
        按钮
      </a-button>
    </a-config-provider>
    <a-button type="primary">
      按钮
    </a-button>
    <a-button type="link" href="https://www.baidu.com"  target="_blank">
      baidu
    </a-button>
  </div>
</template>

</div>
</template>

<script>
	export default{
		// name:'VueButton'
		created() {
			// console.log('VueButton')
		}
	}
</script>

<style>
</style>

