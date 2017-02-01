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

