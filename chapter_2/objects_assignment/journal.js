// create a journal
// create an entry,each entry should have a title,content and an author
// add an entry to your journal
// display all the entries in your journal


function entry(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
}

function journal() {
    this.log = []
    this.makeEntry = function (title, author, content) {
        const newentry = new entry(title, author, content)
        this.log.push(newentry)
    }
}

const bxtrjournal = new journal();

bxtrjournal.makeEntry();


$('#submit').click(function () {
    let journaltitle = $('#title').val();
    let journalEntry = $('#entry').val();
    let journalAuthor = $('#author').val();
    let entrystorage = "<div class='styled'>" +
        "<p>" + journaltitle + "</p>" +
        "<p>" + journalEntry + "</p>" +
        "<p>" + journalAuthor + "</p>" +
        "</div>";

    bxtrjournal.makeEntry(journaltitle, journalEntry, journalAuthor)
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