const form= document.querySelector('form');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');


 


let rawdata = fs. readFileSync(path.resolve(__dirname, 'notes.json'));
let student = JSON.parse(rawdata);
let notes = [...student];
form.addEventListener('submit', e => {
    e.preventDefault();
    let regex2=new RegExp('\n','gi');
    
    let title = document.getElementById('noteTitle').value;
    let tech = document.getElementById('noteTech').value;
    let use = document.getElementById('noteUse').value.replace(regex2,'<br>');
    let description = document.getElementById('noteDescription').value;
    let search = document.getElementById('noteSearch').value;
    let type = document.getElementById('noteType').value;
    let form=document.getElementById('form');
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
    fs.writeFileSync(path.resolve(__dirname, 'notes.json'), mynotes);
    form.reset();

})
