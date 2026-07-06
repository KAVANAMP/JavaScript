//Polyfill - A Polyfill is JavaScript code that provides modern functionality in older browsers that do not support a particular feature.
let a =[1,2,3,4,5]

let b =a.map((item,index)=>item*2)
console.log(b);

Array.prototype.myMap=function(callback){
    let result=[]
    for(let i=0;i<this.length;i++){
        result.push(callback(this[i],i))
    }
    return result
}
let c =a.myMap((item,index)=>item*3)
console.log(c);
