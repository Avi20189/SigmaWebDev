// console.log('This is promise');

// let prom1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Yes I am done")
//         resolve("Avinash")
//     },3000)
// })

// prom1.then((a)=>{
//     console.log(a)
// })
// console.log("Process started")
// let prom1 = new Promise((resolve, reject) =>{
//     let a = Math.random();
//     if(a < 0.5) {
//         reject("No random number was supporting you")
//     }
//     else{
//         setTimeout(()=> {
//          console.log("Yes, I am done")
//          resolve("Avi")
//         },5000)
//     }
// })

// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

async function getData() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(455)
        },3500);
    })
}

async function main(){
    console.log("Module loading started");

    console.log("Now, working with another query");

    console.log("Start data loading");
    
    let data = await getData()

    console.log("data received");

    console.log("Ab shuru hoga development")

}

main()
















