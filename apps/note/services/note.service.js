import { storageService } from "../../../services/storage/storage-service.js"
import { utilService } from "../../../services/util-service.js"

import { notes } from "./storage/notes.js"
export const noteService = { query, onAddNote, removeNote, editNote, pinNote,mapTypeAmount }
const KEY = 'notes';

var gNotes = storageService.loadFromStorage(KEY) || _loadNotesToStorage().then(res => res)


function query() {
    return Promise.resolve(gNotes)
}

function removeNote(id) {
    const idx = gNotes.findIndex(note => note.id === id)
    gNotes.splice(idx, 1);
    _saveNotesToStorage();
    return Promise.resolve();
}
function onAddNote(note) {
    const newNote = {
        id: utilService.makeId(),
        type: note.type,
        color: null,
        isPinned: false,
        info: {
            txt: note.txt,
            img: note.img,
            video: note.video,
            audio: note.audio,
            list: note.list,
            map: note.map
        }
    }
    pinLocation(newNote);
    return Promise.resolve();
}

function mapTypeAmount(){
    const notes = gNotes.filter(note => note.type === 'NoteMap');
   
    return Promise.resolve(notes.length + 1);
}

function getNoteById(noteId) {
    var note = gNotes.find(note => noteId === note.id)
    return Promise.resolve(note)
}

function editNote(newNote, noteId) {
    return getNoteById(noteId)
        .then((note) => {
            note.info.txt = (newNote.txt)? newNote.txt : note.info.txt;
            note.type = (newNote.type)? newNote.type : newNote.type;
            note.info.img = (newNote.img)? newNote.img : note.info.img;
            note.info.video = (newNote.video)? newNote.video : note.info.video;
            note.info.audio = (newNote.audio)? newNote.audio : note.info.audio;
            note.info.list = (newNote.list)? newNote.list : note.info.list;
            note.color = newNote.color;
            _saveNotesToStorage();
            return Promise.resolve();
        })
        .catch((err) => {
            console.log(err);
        })
}
function pinLocation(newNote) {
    const pinNotes = gNotes.filter(note => note.isPinned)
    const unPinnedNotes = gNotes.filter(note => !note.isPinned)
    unPinnedNotes.unshift(newNote);
    gNotes = pinNotes.concat(unPinnedNotes);
    // console.log(gNotes)
    _saveNotesToStorage();
}
function pinNote(noteId) {
    const idx = gNotes.findIndex(note => note.id === noteId)
    return getNoteById(noteId)
        .then((note) => {
            note.isPinned = !note.isPinned;
            const newNote = note;
            gNotes.splice(idx, 1);
            if (note.isPinned) {
                gNotes.unshift(newNote);
            } else {
                gNotes.push(newNote);
            }
            _saveNotesToStorage();
            return Promise.resolve();
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

