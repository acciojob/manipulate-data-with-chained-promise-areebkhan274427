//your JS code here. If required.
var arr=[1,2,3,4];

function print(){
	return new Promise(function(resolve,reject){
			resolve(arr);
	});
}

function odd(){
	return new Promise(function(resolve){
		setTimeout(()=>{
			arr=arr.filter(function(num){
				return num%2==0;
			});
			document.getElementById('output').innerHTML=arr;
			resolve(arr);
		},1000);
	})
}

function even(){
	return new Promise(function(resolve){
	
		setTimeout(()=>{
			arr.forEach(function(ele,index){
				
				arr[index]=arr[index]*2;
			})
			document.getElementById('output').innerHTML=arr;
			resolve(arr);
		},2000);
	})
}


print().then(function(data){
	return odd(data);
}).then(function(data){
	return even(data);
});

