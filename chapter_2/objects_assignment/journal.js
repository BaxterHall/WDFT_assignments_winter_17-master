// create a journal
// create an entry,each entry should have a title,content and an author
// add an entry to your journal
// display all the entries in your journal

// function journal(title,entry,author) {
//         this.title = title;
//         this.entry = entry;
//         this.author = author;
// } 

// const entry1 = new journal("Hello World","this is a v short journal entry", "Baxter")



// const entry2 = new journal("Hello Darkness, My Old Friend","the days have gotten shorter","Sad Baxter")



// const entry3 = new journal("Always Look on the Brightside of life","the days have gotten longer","Happy Baxter")

// console.log(entry3)

function entry(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
}

function journal() {
    this.log = []
    this.makeEntry = function(title, author, content) {}
}

const entry = new makeEntry(title,author,content);

entry.journal('Hello Darkness,my old friend', 'the days have gotten longer', 'sad Baxter');

console.log(journal)