import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './state.js'
import mutations from './mutations'
import actions from './actions'


//状态管理器的作用是：1、让一个地方获取的数据全局都可以使用；2、解耦。


/*const store = new Vuex.Store({
  state: {    //所有需要管理的组件状态    //第1行
  	list:[]    //第2行
  },  //第3行
  mutations: {   //改变状态的集合————现实的提交mutation     //第4行
  	changeList(state,data){     //第5行    state就指代第1行的state，你需要给第2行的list重新赋值，data就表示显示提交对象的数据
  		state.list = data    //第6行
  	}  //第7行
  },
  actions:{      //异步操作
  	
  }
})*/
const store = new Vuex.Store({
	/*
	 * 为避免state、mutations、actions的内容过长，抽离出来把对应的放到state.js、mutations.js、actions.js文件中
	 */
  state,        //即state:state,后面的state表示state.js文件       //状态
  mutations,    //即mutations:mutations,后面的mutations表示mutations.js文件       //
  actions       //即actions:actions,后面的actions表示actions.js文件       
})
export default store;

/**
 * 在main.js里加
 * import store from './store'  
 * new Vue({   
 * 	...
 * store,
 * ...
 * })
 **/

//cart里面有使用案例