// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import ElementUI from 'element-ui';
import ElTreeGrid from 'element-tree-grid';
import JpUI from './components';
import _ from 'lodash';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.css'
// 定制版Bootstrap
import './css/bootstrap/css/bootstrap.min.css';
import './css/bootstrap/css/bootstrap-theme.min.css';
//import './css/index.css';

Vue.config.productionTip = false

//注册饿了么组件
Vue.use(ElementUI);
//杰普组件
Vue.use(JpUI);
//注册树形表格
Vue.component(ElTreeGrid.name,ElTreeGrid);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  _,
  components: { App },
  template: '<App/>'
})
