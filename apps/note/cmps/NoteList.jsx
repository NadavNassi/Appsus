import {NotePreview} from './NotePreview.jsx'
export class NoteList extends React.Component {
    state = {}
    onDelete =()=>{
        noteService.removeNote(this.props.id)
    }
    render(){
        return(
            <section className="notes-container">
                {this.props.notes.map((note,index) =>{
                    return <NotePreview key={index} note={note} onDeleteNote={this.props.onDeleteNote}/>
                })}
            </section>
        )
    }
}