<!-- 这是方向设置的组件 -->
<!-- 1. html部分，一定要在template标签中添加一个根标签 -->
<template>
	<div class="department">
		<!-- 操作 -->
		<div class="options">
			<el-button type="primary" size='mini'>添加</el-button>
			<el-button type="primary" size='mini'>批量删除</el-button>
		</div>
		<!-- 数据 -->
		<div class="dataTbl">
			<el-table
		    ref="multipleTable"
		    :data="allDepartments"
		    tooltip-effect="dark"
		    style="width: 100%"
		    size="mini"
		    :border=border
		    @selection-change="handleSelectionChange">
		    <!-- 复选框列 -->
		    <el-table-column
		      type="selection"
		      width="55">
		    </el-table-column>
		   	<!-- 数据列 -->
		    <el-table-column prop="name" label="名称"></el-table-column>
		    <el-table-column prop="description" label="描述"></el-table-column>
		    <el-table-column prop="belongId" label="所属部门"></el-table-column>
		    <el-table-column label="操作">
		    	<template slot-scope="scope">
		        <el-button
		          size="mini"
		          type="text"
		          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		        <el-button
		          size="mini"
		          type="text"
		          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
		      </template>
		    </el-table-column>
		    
		  </el-table>
		</div>
	</div>
</template>
<!-- 2. javascript部分，用于控制template -->
<script>

// 导入mapGetters，用于调用departmentStore中的getter函数
import {mapGetters} from 'vuex';

export default {
	// vue的data属性中定义的值可以在页面中直接获取
	data: function(){
		return {
			msg:'hello world',
			border:true,
			// 用于保存要删除元素的id
			multipleSelection:[]
		};
	},
	// vue中的computed是计算属性
	computed:{
		...mapGetters(['allDepartments'])
	},
	// 函数 es6
	methods:{
		// 处理多选
		handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 处理修改操作
    handleEdit(index,row){
    	console.log(row);
    },
    // 处理删除操作
    handleDelete(index,row){
    	console.log(row);
    }
	}
}	
</script>

<!-- 3. css部分。用于修饰页面 -->
<style scoped>
	.department > .options {
		text-align: right;
	}
	.department > .dataTbl {
		margin-top: 1em;
	}
</style>





