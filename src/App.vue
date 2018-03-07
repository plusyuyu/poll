<!-- 入口文件 -->
<template>
  <div id="app">
    <!-- 头部布局开始 -->
    <header class="header container-fluid">
      <div class="row">
        <div class="logo col-sm-6 ">
          <i class="fa fa-shopping-bag"></i>
          <a href="#">智慧校园课调云平台</a>
        </div>
        <div class="info col-sm-6 hidden-xs">
          <el-dropdown class="user">
            <span class="el-dropdown-link">
              <img src="@/assets/user_2.jpg">
              超级管理员<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><i class="fa fa-exclamation-circle fa-fw"></i>待办事宜</el-dropdown-item>
              <el-dropdown-item><i class="fa fa-commenting-o fa-fw"></i>通知</el-dropdown-item>
              <el-dropdown-item divided>
                <i class="fa fa-power-off fa-fw"></i>退出
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </header>
    <!-- 头部布局结束 -->
    <!-- 体部布局开始-->
    <article class="app_content container-fluid">
      <!-- 内容区左侧 -->
      <!-- 当屏幕大小小于768的时候，隐藏 -->
      <div class="app_left hidden-xs" :class="collapseLeft">
        <div class="app_left_top">
          <ul>
            <li @click="collapse"><i class="fa fa-align-justify"></i></li>
            <!-- 
            <li><i class="fa fa-cog"></i></li>
            <li><i class="fa fa-user-circle "></i></li>
             -->
          </ul>
        </div>

        <div class="app_left_bottom">
          <el-menu default-active="1-4-1" 
            class="el-menu-vertical-demo" 
            @open="handleOpen" 
            @close="handleClose" 
            :collapse="isCollapse"
            :unique-opened=uniqueOpened
            :router=isRouter
            background-color="#eff3f4">

            <!-- <el-submenu index="1" 
              :show-timeout='timeout'
              :hide-timeout='timeout'> -->
            <el-submenu index="1" >
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item index="1-1">
                <i class="el-icon-setting"></i>
                <span slot="title">子导航1</span>
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-setting"></i>
                <span slot="title">子导航2</span>
              </el-menu-item>
            </el-submenu>

            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>

             <el-submenu index="3" >
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">系统设置</span>
              </template>
              <el-menu-item index="/settings/department">
                <i class="el-icon-setting"></i>
                <span slot="title">方向设置</span>
              </el-menu-item>
              <el-menu-item index="/settings/clazz">
                <i class="el-icon-setting"></i>
                <span slot="title">班级设置</span>
              </el-menu-item>
              <el-menu-item index="/settings/teacher">
                <i class="el-icon-setting"></i>
                <span slot="title">讲师设置</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </div>
      <!-- 内容区右侧 -->
      <div class="app_right" :class="collapseRight">
        <div class="app_right_top">设置 > 方向设置</div>
        <div class="app_right_bottom">
          <!-- 用于接受组件加载 -->
          <router-view></router-view>
        </div>
      </div>
    </article>
    <!-- 体部布局结束-->
    <!-- 底部布局开始-->
    <footer class="footer">
      <div>版权所有：昆山杰普软件科技有限公司</div>
    </footer>
    <!-- 底部布局结束-->
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  data(){
    return {
      isCollapse: false,
      timeout:"10",
      uniqueOpened:true,
      isRouter:true
    }
  },
  computed:{
    collapseLeft (){
      return this.isCollapse?"app_left_collapse":""
    },
    collapseRight(){
      return this.isCollapse?"app_right_collapse":"";
    }
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(this.isCollapse);
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(this.isCollapse);
      console.log(key, keyPath);
    },
    collapse(){
      this.isCollapse = !this.isCollapse
       //62
      if(this.isCollapse){

      }
    }
  }
}
</script>

<style scoped="scoped" lang="scss">
$bgColor:#eff3f4;

$bgColor_header:#448db8;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  background-color: $bgColor;

  ul {
    margin:0;padding:0;
    list-style:none;
  }
  // 头部样式开始
  .header {
    position:absolute;
    left:0;right:0;
    background-color:$bgColor_header;
    padding:0 2em;
    color:#FFFFFF;
    * {
      line-height:56px;
      height:56px;
    }
    .logo{
      text-align:left;
      font-size:1.5em;
      a {
        text-decoration: none;
        color:#FFFFFF;
      }
    }
    .info {
      text-align:right;
      .user {
        cursor:pointer;
        .el-dropdown-link {
          color:#FFFFFF;
        }
        img{
          height:2.5em;
          width:2.5em;
          border-radius:50%;
          background-color:#FFFFFF;
          margin:0 .5em;
        }
      }
    }
  }
  // 头部样式结束
  // 体部样式开始
  .app_content {
    position:absolute;
    left:0;right:0;
    top:56px;
    bottom:30px;
    
    

    .app_left {
      position:absolute;
      top:0; bottom:0;
      left:0;
      width:230px;
      border-right:1px solid #ccc;

      .app_left_top {
        position:absolute;
        top:0;
        left:0;right:0;
        height:3em;
        line-height:3em;
        //padding:0 1em;
        border-bottom:1px solid #ccc;

        ul {
          padding:0.25em;
          li {
            float:left;
            width:2.5em;
            height:2.5em;
            line-height:2.5em;
            text-align:center;
            color:#FFFFFF;
            border-radius:.25em;
            cursor:pointer;
            margin-right:.25em;
          }
          li:nth-child(1){
            background-color:$bgColor_header;
          }
          li:nth-child(2){
            background-color:#ffb35f;
          }
          li:nth-child(3){
            background-color:#f78989;
          }
        }
      }
      
      .app_left_bottom {
        position:absolute;
        top:3em;
        bottom:0;
        left:0;right:0;
        padding:.1em 0;
        //padding:0 1em;
        
        .el-menu {
          border-right:none;
        }
        .el-menu--collapse {
          width:63px;
        }
      }
    }
    
    // 左侧动态折叠样式
    .app_left_collapse {
      width:64px;
    }
    
    .app_right {
      position:absolute;
      top:0; bottom:0;
      left:230px; 
      right:0;
      // 如果屏幕大小小于768，则铺满整个屏幕
      @media screen and (max-width: 767px) {
        left:0;
      }

      .app_right_top {
        position:absolute;
        top:0;
        left:0;right:0;
        height:3em;
        line-height:3em;
        padding:0 1em;
        border-bottom:1px solid #ccc;
      }
      
      .app_right_bottom {
        background:#FFFFFF;
        position:absolute;
        top:3em;
        bottom:0;
        left:0;right:0;
        padding:1em;
        overflow-y:scroll;
      }
    }
    // 右侧动态折叠样式
    .app_right_collapse {
      left:64px;
    }
  }
  // 体部样式结束
  // 底部样式开始
  .footer {
    position:absolute;
    background-color:$bgColor_header;
    left:0;right:0;
    bottom:0;
    height:30px;
    line-height:30px;
    text-align:center;
    color:#FFFFFF;
  }
  // 底部样式结束
}
</style>
