import {EditLine} from './EditLine.jsx'
export class NotePreview extends React.Component {
    state = {}
    render(){
        const {note} = this.props;
        return(
            <section>
                <div className="note-container">
                    <p>{note.info.txt}</p>
                    <EditLine/>
                </div>
            </section>
        )
    }
}