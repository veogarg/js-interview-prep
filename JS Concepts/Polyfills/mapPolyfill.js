/**
 * Array.map(callbackFunction) traverse over an array an return a modified array based on the callback function
 * callbackFunction(currentItem, index, originalArray) takes these three arguments
 */
const arr= [1,2,3,4];
const transformedData = arr.map(item=>item*item);
console.log("transformedData-->>",transformedData);

Array.prototype.myMap = function(callbackFunc){
    const context = this;
    // console.log('context->',context);
    const modifiedArr = [];
    for(let i=0; i<context.length; i++){
        modifiedArr.push(callbackFunc(context[i],i, context))
    }
    return modifiedArr
}
const updatedARR = arr.myMap((item,index, ar)=>{
   return item*(index+1)
});
console.log("updatedARR-->>",updatedARR);
