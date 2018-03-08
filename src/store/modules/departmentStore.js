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
		batchDeleteDepartment(context,ids){
			return new Promise((resolve,reject)=>{
				axios.post('/manager/batchDelDepartment.action',{
					'ids':ids
				}).then(({data})=>{
					//保存成功应该重新查询所有的数据
					context.dispatch('findAllDepartments');
					resolve();
				}).catch((error)=>{
					reject(error);
				});
			});
		},
		deleteDepartment(context,id){
			return new Promise((resolve,reject)=>{
				axios.post('/manager/delDepartment.action',{
					'department.id':id
				}).then(({data})=>{
					//保存成功应该重新查询所有的数据
					context.dispatch('findAllDepartments');
					resolve();
				}).catch((error)=>{
					reject(error);
				});
			});
		},
		// 保存部门信息
		saveDepartment(context,dep){
			return new Promise((resolve,reject)=>{
				axios.post('/manager/saveOrUpdDepartment.action',{
					'department.id':dep.id?dep.id:'',
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
