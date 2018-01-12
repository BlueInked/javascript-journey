//Node.js 6.5
//Plain Javascript and Node.js is supported
// html/css is not supported

var funcs = [];
for (let i = 0; i <10; i++){
	funcs.push(function(){
		console.log(i);
	});
}
funcs.foreach(function(func){
	func();
})
