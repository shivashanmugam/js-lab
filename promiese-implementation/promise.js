/**
 * 
 * @todo : Promise.race support
 */
var Promise = function (promiseFn) {
    var isPromiseFnDefined = typeof promiseFn == 'function' ? true  : false;
    
    Promise._constants = {
        states: {
            pending: 'Pending',
            resolved: 'Resolved',
            rejected: 'Rejected'
        }
    }

    function PromiseRootFn(promiseFn){
        this.resolveCallback = undefined;
        this.rejectCallback = undefined;
        this.resolvedValue = undefined;
        this.status = Promise._constants.states.pending;
        this.promiseFn = isPromiseFnDefined ? promiseFn : function(resolve, reject){resolve(promiseInstance.resolvedValue)};
    }
    Object.assign(PromiseRootFn.prototype, Promise.handlerFns);
    
    var promiseInstance = new PromiseRootFn(promiseFn);
    promiseInstance.promiseFn(promiseInstance.resolve.bind(promiseInstance), promiseInstance.reject.bind(promiseInstance));
    return promiseInstance;
}

Promise.handlerFns = {
    then : function (resolveCallback) {
        // should return a promise object
        this.resolveCallback = resolveCallback;
        this.promiseChainObject = new Promise();
        this.promiseChainObject.then = Promise.PromiseThenOverride;
        return this.promiseChainObject;
    },
    catch : function (rejectCallback) {
        this.rejectCallback = rejectCallback;
    },
    resolve : function (result) {
        this.resolvedValue = result;
        this.status = Promise._constants.states.resolved;
        if (this.resolveCallback) {
            let resolveCallbackReslut = this.resolveCallback(result);
            this.promiseChainObject.resolvedValue = resolveCallbackReslut;
            if(this.promiseChainObject.resolveCallback){
                this.promiseChainObject.resolveCallback();
            }
        }
    },
    reject : function (result) {
        // should return a promise object
        this.status = Promise._constants.states.rejected;
        if (this.rejectCallback){
            this.rejectCallback(result);
        }
    },
}

Promise.PromiseThenOverride = function(successCallback){
    // promiseChainThen should have access to 
    var wrapperSuccessCallback = function(succCB){
        return function(){
            try {
                succCB()
            }catch(err){
                // Find the nearest catch callback (reject callback) and pass the error to it
                var head = this.promiseChainObject;
                while(head){
                    if(this.promiseChainObject.rejectCallback){
                        this.promiseChainObject.rejectCallback(err);
                        break;
                    } else {
                        head = this.promiseChainObject.promiseChainObject;
                    }
                }
                if(!head) throw err;
            }
        }
    }
    successCallback = wrapperSuccessCallback(successCallback)
    setTimeout(successCallback, 0)
}

Promise.all = function(promiseArray){
    var totalPromises = promiseArray.length;
    var promisesResolved;
    var promiseResults = [];
    var promiseCRONJ = setInterval(function(){
        try { // try catch to comeout of
            promiseArray.forEach(function(promise, index){
                if(promise.status  == Promise._constants.resolved){
                    promiseResults[index] = promise.resolvedValue;
                } else if(promise.status  == Promise._constants.rejected){
                    clearInterval(promiseCRONJ);
                    throw "One Promise Failled"
                }
            })
        } catch(err){
            
        }
    },10)
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
new Promise (function(resolve, reject){
	setTimeout(function(){
		reject('TIME OUT OVER')
	},2000)
}).catch(function(err){
    console.log('Error Catched');
})

var promiseObj = new Promise(promisyingFn)
promiseObj.then(function(result){
    console.log('SUCCESS CALLBACK EXECUTING');
}) */

var temp = new Promise (function(resolve, reject){
	setTimeout(function(){
		reject('TIME OUT OVER')
	},2000)
}).catch(function(err){
    console.log('Error Catched');
})
