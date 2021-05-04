import {noteService} from './services/note.service.js'
import {NoteList} from './cmps/NoteList.jsx'

export class NoteApp extends React.Component {
    state = {
        notes: null,
        filter: null,
        selectedNote: null
    }
    componentDidMount() {
        this.loadNotes();
      }
    loadNotes() {
        noteService.query(this.state.filter).then((notes) => {
          this.setState({ notes });
        });
      }
    render(){
    const { notes, filter, selectedNote } = this.state;

        if(!notes) return <div>Loading...</div>;
        return(
            <section className="container">
                <NoteList  notes={notes}/>
            </section>
        )
    }
}