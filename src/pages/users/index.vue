<template>
	<div class="users">
		<div class="title">{{msg}}</div>
		<div id="main" style="height:400px"></div>
	</div>
</template>
<script>
	var echarts = require('echarts');
	export default {
		data(){
			return {
				msg:'用户管理'
			}
		},
		mounted(){
			console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('main'));
			// 绘制图表
			myChart.setOption({
			    title: {
			        text: 'ECharts 入门示例'
			    },
			    tooltip: {},
			    xAxis: {
			        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
			    },
			    yAxis: {},
			    series: [{
			        name: '销量',
			        type: 'bar',
			        data: [5, 20, 36, 10, 10, 20]
			    }]
			});
		}
	}
</script>
<style scoped>

</style>
<style lang="scss" scoped="" type="text/css">
	$primary-color: #ededed;

	.users {
	  background-color: $primary-color; 
	  .title {
	  	color:red
	  }
	}

</style>
