import {EditLine} from './EditLine.jsx'
export class NotePreview extends React.Component {
    state = {}
    render(){
        const {note,onDeleteNote,onEditNote,onPinnedNote} = this.props;
        return(
            <section>
                <div className="note-container">
                    <p>{note.info.txt}</p>
                    <EditLine id={note.id} onDeleteNote={onDeleteNote} onPinnedNote={onPinnedNote} onEditNote={onEditNote}/>
                </div>
            </section>
        )
    }
}