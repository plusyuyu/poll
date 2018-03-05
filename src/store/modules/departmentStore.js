import axios from '../axios'

export default {
	//初始状态
	state:{
		departments:[{
				id:1,
				name:'java',
				description:'Java是做后开发的',
				belongId:1001
			},{
				id:2,
				name:'c++',
				description:'c++是做游戏开发的',
				belongId:1001
			},{
				id:3,
				name:'webui',
				description:'webui是做游戏开发的',
				belongId:1001
			}]
	},
	//获取器
	getters:{
		allDepartments:function(state){
			return state.departments;
		}
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
