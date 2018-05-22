import axios from 'axios'
//Vue.prototype.$http = axios;

import {BASE_URL} from '../../common/base.js'    //等价于@/common/base.js  
//import {DATA_URL} from '../../json/data.json'    //等价于@/common/base.js  
import { mapState } from 'vuex'   //mapState属于vuex下面的一个分对象

export default {
  //props:["classId"],   //向路由组件传参
  props:["classId","title"],   //向路由组件传参
  data(){
    return {
    	//classList:[]
      /*classList:[
	    	{
	    		id:1,
	    		name:"美食1",
	    		title:"美食1"
	    	},
	    	{
	    		id:2,
	    		name:"美食2",
	    		title:"美食2"
	    	},
	    	{
	    		id:3,
	    		name:"美食3",
	    		title:"美食3"
	    	},
	    	{
	    		id:4,
	    		name:"美食4",
	    		title:"美食4"
	    	},
	    	{
	    		id:5,
	    		name:"美食5",
	    		title:"美食5"
	    	},
	    	{
	    		id:6,
	    		name:"美食6",
	    		title:"美食6"
	    	},
	    	{
	    		id:7,
	    		name:"美食7",
	    		title:"美食7"
	    	},
	    	{
	    		id:8,
	    		name:"美食8",
	    		title:"美食8"
	    	},
	    	{
	    		id:9,
	    		name:"美食9",
	    		title:"美食9"
	    	},
	    	{
	    		id:10,
	    		name:"美食10",
	    		title:"美食10"
	    	}
      ]*/
    }
  },
  mounted(){
  	//第一性为活动状态
  	//$("ul.list li:first-child").addClass("router-link-exact-active").addClass("router-link-active");
  	//按道理说，首先ajax获取分类列表，settimeout模拟数据
/*	axios({  //跨域路径
	  method: 'get',  
	  //https://product.suning.com/pds-web/ajax/itemGiftNameJsonp_000000000742958853-000000000742997643_0000000000_.html
	  url: "api/pds-web/ajax/itemGiftNameJsonp_000000000742958853-000000000742997643_0000000000_.html",
	}).then(function ( response ) {
	  //console.log(response.data[0].entries)
	  var str=JSON.stringify(response);
	  console.log(str);
	}).catch(function (error) {
	  console.log("数据出错")
	  //console.log(error)
	})*/
	//var url="static/data.json";
	var url="static/data1.json";
	//var url="api/pds-web/ajax/itemGiftNameJsonp_000000000742958853-000000000742997643_0000000000_.html";
  var that = this;
	this.$store.dispatch("actionClassList", url); //派发到mutations
	/*this.$store.dispatch({    //另一种派发方式，派发到mutations
    type:"actionClassList",
    data:url
  })*/
  //这里边的axios是同步操作，直接提交mutations
  /*axios.get(url).then(function ( response ) {
	  //console.log(response.data[0].entries)
	  var str=JSON.stringify(response);
	  console.log(str);
	  //var data = response.data[0].entries;
	  that.classList = response.data.classList;
	  that.$store.commit({    //提交到状态管理器中
	    type:"changeClassList",
	    data:response
	  })
	}).catch(function (error) {
	  //console.log("数据出错")
	  console.log(error)
	})*/
   
	var idClass = this.$route.params.classId   //classId是router文件夹里面的path:"/kind/:classId"的参数，表示路径
	 console.log(idClass);
	 //依据classId进行ajax请求
	 this.getData(idClass);
    
  },
  methods:{
  	/**
  	 * 下面的函数内的classID表示传入的参数，可以随意，只要次函数内的参数是classID就可以
  	 * 下面的函数用途，传入参数，根据不同参数调用不同ajax，跳转不同页面，显示相应的页面数据
  	 **/
    getData(classID){    
    	//axios进行请求数据
    }
  },
  computed:mapState([   //mapState作用：解耦
	  // 映射 this.count 为 store.state.count
	  "classList"   //state中初始定义的状态
	]),
  components:{
    
  },
  watch:{
    $route(newVal,oldVal){  //监听路由的变化
    	console.log("aaa",newVal.params.classId);    //classId是router文件夹里面的path:"/kind/:classId"的参数，表示路径
    	var classIdName=newVal.params.classId;     //classId是router文件夹里面的path:"/kind/:classId"的参数，表示路径
    	//依据ajax进行classID请求
    	this.getData(classIdName);
    }
  }
}


