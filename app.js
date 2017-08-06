//modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');//parses the arguments
//files
const notes = require('./notes.js');


const argv = yargs.argv;//
var command = argv._[0];



//adding a note
if (command === "add") {
    var addnote = notes.addNote(argv.title, argv.body);
    if (addnote) {
        console.log("Note created!");
        notes.logNote(addnote);
    } else {
        console.log("Note title already taken.")
    }


    //listing a note
} else if (command === "list") {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes!`);
    allNotes.forEach((note) => notes.logNote(note));


    //reading a note
} else if (command === 'read') {
    var readingnote = notes.getNote(argv.title);
    if(readingnote){
        console.log("Note found");
        notes.logNote(readingnote);
    } else {
        console.log("Note not found");
    }

    //deleting a note
} else if (command === 'delete') {
    var noteDeleted = notes.deleteNote(argv.title);
    var deleteMessage = noteDeleted ? 'Note was removed' : 'Note not found';
    console.log(deleteMessage);

    //unknown command
} else {
    console.log("Command not recognized");
}

//node app.js --title name
//node app.js add --title="title" --body="body"
//node app.js read --title="title"
//node app.js delete --title="title"
//node app.js list 
