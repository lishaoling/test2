import axios from 'axios'

export default {
  actionClassList(context, data){   //context是对象，即classList，data是data；
    console.log(data)  //是url
    axios.get(data).then(function(response){
    	var str=JSON.stringify(response);
			console.log(str);
	//  console.log(response.data[0].entries);
	    //var result = response.data[0].entries;
	    //console.log(result);
	    context.commit({  //context是对象，提交
	      type:"changeClassList",
	      //data: response.data     //看返回的数据，左边的只表示列表data，所以右边赋值也需要定位到返回数据的列表    data.json
	      data: response.data.classList     //看返回的数据，左边的只表示列表data，所以右边赋值也需要定位到返回数据的列表     data1.json
	    }) 
	  }).catch(function(error){
	    console.log(error)
	  })
  }
}
