import axios from '../axios'

export default {
	//初始状态
	state:{
		departments:[]
	},
	//获取器
	getters:{
		allDepartments:function(state){
			return state.departments;
		}
	},	
	//突变
	mutations:{
		alterDepartments(state,data){
			state.departments = data;
		}
	},
	//动作
	actions:{
		// 保存部门信息
		saveDepartment(context,dep){
			return new Promise((resolve,reject)=>{
				axios.post('/manager/saveOrUpdDepartment.action',{
					'department.name':dep.name,
					'department.description':dep.description
				}).then(({data})=>{
					//context.commit('alterDepartments',data);
					//保存成功应该重新查询所有的数据
					context.dispatch('findAllDepartments');
					resolve();
				}).catch((error)=>{
					reject(error);
				});
				
			});
		},
		// 查询所有的部门
		findAllDepartments(context){
			return new Promise((resolve,reject)=>{
				axios.get('/manager/queryDepartment.action').then(({data})=>{
					context.commit('alterDepartments',data);
					resolve();
				}).catch((error)=>{
					reject(error);
				});
				
			});
		}
	}
}
