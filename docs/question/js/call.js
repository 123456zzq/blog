/**
 * call 改变this指向 参数一个个
 */
Function.prototype.myCall = function(context){
    context = context || window;
    context.fn = this;
    let arg = [...arguments].slice(1);
    let result = context.fn(...arg);
    delete context.fn;
    return result;
}

var numbers = [5, 458 , 120 , -215 ]; 
// Math.max.apply(Math, numbers);   //458    
Math.max.myCall(Math, 5, 458 , 120 , -215); //458

