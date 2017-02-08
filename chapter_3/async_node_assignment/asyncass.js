/*Async Node Review
You were close on this assignment.  You'll notice that your regex will currently match any b in the document and replace it with Brainstation.  It should instead
look only at words that start with b/B and replace them with Brainstation. You can try changing your regex to match all words that start with B. 
*/

const fs = require('fs');

fs.readFile("quote.txt", "utf8", (err, data) => {
    if (err) throw err;
   
        console.log(data);
    }
);
// let  replace = require('replace');

// replace({
//   regex: "b",
//   replacement: "Brainstation",
//   paths: ['.'],
//   recursive: true,
//   silent: true,
// });

fs.readFile("quote.txt", "utf8", (err, data) => {
    if (err) throw err;
    // console.log("error")


    fs.writeFile("changed.txt", data.replace(/b/gi, "Brainstation"), (err) => {
        if (err) throw err;
        // console.log("error")
    })
});


fs.readFile("changed.txt", "utf8", (err, data) => {
        if (err) throw err;
        // console.log("error")

        console.log(data);
    });

