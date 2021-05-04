const { Link, Route } = ReactRouterDOM;
import { noteService } from "./services/note.service.js";
import { NoteList } from "./cmps/NoteList.jsx";
import { NoteModal } from "./cmps/NoteModal.jsx";

export class NoteApp extends React.Component {
  state = {
    notes: null,
    filter: null,
    selectedNote: null,
  };
  componentDidMount() {
    this.loadNotes();
  }
  loadNotes() {
    noteService.query(this.state.filter).then((notes) => {
      this.setState({ notes });
    });
  }

  onDeleteNote = (noteId)=> {
    noteService.removeNote(noteId);
    this.loadNotes();
  }
  onEditNote = (note,nodeId)=>{
    noteService.editNote(note,nodeId);
    this.loadNotes();
  }
  render() {
    const { notes, filter, selectedNote } = this.state;

    if (!notes) return <div>Loading...</div>;
    return (
      <section className="note-page-container">
        <section className="container">
         
          <NoteList onEditNote={this.onEditNote} onDeleteNote={this.onDeleteNote} notes={notes} />
        </section>
        <Route component={NoteModal} path="/note/add-note" />
        <Link className="add-note" to={`/note/add-note`}>
          <h2>
            <i className="fas fa-plus"></i>
          </h2>
        </Link>
      </section>
    );
  }
}
