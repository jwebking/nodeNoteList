//module
const fs = require('fs');


//getting all the notes
var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};



//saving a new note
var saveNotes = (savednotes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(savednotes));
};



// adding a new note to the list
var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title: title,
        body: body
    };
    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    })

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);//creates new file and updates the notes.json file and note will sit inside
        return note;
    }
};



//reading all the notes
var getAll = () => {
    console.log('Getting all notes');
    return fetchNotes();
};



//deleting a note
var deleteNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;

};



//retrieving a note
var getNote = (title) => {
    var gotnotes = fetchNotes();
    var filteredNotes = gotnotes.filter((note) => note.title === title);
    return filteredNotes[0];
    console.log(`Getting ${note.title}`);
}


//logging out all the notes
var logNote = (note) => {
    console.log("----");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};



module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    deleteNote: deleteNote,
    logNote: logNote
};

