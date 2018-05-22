import Vue from 'vue'    //因为用到了vue对象
//import Router from 'vue-router'  //默认
import VueRouter from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'   //默认

//Vue.use(Router)    //默认     如果在一个模块化工程中使用vue-router，必须要通过 Vue.use() 明确地安装路由功能。
Vue.use(VueRouter) 

/**
 *使用 router（路由）的步骤：
 * 步骤1：引入需要的路由
 * 步骤2：定义路由规则
 * 步骤3：创建router的实例
 * 步骤4：将实例挂载到根组件中
 */

//1、引入需要的路由
import Home from "./../components/home/index.vue"    //src命名为@，路径等价于@/components/home/index.vue，但是无法用alt跳转
import Cart from "./../components/cart/index.vue"
import Kind from "./../components/kind/index.vue"
import User from "./../components/user/index.vue"
import Your from "./../components/your/index.vue"
import HomeHeader from "./../components/homeHeader/index.vue"  //地址别写错homeHeader
import CartHeader from "./../components/cartHeader/index.vue"
import KindHeader from "./../components/kindHeader/index.vue"
import UserHeader from "./../components/userHeader/index.vue"
import YourHeader from "./../components/yourHeader/index.vue"
import Footer from "./../components/footer/index.vue"
import DetailFooter from "./../components/detailFooter/index.vue"
import PersonalLogin from "./../components/personalLogin/index.vue"     
import PersonalNoLogin from "./../components/personalNoLogin/index.vue"
//import PersonalLoginHeader from "./../components/personalLoginHeader/index.vue"
//2、创建路由规则
const routes = [
  {path:"/",redirect:"/home"},   //重定向（默认首页）
  //{path:"/kind",redirect:"/kind/1"},   //重定向（默认首页）
  {path:"/kind",redirect:"/kind/1/美食1"},   //重定向（默认首页）
  {
  	path:"/home",           
  	name:"home",
  	//component:Home
  	components:{          //多视图路由
  		header:HomeHeader,    //头部
  		content:Home,    //内容区
  		footer:Footer    //底部
  	}
  },
  {
  	path:"/kind", 
  	name:"kind",
  	//component:Kind
  	components:{          //多视图路由
  		header:KindHeader,    //头部
  		content:Kind,    //内容区
  		footer:Footer    //底部
  	}
  },
  {
  	//path:"/kind/:classId",  //动态路由匹配   把某种模式匹配到的所有路由，全都映射到同个组件   classId是路径参数
  	path:"/kind/:classId/:title",  //动态路由匹配   把某种模式匹配到的所有路由，全都映射到同个组件   classId是路径参数
  	name:"kindlist",      //不同 
  	//component:Kind   //组件没有改变            //共同的组件
  	components:{          //多视图路由
  		//header:KindHeader,    //头部
  		content:Kind,    //内容区
  		footer:Footer    //底部
  	},
  	//props:true    //向路由组件传参，解耦，代码遵循“高内聚低耦合”
  	//因为上面用的多视图路由，所以需要将props写成对象
  	// 对于包含命名视图的路由，必须分别为每个命名视图添加 `props` 选项：
  	props:{
  		//headerheader:true,   
  		content:true,    
  		footer:false 
  	}
  },
//{path:"/kind/:classId/name/:title", name:"kindlist",component:Kind},
  {
  	path:"/cart", 
  	name:"cart",
  	//component:Cart
  	components:{          //多视图路由
  		header:CartHeader,    //头部
  		content:Cart,    //内容区
  		footer:Footer    //底部
  	}
  },
  {
  	path:"/user", 
  	name:"user",
  	//component:User
  	components:{          //多视图路由
  		header:UserHeader,    //头部
  		content:User,    //内容区
  		footer:Footer    //底部
  	},
  	children:[
  		{//登录状态
  			path:"personalLogin",    //地址不加斜杠
		  	name:"personalLogin",
		  	component:PersonalLogin
		  	/*components:{          //多视图路由
		  		header:PersonalLoginHeader,    //头部
		  		content:PersonalLogin    //内容区
		  	}*/
  		},
  		{//未登录状态
  			path:"personalNoLogin",    //地址不加斜杠
		  	name:"personalNoLogin",
		  	component:PersonalNoLogin
		  	/*components:{          //多视图路由
		  		header:PersonalLoginHeader,    //头部
		  		content:PersonalNoLogin    //内容区
		  	}*/
  		}
  	]
  },
   {
  	path:"/detail/:goodsID", 
  	name:"detail",
  	//component:User
  	components:{          //多视图路由
  		header:CartHeader,    //头部
  		content:Cart,    //内容区
  		footer:DetailFooter    //底部
  	}
  },
  {
  	path:"/your", 
  	name:"your",
  	//component:Your
  	components:{          //多视图路由
  		header:YourHeader,    //头部
  		content:Your,    //内容区
  		footer:Footer    //底部
  	}
  }
]

//3、创建路由实例
const router = new VueRouter({
	routes    //routes :routes   要求：key和value一样
})

export default router;
/*export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})*/
/*function text(){
	alert("11111111");
}
text();*/
