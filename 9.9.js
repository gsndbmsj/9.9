/*
* @Author: Administrator
* @Date:   2017-09-09 09:07:36
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-11 00:46:14
*/


//寻找arr数组中是否存在某一个值value   存在的话 返回数组下标
function fn(arr,value){
		if(!(typeof arr=='object'&&arguments.length>1)){
			return '输入有误'
		}
		for(var i=0;i<arr.length;i++){
			if(arr[i]==value){
				return i
			}
			
		}
		return -1
	}
//寻找arr数组中是否存在某一个值value   存在的话 返回此数组最后一个元素下标
	function fn1(arr,value){
		if(!(typeof arr=='object'&&arguments.length>1)){
			return '输入有误'
		}
		for(var i=arr.length-1;i>=0;i--){
			if(arr[i]==value){
				return i
			}
			
		}
		return -1
	}

//将数组进行翻转
   function reverse(arr){
   	var newarr=[]
   	for(var i=arr.length-1;i>=0;i--){
   		push(newarr,arr[i])
   		 
   	}
   	return newarr

   }

   function push(arr,...rest){
   	for(var i=0;i<rest.length;i++){
   		arr[arr.length]=rest[i]

   	}
   }

 //万能的删除
  
  function spliceCancel(arr,pos,num){
  	var newarr=[]
  	for(var i=0;i<arr.length;i++){
  		if(i>=pos && i<pos+num){
  			continue
  		}
  		newarr[newarr.length]=arr[i]
  	}
  	return newarr
  }

//万能的添加
  function spliceAdd(arr,pos,...rest){
  	var newarr=[]
  	for(var i=0;i<pos;i++){
  		newarr[newarr.length]=arr[i]
  	}
  	for(var i=0;i<rest.length;i++){
  		newarr[newarr.length]=rest[i]
  	}
  	for(i=pos;i<arr.length;i++){
  		newarr[newarr.length]=arr[i]
  	}
  	return newarr
  }


//万能的添加和删除
function splice(arr,pos,num,...rest){
	 
	var newarr=spliceCancel(arr,pos,num)
	if(rest.length>0){
	newarr=spliceAdd(newarr,pos,...rest)

	}
	return newarr

}


// 有一个满足条件   返回true
function some(arr,fn){
  for(var i=0;i<arr.length;i++){
    if(fn(arr[i])){
      return true
    }
  }
  return false
}

//全部满足条件  返回true
function every(arr,fn){
  for(var i=0;i<arr.length;i++){
    if(!fn(arr[i])){
      return false
    }
  }
  return true
}


 


