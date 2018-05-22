export default {
  data(){
    return {
      
    }
  },
  mounted(){
    if (window.history && window.history.pushState) {
      window.addEventListener('popstate', function () {
	      window.history.pushState('forward', null, '#');
	//    window.history.forward(1);
	//    alert("不可回退");
      });
    }

    window.history.pushState('forward', null, '#'); //在IE中必须得有这两行
    window.history.forward(1);
  },
  methods:{
    goKind(){
    	//this.$router.push("/kind/1");  //路由跳转   相当于window.location.href     router-link里面的to相当于a的href
    	this.$router.push("/kind/1/美食1");
    },
    goDetail(){
    	this.$router.push("/detail/1");  //路由跳转   相当于window.location.href     router-link里面的to相当于a的href
    }
  },
  computed:{
    
  },
  components:{
    
  },
  watch:{
    
  }
}