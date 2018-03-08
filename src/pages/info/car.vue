<template>
	<div class="car">
		<!-- 操作区域 -->
		<div class="options">
			<el-input type="search" placeholder="请输入内容" style="width:20em" size="small"/>
			<el-button size="small" @click='toAddCar'>添加</el-button>
			<el-button size="small">批量删除</el-button>
		</div>
		<!-- 数据 -->
		 <el-table
      :data="tblData"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="地址">
      </el-table-column>
    </el-table>


<!-- 模态框 -->
 <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="60%">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

	</div>
</template>
<script>
	export default {
		data(){
			return {
				dialogVisible:false,
				tblData:[{name:'one'},{name:'two'}]
			}
		},
		methods:{
			toAddCar(){
				this.dialogVisible=true
			}
		}
	}
</script>
<style scoped>
	.options {
		margin-bottom: 1em;
	}
</style>