/*Object Review
Good job on your constructor functions, looks like you've got a decent grasp on how they interact with eachother.  Looks like you were also able to take 
user inputs and append them to your page, good job! When you're styling your page, try to test it out and see how your dynamic data interacts with your other
elements.  When you have multiple entries on your page the bottom of the last entry will get cut off by your footer.  Also, it looks like you were trying to
give each post a time/date, instead of writing a function to convert your date, try looking into built in Javascript methods to do this for you.  A basic 
way to do this would be Date().toDateString();  Remember to be vigilant about having semicolons after your declarations! Looks good overall!
*/

// create a journal
// create an entry,each entry should have a title,content and an author
// add an entry to your journal
// display all the entries in your journal


function entry(title, content, author, tag) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.tag = tag;
}

function journal() {
    this.log = []
    this.makeEntry = function (title, author, content,tag) {
        const newentry = new entry(title, author, content,tag)
        this.log.push(newentry)
    }
}

const bxtrjournal = new journal();

bxtrjournal.makeEntry();


$('#submit').click(function () {
    let journaltitle = $('#title').val();
    let journalEntry = $('#entry').val();
    let journalAuthor = $('#author').val();
    let journalTag = $('#tag').val();
    let entrystorage = "<div class='styled'>" +
        "<p>" + journaltitle + "</p>" +
        "<p>" + journalEntry + "</p>" +
        "<p>" + journalAuthor + "</p>" +
        "<p>" + journalTag + "</p>"
        "</div>";

    bxtrjournal.makeEntry(journaltitle, journalEntry, journalAuthor, journalTag)
    $('#output').append(entrystorage);
});
console.log(bxtrjournal.log);

function displayTime() {
    let str = "";

    let currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()

    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    str += hours + ":" + minutes + ":" + seconds + " ";
    if(hours > 11){
        str += "PM"
    } else {
        str += "AM"
    }
    return str;
}




// setup html(title/content/author)
// grab 3 values from js thru jquery
//plug into journal & consolelog journallog with 3 values