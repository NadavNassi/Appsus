import { storageService } from "../../../services/storage/storage-service.js"
import {notes} from "./storage/notes.js"
export const noteService = { query, onAddNote,removeNote }
const KEY = 'notes';

var gNotes = storageService.loadFromStorage(KEY) || _loadNotesToStorage().then(res => res) 


function query() {
    return Promise.resolve(gNotes)
}

function removeNote(id) {
    const idx = gNotes.findIndex(note =>note.id === id)
    gNotes.splice(idx, 1);
    _saveBooksToStorage();
}
function onAddNote(note) {
    const newNote = {
        type: note.type,
        isPinned: false,
        info: {
            txt: note.txt
        }
    }
    gNotes.push(newNote);
    _saveBooksToStorage();
}


function _saveBooksToStorage() {
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

