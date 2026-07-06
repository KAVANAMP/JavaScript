// 1.Promise.resolve - Create an already resolved promises.
Promise.resolve("Hello")
.then((res)=>console.log(res))

// 2.Promise.reject - Create an already rejected promises.
Promise.reject("Bye")
.catch((err)=>console.log(err))

let p1 = Promise.resolve("Maths")
let p2 = Promise.resolve("Physics")
let p3 = Promise.resolve("Chemistry")
let p4 = Promise.reject("Biology")


// 3.Promise.all - wait for all promises to complete,if 1 promise fails it immediately rejects.
Promise.all([p1,p2,p3])
.then((res)=>console.log(res))

// 4.Promise.allSettled - wait for all promises to complete(either resolve or rejects).
Promise.allSettled([p1,p2,p3,p4])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))

// 5.Promise.any - Anyone promise should satisfied.
Promise.any([p1,p4])
.then((res)=>console.log(res))

// 6.Promise.race - Returns the result of 1st promise that settles(either resolve or reject).
let p11= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("second person");
        
    },2000)
})
let p22 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("first person");
        
    },3000)
})
Promise.race([p11,p22])
.then((res)=>console.log(res))