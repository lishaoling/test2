<template>
  <div class="container">
  	<!--<header>首页</header>-->
  	<div class="content">首页内容<router-link to="/detail/100">商品详情页面</router-link></div>
  	<button @click="goKind()">去分类页面</button>
  	<button @click="goDetail()">商品详情页面</button>
  </div>
  
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>