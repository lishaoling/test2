<template>
  <div id="app">
    <!--<router-view></router-view>-->   <!--路由的显示  ---- 对应的组件在哪一个位置显示-->
    <router-view name="header"></router-view>    <!--多视图路由  name属性-->
    <!--<router-view name="content"></router-view>-->
    <!--<transition name="slide-fade">-->
    	<router-view name="content"></router-view>
    <!--</transition>-->
    <!--<v-footer></v-footer>-->
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
	//使用哪个组件先在引入（import）
	import Footer from "./components/footer/index.vue"
	
	export default {
	  //name: 'App'
	  components:{
	  	//"v-footer":Footer   //注册组件
	  }
	}
</script>

<style lang="scss">
@import "~@/lib/reset.scss";

html,body,#app{
	@include rect(100%,100%);
}
#app{
	@include flexbox();
	/*@include flex-direction(column);*/
	flex-direction:column;
	.header{
    width: 100%;
    height: 0.88rem;
    background-color: #f66;
    color: #fff;
    text-align: center;
    line-height: 0.8rem;
	}
	.container{
		@include flex();
		@include rect(100%,auto);
		@include flexbox();
		flex-direction:column;
		/*.header{
	    width: 100%;
	    height: 0.88rem;
	    background-color: #f66;
	    color: #fff;
	    text-align: center;
	    line-height: 0.8rem;
		}*/
    .content{
    	@include flex();
	    width: 100%;
	    height: auto;
    }
	}
	footer{
		@include rect(100%,1rem);
		@include background-color(#eee);
		@include text-color(#333);
	}
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
/*.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}*/
</style>
