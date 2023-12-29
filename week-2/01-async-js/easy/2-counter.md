## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


/code

let counter = 1;
for(let i=1;i<=10;i++) {
  setTimeout(()=>{
    console.log(counter);
    counter++;
  },1000*i)
}

































































(Hint: setTimeout)