<!-- 这是方向设置的组件 -->
<!-- 1. html部分，一定要在template标签中添加一个根标签 -->
<template>
	<div class="department">
		<!-- 操作 -->
		<div class="options">
			<el-button 
				@click="toAddDepartment"
				type="primary" size='mini'>添加</el-button>
			<el-button @click="batchDelete" type="primary" size='mini'>批量删除</el-button>
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
		<!-- 模态框 -->
		<el-dialog 
			:title="title" :visible.sync="dialogFormVisible">
			
		  <el-form :model="form">
		    <el-form-item label="方向名称" :label-width="formLabelWidth">
		      <el-input v-model="form.name" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="方向简介" :label-width="formLabelWidth">
		      <el-input v-model="form.description" auto-complete="off"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button size="small" @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" size="small" @click="addDepartment">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>
<!-- 2. javascript部分，用于控制template -->
<script>

// 导入mapGetters，用于调用departmentStore中的getter函数
import {mapGetters,mapActions} from 'vuex';

export default {
	// vue的data属性中定义的值可以在页面中直接获取
	data: function(){
		return {
			msg:'hello world',
			border:true,
			// 用于保存要删除元素的id
			multipleSelection:[],
			title:'添加方向',
			dialogFormVisible:false,
			form:{},
			formLabelWidth:'120px'
		};
	},
	// vue中的computed是计算属性
	computed:{
		...mapGetters(['allDepartments'])
	},
	mounted(){
		// 调用action查询所有的部门  php 简单（建网站）2000
		// 医院系统 	互联网+	
		this.findAllDepartments();
	},
	// 函数 es6
	methods:{
		...mapActions(['findAllDepartments','saveDepartment','deleteDepartment','batchDeleteDepartment']),
		// 处理多选
		handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 处理修改操作
    handleEdit(index,row){
    	//1. 通过当前要修改数据的id找到该数据，并且显示到模态框中
    	this.form = row;	//双向数据绑定
    	//2. 模态框打开 
    	this.title = "修改方向信息"
    	this.dialogFormVisible = true;
    },
    batchDelete(){
    	this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        	var ids = this.multipleSelection;
		    	// 获取要删除数据的id,并且把它们放到一个数组中
		    	ids = ids.map(function(item){
		    		return item.id;
		    	});
		    	//调用store中的action完成删除操作
		    	this.batchDeleteDepartment(ids);
        	//2.如果删除成功才提示 高保真页面
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({type: 'info', message: '已取消删除'});
        });
    	
    },
    // 处理删除操作
    handleDelete(index,row){
    	this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        	//1.调用store中的功能进行删除
        	this.deleteDepartment(row.id);
        	//2.如果删除成功才提示 高保真页面
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({type: 'info', message: '已取消删除'});
        });
    },
    toAddDepartment(){
    	//1. 弹出模态框
    	this.title = "添加方向信息";
    	this.form = {};
    	this.dialogFormVisible = true;
    },
    addDepartment(){
    	var vm = this;
    	//调用store中的action完成数据保存操作
    	this.saveDepartment(this.form).then(function(){
    		// 模态框关闭
    		vm.dialogFormVisible = false;
    		// 通知保存成功
    		vm.$message({
          showClose: true,
          message: '恭喜你，保存成功',
          type: 'success'
        });
    	}).catch(function(error){
    		console.log(error);
    		vm.$message({
          showClose: true,
          message: '保存失败',
          type: 'error'
        });
    	});

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





