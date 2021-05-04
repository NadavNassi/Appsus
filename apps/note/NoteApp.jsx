const { Link, Route } = ReactRouterDOM;
import { noteService } from "./services/note.service.js";
import { NoteList } from "./cmps/NoteList.jsx";
import { NoteModal } from "./cmps/NoteModal.jsx";

export class NoteApp extends React.Component {
  state = {
    notes: null,
    filter: null,
    selectedNote: null
  };
  componentDidMount() {
    this.loadNotes();
  }
  loadNotes() {
    noteService.query(this.state.filter).then((notes) => {
      this.setState({ notes });
    });
  }

  onDeleteNote = (noteId) => {
    noteService.removeNote(noteId).then(()=>{
        this.loadNotes();
    })
  };
  onEditNote = (note, nodeId) => {
    noteService.editNote(note, nodeId).then(()=>{
        this.loadNotes();
    })
  };
  onPinnedNote = (nodeId) => {
    noteService.pinNote(nodeId).then(()=>{
        this.loadNotes();
    })
  }
  onAddNote = (note)=>{
      noteService.onAddNote(note).then(()=>{
          this.loadNotes();
      })
  }
  render() {
    const { notes, filter, selectedNote  } = this.state;
    if (!notes) return <div>Loading...</div>;
    return (
      <section className="note-page-container">
        <section className="container">
          <NoteList
            onEditNote={this.onEditNote}
            onDeleteNote={this.onDeleteNote}
            onPinnedNote={this.onPinnedNote}
            notes={notes}
          />
        </section>
        <Route component={()=><NoteModal onAddNote={this.onAddNote}/>} path="/note/add-note" />
        <Link className="add-note" to={`/note/add-note`}>
          <h2>
            <i className="fas fa-plus"></i>
          </h2>
        </Link>
      </section>
    );
  }
}
