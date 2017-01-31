const request = require('request');
const cheerio = require('cheerio');
const url0 = "http://www.reddit.com";
const url1 = "http://www.reddit.com/?count=25&after=t3_5r7ps5"
const url2 = "http://www.reddit.com/?count=50&after=t3_5r80l5"

request(url0, function (error, response, body) {
    let str = ""
    let $ = cheerio.load(body),
        text = $('a.title').each(function (index,title){
            console.log(index + ": " + $(title).text());
        });

    str += text

   
        if (error)
            console.log("We’ve encountered an error: " + error);
    }

);

request(url1, function (error, response, body) {
    let str = ""
    let $ = cheerio.load(body),
        text = $('a.title').each(function (index,title){
            console.log(index + ": " + $(title).text());
        });

    str += text

   
        if (error)
            console.log("We’ve encountered an error: " + error);
    }

);

request(url2, function (error, response, body) {
    let str = ""
    let $ = cheerio.load(body),
        text = $('a.title').each(function (index,title){
            console.log(index + ": " + $(title).text());
        });

    str += text

   
        if (error)
            console.log("We’ve encountered an error: " + error);
    }

);



//var request = require("request"),
//   cheerio = require("cheerio"),
//   url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=" + 02888;

// request(url, function (error, response, body) {
//   if (!error) {
//     var $ = cheerio.load(body),
//       temperature = $("[data-variable='temperature'] .wx-value").html();

//     console.log("It’s " + temperature + " degrees Fahrenheit.");
//   } else {
//     console.log("We’ve encountered an error: " + error);
//   }
// });