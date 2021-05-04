
import {NotePreview} from './NotePreview.jsx'
export class NoteList extends React.Component {
    state = {}
 
    render(){
        const {notes,onDeleteNote,onEditNote,onPinnedNote} = this.props
        return(
            <section className="notes-container">
                {notes.map((note) =>{
            return <NotePreview key={note.id} note={note} onDeleteNote={onDeleteNote} onPinnedNote={onPinnedNote}  onEditNote={onEditNote}/>
                })}
            </section>
        )
    }
}