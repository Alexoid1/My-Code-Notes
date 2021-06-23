const form= document.querySelector('form');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');


 


let rawdata = fs. readFileSync(path.resolve(__dirname, 'tasks.json'));
let student = JSON.parse(rawdata);
let notes = [...student];
form.addEventListener('submit', e => {
    e.preventDefault();
    const title = document.getElementById('noteTitle').value;
    const tech = document.getElementById('noteTech').value;
    const use = document.getElementById('noteUse').value;
    const description = document.getElementById('noteDescription').value;
    const search = document.getElementById('noteSearch').value;
    const type = document.getElementById('noteType').value;
    var hexstring = crypto.randomBytes(16).toString("hex");
    const newNote = {
        "_id": hexstring,
        "title": title,
        "tech": tech,
        "use": use,
        "description": description,
        "search":search,
        "type":type
    };
    notes.push(newNote);
    let mynotes=JSON.stringify(notes)
    fs.writeFileSync(path.resolve(__dirname, 'tasks.json'), mynotes);
})
