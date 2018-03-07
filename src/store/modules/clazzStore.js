import axios from '../axios'

export default {
	//初始状态 数据的初始化
	state:{
		clazzs:[]
	},
	//获取器 用于获取state中的数据
	getters:{
		allClazz:function(state){
			return state.clazzs;
		}
	},	
	//突变 用于修改state中的值
	mutations:{
		alterClazz(state,data){
			state.clazzs = data;
		}
	},
	//动作 通过异步技术获取数据，然后调用突变更改数据
	actions:{
		findAllClazz(context){
			return new Promise((resolve,reject)=>{
				axios.get('/manager/queryClass.action').then(({data})=>{
					// 提交突变
					context.commit('alterClazz',data);
					resolve();
				}).catch((error)=>{
					reject(error);
				});
			});
		}
	}
}
