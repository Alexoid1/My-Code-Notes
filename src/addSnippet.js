const form= document.querySelector('#formS');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');


 


let rawdata = fs. readFileSync(path.resolve(__dirname, 'snippets.json'));
let student = JSON.parse(rawdata);
let notes = [...student];
form.addEventListener('submit', e => {
    e.preventDefault();
    let regex2=new RegExp('\n','gi');
    let regex3=/(")/g;
    let regex4=/(<)/g;
    let regex5=/(>)/g;
    
    let title = document.getElementById('snippetTitle').value;
    let tech = document.getElementById('snippetTech').value;
    let use = document.getElementById('snippetUse').value.replace(regex2,'<br>')
    console.log(use)
    use.replace(regex3, '\"');
    use.replace(regex4, '\<');
    use.replace(regex5,'\>');
    console.log(use)
    let description = document.getElementById('snippetDescription').value;
    let search = document.getElementById('snippetSearch').value;
    let formS=document.getElementById('formS');
    var hexstring = crypto.randomBytes(16).toString("hex");
    
    const newNote = {
        "_id": hexstring,
        "title": title,
        "tech": tech,
        "use": use,
        "description": description,
        "search":search,
    };
    notes.push(newNote);
    let mynotes=JSON.stringify(notes)
    fs.writeFileSync(path.resolve(__dirname, 'snippets.json'), mynotes);
    formS.reset();
})