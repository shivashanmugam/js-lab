/**
 * 
 * @todo : catch support 
 * @todo : Promise.all and Promise.race support
 */
var Promise = function (promiseFn) {
    var isPromiseFnDefined = typeof promiseFn == 'function' ? true  : false;
    var _constants = {
        states: {
            pending: 'Pending',
            resolved: 'Resolved',
            rejected: 'Rejected'
        }
    }

    function PromiseRootFn(){}
    PromiseRootFn.prototype.then = function (resolveCallback) {
        // should return a promise object
        promiseInstance.resolveCallback = resolveCallback;
        promiseInstance.promiseChainObject = new Promise();
        return promiseInstance.promiseChainObject;
    }
    PromiseRootFn.prototype.catch = function (rejectCallback) {
        /**
         * @todo Catch Should return a promise Object
         */
        promiseInstance.rejectCallback = rejectCallback;
    }

    PromiseRootFn.prototype.resolve = function (result) {
        // should return a promise object
        promiseInstance.resolvedValue = result;
        promiseInstance.status = _constants.states.resolved;
        if (promiseInstance.resolveCallback) {
            let resolveCallbackReslut = promiseInstance.resolveCallback(result);
            promiseInstance.promiseChainObject.resolvedValue = resolveCallbackReslut;
            promiseInstance.promiseChainObject.promiseFn(promiseInstance.promiseChainObject.resolve, promiseInstance.promiseChainObject.reject);
        }
    }

    PromiseRootFn.prototype.reject = function (result) {
        // should return a promise object
        promiseInstance.status = _constants.states.rejected;
        if (promiseInstance.rejectCallback){
            promiseInstance.rejectCallback(result);
        }
    }
    var promiseInstance = new PromiseRootFn();
    promiseInstance.status = _constants.states.pending;
    promiseInstance.resolveCallback = undefined;
    promiseInstance.rejectCallback = undefined;
    promiseInstance.resolvedValue = undefined;
    promiseInstance.promiseFn = isPromiseFnDefined ? promiseFn : function(resolve, reject){resolve(promiseInstance.resolvedValue)};
    
    if(isPromiseFnDefined) promiseFn(promiseInstance.resolve, promiseInstance.reject);
    return promiseInstance;
}
/* 
// Example 1

new Promise(function(resolve, reject){
	setTimeout(function(){
		resolve('1')
	}, 1000)
}).then(function(data){
	return data + ' a'
}).then(function(data){
	console.log(data)
})

// Example 2 
var promisyingFn = function(resolve, reject){
	setTimeout(function(){
		resolve('TIME OUT OVER')
	},10000)
}

var promiseObj = new Promise(promisyingFn)
promiseObj.then(function(result){
    console.log('SUCCESS CALLBACK EXECUTING');
}) */