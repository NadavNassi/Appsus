const { Link, Route } = ReactRouterDOM;
import { mapService } from "./services/note.map.service.js";
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

  onDeleteNote = (noteId) => {
    noteService.removeNote(noteId).then(() => {
      this.loadNotes();
    });
  };
  onEditNote = (note, nodeId) => {
    noteService.editNote(note, nodeId).then(() => {
      this.loadNotes();
    });
  };
  onPinnedNote = (nodeId) => {
    noteService.pinNote(nodeId).then(() => {
      this.loadNotes();
    });
  };
  onAddNote = (note) => {
    noteService.onAddNote(note).then(() => {
      this.loadNotes();
    });
  };
  setMap = (map) => {
    // const searchVal = `address=${map}`;
    //  noteService.mapTypeAmount().then((res) => {
    //   <div id={`map${res}`}></div>;
    //   return mapService.getLocationByVal(searchVal)
    //    .then((res) => {
    //     const lnglat = res[0].geometry.location;
    //     const locationName = res[0].address_components[1].long_name;
    //     mapService.setLocation(lnglat, locationName, res);
    //   });
    // });
  };
  render() {
    const { notes} = this.state;
    if (!notes) return <div>Loading...</div>;
    return (
      <section className="note-page-container">
        <section className="container">
          <NoteList
            setMap={this.setMap}
            onEditNote={this.onEditNote}
            onDeleteNote={this.onDeleteNote}
            onPinnedNote={this.onPinnedNote}
            notes={notes}
          />
        </section>
        <Route
          component={() => <NoteModal onAddNote={this.onAddNote} />}
          path="/note/add-note"
        />
        <Link className="add-note" to={`/note/add-note`}>
          <h2>
            <i className="fas fa-plus"></i>
          </h2>
        </Link>
      </section>
    );
  }
}
