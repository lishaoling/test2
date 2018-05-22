// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'    //因为用到了vue对象
import App from './App'
import router from './router'    //引入router路由，文件夹router里面的index.js可用
import Es6Promise from 'es6-promise'
import FastClick from 'fastclick'
import store from './store'  
FastClick.attach(document.body)
Es6Promise.polyfill();

Vue.config.productionTip = false

/* eslint-disable no-new */
//为了让入口文件（main.js)执行它最纯净的部分，所以把123步骤放到router文件夹的js文件内
//4、挂载router到根组件
new Vue({
  el: '#app',
  //render:h=>h(App),   //render是渲染的意思  和components等价。整句的意思是：给el: '#app'内部渲染一个为App的组件。
  router,      //挂载router       //即router:router,
  store,   //vuex      //即store:store,
  components: { App },
  template: '<App/>',
})

/*function text(){
	alert("222");
}
text();
*/