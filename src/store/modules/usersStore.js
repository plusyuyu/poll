import axios from '../axios'

export default {
	//初始状态
	state:{
		users:[]
	},
	//获取器
	getters:{
		allUsers:state=>state.users
	},
	//突变
	mutations:{
		alterUsersData(state,data){
			state.users = data;
		}
	},
	//动作
	actions:{
		findAllUsers(context){
			return new Promise((resolve,reject)=>{
				/*
				axios.get('/manager/queryAllTeachers.action').then(({data})=>{
					context.commit('alterTeachersData',data);
					resolve();
				}).catch((error)=>{
					reject(error);
				});
				*/
			});
		}
	}
}
