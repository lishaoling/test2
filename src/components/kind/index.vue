
<template>
	<transition name="bounce">
	  <div class="container">
	  	<header>{{title}}</header>
	  	<div class="content">
	  		<aside>
	  			<ul class="list">
	  				<router-link v-for="(item,index) in classList" :key="index" :to="{name:'kindlist', params:{classId:item.id,title:item.title}}" tag = "li">{{item.name}}</router-link>
	  			</ul>
	  			<!--classId是router文件夹里面的path:"/kind/:classId"的参数，表示路径-->
	  		</aside>
	  		<!--<section>{{this.$route.params.classId}}</section>--><!--耦合度太高，给路由传参使用props的值-->
	  		<section>链接地址：{{classId}}</section>
	  	</div>
	  </div>
  </transition>
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>