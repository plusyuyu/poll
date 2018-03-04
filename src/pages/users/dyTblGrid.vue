<!-- 入口文件 -->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <el-button> <i class="fa fa-edit"></i> hello</el-button>
    <el-table :data="model.menus" border max-height="400">
        <el-table-tree-column 
            :expandAll=true
            :remote="remote"
            file-icon="fa fa-file" 
            folder-icon="fa fa-folder" 
            prop="label" 
            label="MenuName" 
            width="320">
              <template slot-scope="scope">
                  <span>{{scope.row.label}}</span> 
              </template>
            </el-table-tree-column>
        <el-table-column prop="id" label="id" width="180"></el-table-column>
        <el-table-column prop="description" label="Description" :show-overflow-tooltip="true" width="180"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          </template>
        </el-table-column>
    </el-table>
    
    <router-view/>
  </div>
</template>

<script>
let trees = [{
  id:1001,
  description:'terry',
  label:'one',
  children:[{
    id:10011,
    description:'tom',
    label:'one_one',
    parent_id:1001,
    children:[{
      id:100111,
      description:'innerTom',
      label:'one_one_one',
      parent_id:10011
    }]
  },{
    id:10012,
    description:'robin',
    label:'one_two',
    parent_id:1001
  }]
},{
  id:1002,
  description:'larry',
  label:'two'
}];

export default {
  name: 'App',
  data(){
    return {
      model: {
          menus: trees
      }
    }
  },
  methods:{
    handleEdit(row,index){
      console.log(row,index);
    },
    remote(row,callback){
      callback(row.children)
      /*
      setTimeout(function() {
          
      },500)
      */
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
