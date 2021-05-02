<template>
	<!-- 加载 -->
	<div class="box-b p10 h ld-doc">
		<el-card class="doc w h">
			<ld-doc :doc="doc" class="w h">
					....
			</ld-doc>
		</el-card>
	</div>
</template>

<script>
  export default {
		name: 'pageTabs',
		data() {
			return {
				doc: [{
					title:'`ld-page-tabs`标签页的使用',
					h1:'一.简单示例'
				}]
			}
		}
	}
</script>

<style>
</style>
