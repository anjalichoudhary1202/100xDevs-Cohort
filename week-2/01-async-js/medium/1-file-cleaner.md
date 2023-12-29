## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```


//code 

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data) {
  if (err) throw err;
  console.log(data);
  let fileData = data.replace(/\s+/g , " ");
  fs.writeFile("a.txt", fileData, function(err,data) {
    console.log("File updated");
  })
});
