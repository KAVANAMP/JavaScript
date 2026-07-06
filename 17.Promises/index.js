//Promises - It is an object which is helps to handle asynchronous operation.
/* there are 3 states
1.Pending
2.Fullfilled
3.Rejected
*/


let job=false;
let pro=new Promise((resolve,reject)=>{
    if(job){
        resolve("I got a job")

    }else{
        reject("No still i am searching")
    }
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
.finally(()=>console.log("finally"))

