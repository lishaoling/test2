
//mutations中不涉及ajax请求，不涉及计时器延时器等，只是单纯的修改state

export default {
  changeHomeBanner(state, obj){
    state.homeBanner = obj.data
  },
  changeHomeList(state, obj){
    state.homeList = obj.data
  },
  changeClassList(state, obj){
    state.classList = obj.data    //state是初始化，state.classList是state初始化的classList
  }
}
/**

  state.classList = obj.data
}     解析：
obj指的是：kind/script.js里面  
this.$store.dispatch({       //另一种派发方式,派发到mutations.js中
    type:"actionClassList",
    data:url
  })
  中的参数obj.data就是url,即state.classList就是url;
  actionClassList是actions.js中的axios请求；因为mustations是同步的，所以把axios操作都放到能异步的actions.js文件中

actions中的actionClassList(context, data) //data就是url


* **/