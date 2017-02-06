/*Web Scraping Review
Good job! Looks like you've got a good idea as to how you would go about scraping a page for specific data.  You'll notice that you've repeated yourself
quite a bit by writing out three requests.  You could have written a loop that would have sent all three requests with less code involved.  Something else
you may want to look into is the idea of recursion, which is essentially writing a function that will call itself upon completion.  Concepts like that will
help drastically reduce the amount of code you have to write.
*/

const request = require('request');
const cheerio = require('cheerio');
const url0 = "http://www.reddit.com";
const url1 = "https://www.reddit.com/?count=25&after=t3_5sapnc"  //Remember semicolons after all your declarations.
const url2 = "https://www.reddit.com/?count=50&after=t3_5sbuk3"

request(url0, function (error, response, body) {

    let $ = cheerio.load(body),
        text = $('a.title').each(function (index,title){
            console.log(index + ": " + $(title).text());
        });

 

   
        if (error) //Remember to include curly brackets when you write if statements like this.
            console.log("We’ve encountered an error: " + error);
    }

);

request(url1, function (error, response, body) {
   
    let $ = cheerio.load(body),
        text = $('a.title').each(function (index,title){
            console.log(index + ": " + $(title).text());
        });

    

   
        if (error)
            console.log("We’ve encountered an error: " + error);
    }

);

request(url2, function (error, response, body) {
    
    let $ = cheerio.load(body),
        text = $('a.title').each(function (index,title){
            console.log(index + ": " + $(title).text());
        });

    

   
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