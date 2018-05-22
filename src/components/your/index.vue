<template>
  <div class="container">你的-------{{classList}}
  	<ul>
  		<li v-for="item in classList" :key="item.id">{{item.name}}</li>
  	</ul>
  </div>
  <!--<ul>
  	<li v-for="item in classList" :key="index">{{item.name}}</li>
  </ul>-->
  <!--<ul class="list">
		<router-link v-for="(item,index) in classList" :key="index" :to="{name:'kindlist', params:{classId:item.id,title:item.title}}" tag = "li">{{item.name}}</router-link>
	</ul>-->
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>