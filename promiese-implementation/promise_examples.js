var sample_one = new Promise (function(resolve, reject){
	setTimeout(function(){
		reject('TIME OUT OVER')
	},2000)
}).catch(function(err){
    console.log('Error Catched');
})

var sample_two = new Promise(function(resolve, reject){
	setTimeout(function(){
		resolve('1')
	}, 1000)
}).then(function(data){
	return data + ' a'
}).then(function(data){
	console.log(data)
})

var sample_three = new Promise(function(resolve, reject){
	setTimeout(function(){
		resolve('1')
	}, 1000)
}).then(function(firstThen){
	return 'r-1st then'
}).then(function(secondThen){
	console.log('r-2nd-then')
	throw 'Error from 2nd Then';
}).catch(function(err){
    console.error('1st-Error');
}).catch(function(err){
    console.error('2nd-Error');
})

var sample_four = new Promise(function(resolve, reject){
	setTimeout(function(){
		resolve('1')
	}, 1000)
}).then(function(firstThen){
    throw 'Error from 1st Then';
}).then(function(secondThen){
	console.log('r-2nd-then')
	throw 'Error from 2nd Then';
}).catch(function(err){
    console.error('1st-Error');
}).catch(function(err){
    console.error('2nd-Error');
})
