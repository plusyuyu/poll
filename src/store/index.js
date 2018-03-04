import Vuex from 'vuex'
import Vue from 'vue'

import UsersStore from './modules/usersStore'

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		UsersStore
	}
});