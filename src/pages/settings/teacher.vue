<template>
	<div class="teacher">
		讲师设置
		{{allTeachers}}
	</div>
</template>
<script>
	import {mapGetters,mapActions} from 'vuex';

	export default {
		computed:{
			...mapGetters(['allTeachers'])
			//张江高科	陆家嘴 乙方（中科软） -> 甲方（中国银行、花旗银行）
		},
		mounted(){
			// 发送指令获取数据
			this.findAllTeachers();
		},
		methods:{
			...mapActions(['findAllTeachers'])
		}
	}
</script>
<style scoped>
	
</style>