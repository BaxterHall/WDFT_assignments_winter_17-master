/*Web API Review
Nice job on this assignment.  You've parsed data.body three times when really you only needed to do it once.  From there you can access each value in the object
the same way you've done, but all from the same variable instead of tZ, temp, and sum.  Also you'll notice that when you console log the data you get back, it's 
returning data in the imperial scale instead of metric, there may have been something in the DarkSky API documentation to change that.
*/

//instal npm and define their requirements

const https = require('https'); //Try not to require modules that you aren't using in your code.
const cheerio = require('cheerio');
const request = require('request');

let url = 'https://api.darksky.net/forecast/7a0b839388780c4658deeebc07beb7e3/43.700,-79.5667';

request(url, function(error,data) {
   //collect data from API
    let $ = cheerio.load(data);
    let tZ = JSON.parse(data.body);
    let temp = JSON.parse(data.body);
    let sum = JSON.parse(data.body)   // Remember to include semicolons after your declarations!
    //define data in a string 
    //specifiy 'directory' of desired data in string
    // console log variable with directory location
    console.log('Current Weather in ' + tZ.timezone +
                '\n - temperature ' + temp.currently.temperature + ' degrees Celcius' +
                '\n - summary ' + sum.currently.summary) 
              
     

        
         if (error) // Remember to define the scope of if statements like this using {} curly brackets.
            console.log("We’ve encountered an error: " + error);
});









