// accidentaly used gzip instead of creating my own app........
const zlib = require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');
 

const inp1 = fs.createReadStream('casper.txt');
const out1 = fs.createWriteStream('casper.txt.gz');


inp1.pipe(zlib.createGzip()).pipe(out1);

out1.on('close', function(){
  const inp2 = fs.createReadStream('casper.txt.gz');
  const out2 = fs.createWriteStream('uncasper.txt');
inp2.pipe(zlib.createGunzip()).pipe(out2);
});

const inp3 = fs.createReadStream('text2.txt');
const out3 = fs.createWriteStream('text2.txt.gz');

inp3.pipe(zlib.createGzip()).pipe(out3);

out3.on('close', function() {
    const inp4 = fs.createReadStream('text2.txt.gz');
    const out4 = fs.createWriteStream('untext2.txt');
    inp4.pipe(zlib.createGunzip()).pipe(out4);

});

const inp5 = fs.createReadStream('xwing.txt');
const out5 = fs.createWriteStream('xwing.txt.gz');

inp5.pipe(zlib.createGzip()).pipe(out5);

out5.on('close', function() {
    const inp6 = fs.createReadStream('xwing.txt.gz');
    const out6 = fs.createReadStream('unxwing.txt');
    inp6.pipe(createGzip()).pipe(out6);

})

