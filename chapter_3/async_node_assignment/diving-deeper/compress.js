
const zlib = require('zlib')
const gzip = zlib.createGzip();
const fs = require('fs');

const input = fs.createReadStream('casper.txt');
const output = fs.createWriteStream('casper.txt.gz');

input.pipe(gzip).pipe(output);


const input2 =  fs.createReadStream('test2.txt');
const output2 = fs.createWriteStream('test2.txt.gz');

input2.pipe(gzip).pipe(output2);


const input3 =  fs.createReadStream('xwing.txt');
const output3 = fs.createWriteStream('xwing.txt.gz');

input3.pipe(gzip).pipe(output3);

const decompress = require('decompress');

decompress('casper.txt.gz').then (files =>{
    console.log('done')
});

decompress('test2.tst.gz').then (files => {
    console.log("test2 decompressed")
});

decompress('xwing.txt.gz').then (files => {
    console.log("x-wing decompressed") 
});