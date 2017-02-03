//instal npm and define their requirements

const https = require('https');
const cheerio = require('cheerio');
const request = require('request');

let url = 'https://api.darksky.net/forecast/7a0b839388780c4658deeebc07beb7e3/43.700,-79.5667';

request(url, function(error,data) {
   //collect data from API
    let $ = cheerio.load(data);
    let tZ = JSON.parse(data.body);
    let temp = JSON.parse(data.body);
    let sum = JSON.parse(data.body)
    //define data in a string 
    //specifiy 'directory' of desired data in string
    // console log variable with directory location
    console.log('Current Weather in ' + tZ.timezone +
                '\n - temperature ' + temp.currently.temperature + ' degrees Celcius' +
                '\n - summary ' + sum.currently.summary) 
              
     

        
         if (error)
            console.log("We’ve encountered an error: " + error);
});









