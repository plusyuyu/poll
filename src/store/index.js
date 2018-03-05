import Vuex from 'vuex'
import Vue from 'vue'

import UsersStore from './modules/usersStore'
import DepartmentStore from './modules/departmentStore'

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		UsersStore,
		DepartmentStore
	}
});