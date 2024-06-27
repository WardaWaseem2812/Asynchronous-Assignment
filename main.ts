// Warda Waseem
// Thursday Morning 9 to 12
console.log("\n \t \t ***Asynchronous Assignment*** ");

/* Question # 1
Write a simple asynchronous TypeScript function fetchGreeting that returns a greeting message after a 2-second delay using setTimeout.*/

console.log("Task 01");
async function fetchGreeting(){
    setTimeout(()=>{
  console.log("Welcome Home!")
   },2000)
}
fetchGreeting()

/* OUTPUT:
Task 01
Welcome Home! -- returns after 2 seconds delay */



/*Question # 2
Write a function simulateTask that simulates a task by logging "Task started", waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.*/

console.log("Task 02");
function simulateTask(){
    console.log("Task started")
    setTimeout(()=>{
  console.log("Task completed") 
   },1000)
}
simulateTask()

/* OUTPUT:
Task 02
Task started
Task completed -- returns after 1 seconds delay */



/* Question # 3
Write a function fetchData that returns a Promise which resolves with the string "Data fetched successfully!" after a delay of 1 second. */

console.log("Task 03");
function fetchData(){
    return new Promise((resolve,reject)=>{  
    setTimeout(()=>{
        resolve("Data fetched successfully!") 
   },1000)
} )
}
fetchData().then((response:any)=>{
    console.log(response)
})

/* OUTPUT:
Task 03
Data fetched successfully! -- returns after 1 seconds delay */



/* Question # 4
Write a function fetchWithError that returns a Promise. It should randomly either resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a delay of 1 second. Handle the rejection using .catch*/

console.log("Task 04");
async function fetchWithError() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        const random =  Math.floor(Math.random() * 100 + 1);
        console.log("Random Number:",random)
        if(random % 2 == 0){
            resolve("Data fetched successfully! -- due to even number")
        }
        else{
            reject("Data fetch failed! -- due to odd number")
        }
    },1000)
})
}
fetchWithError().then((response)=>{console.log(response);})
.catch((error)=>{console.log(error);})

/* OUTPUT:
1st time Result:
Task 04
Random Number: 44
Data fetched successfully! -- due to even number -- returns after 1 seconds delay

2nd time Result:
Task 04
Random Number: 1
Data fetch failed! -- due to odd number -- returns after 1 seconds delay */



/* Question # 5
Write a function executeSequentially that executes two functions fetchData and processData sequentially using Promises, and logs the results in the order they are called. */

console.log("Task 05");
let fetchdata = new Promise((resolve,reject)=>{
    resolve("Data Fetched Successfully")
})
let processData = new Promise((resolve,reject)=>{
    resolve("Data Processed Successfully")
})
async function executeSequentially(){
    let fetch = await fetchdata
    console.log(fetch)
    let process = await processData
    console.log(process)
}
executeSequentially()  

/* OUTPUT:
Task 05
Data Fetched Successfully
Data Processed Successfully */