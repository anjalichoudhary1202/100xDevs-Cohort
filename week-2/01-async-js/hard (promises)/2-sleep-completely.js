/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const timeBefore = Date.now();
  
    return new Promise(function(resolve) {
  
        for(let i=0;i<10000000000;i++) {
            if(Date.now() === timeBefore + milliseconds) {
                resolve("done");
                break;
            }
        }
    })
  }
  
async function somePromisifyFunction() {
const data = await sleep(1000);
console.log(data);
}

somePromisifyFunction();

module.exports = sleep;
