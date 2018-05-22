export default {
  data(){
    return {
      
    }
  },
  mounted(){
    /**
    * 如果用户是登录状态
    * this.$router.push(/user/personalLogin);
    * 如果用户是未登录状态
    * this.$router.push(/user/personalNoLogin);
    */
    if(sessionStorage.getItem("username")){
    	this.$router.push("/user/personalLogin");
    }else{
    	this.$router.push("/user/personalNoLogin");
    }
  },
  methods:{
    
  },
  computed:{
    
  },
  components:{
    
  },
  watch:{
    
  }
}