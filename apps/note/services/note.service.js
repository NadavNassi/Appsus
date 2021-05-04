import { storageService } from "../../../services/storage/storage-service.js"
import {utilService} from "../../../services/util-service.js"

import {notes} from "./storage/notes.js"
export const noteService = { query, onAddNote,removeNote ,editNote}
const KEY = 'notes';

var gNotes = storageService.loadFromStorage(KEY) || _loadNotesToStorage().then(res => res) 


function query() {
    return Promise.resolve(gNotes)
}

function removeNote(id) {
    const idx = gNotes.findIndex(note =>note.id === id)
    gNotes.splice(idx, 1);
    _saveNotesToStorage();
}
function onAddNote(note) {
    const newNote = {
        id:utilService.makeId(),
        type: note.type,
        isPinned: false,
        info: {
            txt: note.txt
        }
    }
    gNotes.push(newNote);
    _saveNotesToStorage();
}

function getNoteById(noteId) {
    var note = gNotes.find((note) => {
        return noteId === note.id
    })
    console.log(note)
    return Promise.resolve(note)
}

function editNote(newNote,noteId){
    getNoteById(noteId)
    .then((note) => {
        note.info.txt = newNote.txt;
        _saveNotesToStorage();
    })
    .catch((err) => {
        console.log(err);
    })

}


function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gNotes);
    return gNotes;
}

function _loadNotesToStorage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            storageService.saveToStorage(KEY, notes);
            return resolve(notes);
        }, 2000)
    })
}

