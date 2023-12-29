## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.


//code

const fs = require("fs");

let fileData = fs.readFileSync("a.txt", "utf-8");
const data = "Hi this is the written file";

fs.writeFile("a.txt",fileData + "  " + data,"utf-8",(err)=>{
  console.log(fs.readFileSync("a.txt","utf-8"));
})
