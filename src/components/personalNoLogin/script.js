export default {
  data(){
    return {
      
    }
  },
  mounted(){
    
  },
  methods:{
    personalLoginFun(){
    	var username=11111;
    	sessionStorage.setItem("username",username);
    	this.$router.push("/user/personalLogin");  //路由跳转   相当于window.location.href     router-link里面的to相当于a的href
    },
  },
  computed:{
    
  },
  components:{
    
  },
  watch:{
    
  }
}