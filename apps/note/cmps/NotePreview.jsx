import {EditLine} from './EditLine.jsx'
export class NotePreview extends React.Component {
    state = {}
    render(){
        const {note,onDeleteNote,onEditNote} = this.props;
        return(
            <section>
                <div className="note-container">
                    <p>{note.info.txt}</p>
                    <EditLine id={note.id} onDeleteNote={onDeleteNote} onEditNote={onEditNote}/>
                </div>
            </section>
        )
    }
}