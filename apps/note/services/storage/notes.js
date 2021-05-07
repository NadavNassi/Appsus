import {utilService} from '../../../../services/util-service.js'
export const notes = [
    
    {
        id:utilService.makeId(),
        type: "NoteVideo",
        isPinned: false,
        color:null,
        info: {
            video: "https://www.youtube.com/watch?v=z9eoubnO-pE&t=199s"
        }
    }, {
        id:utilService.makeId(),
        type: "NoteText",
        isPinned: false,
        color:null,
        info: {
            txt: "Nadav likes css very much"
        }
    },{
        id:utilService.makeId(),
        type: "NoteImg",
        isPinned: false,
        color:null,
        info: {
            img: "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg"
        }
    },{
        id:utilService.makeId(),
        type: "NoteMap",
        isPinned: false,
        color:null,
        info: {
            map: "Tel Aviv!"
        }
    },{
        id:utilService.makeId(),
        type: "NoteMap",
        isPinned: false,
        color:null,
        info: {
            map: "Tel Aviv!"
        }
    },{
        id:utilService.makeId(),
        type: "NoteMap",
        isPinned: false,
        color:null,
        info: {
            map: "New york"
        }
    },{
        id:utilService.makeId(),
        type: "NoteImg",
        isPinned: false,
        color:null,
        info: {
            img: "https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?cs=srgb&dl=pexels-pixabay-207962.jpg&fm=jpg"
        }
    }
    ,{
        id:utilService.makeId(),
        type: "NoteTodos",
        isPinned: false,
        color:null,
        info: {
            list: "Matan, Nadav,Harel,Ilai"
        }
    }
    ,{
        id:utilService.makeId(),
        type: "NoteAudio",
        isPinned: false,
        color:null,
        info: {
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        }
    },

    
];