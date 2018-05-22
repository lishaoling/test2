<template>
  <div class="container">
  	我的内容
  	<!--<router-link to="/user/personalNoLogin" tag="button">未登录状态</router-link>
  	<router-link to="/user/personalLogin" tag="button">登录状态</router-link>-->
  	<hr />
		<router-view></router-view>   <!--嵌套路由-->
  </div>
  
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>