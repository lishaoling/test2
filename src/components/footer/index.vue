<template>
  <footer>
  	<ul>
  		<router-link v-for="(item,index) in footerlist" tag="li" :to="item.path" :key="index">{{item.name}}</router-link>
  	</ul>
  </footer>
  
</template>
<script src="./script.js"></script>
<style scoped lang="scss" src="./style.scss"></style>