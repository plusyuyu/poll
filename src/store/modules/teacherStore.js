// ajax框架
import axios from '../axios'

export default {
	state:{
		teachers:[]
	},
	getters:{
		allTeachers(state){
			return state.teachers;
		}
	},
	mutations:{
		alterTeachers(state,data){
			state.teachers = data;
		}
	},
	actions:{
		findAllTeachers(context){
			return new Promise(function(resolve,reject){
				axios.get('/manager/queryCourses.action').then(function({data}){
					//将查询到的数据修改到state中
					context.commit('alterTeachers',data);
					resolve();
				}).catch(function(){
					reject();
				});
			});
		}
	}
}