import Vuex from 'vuex'
import Vue from 'vue'

import UsersStore from './modules/usersStore'
import DepartmentStore from './modules/departmentStore'
import ClazzStore from './modules/clazzStore'
import TeacherStore from './modules/teacherStore'

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		UsersStore,
		DepartmentStore,
		ClazzStore,
		TeacherStore
	}
});