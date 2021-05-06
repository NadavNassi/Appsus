const { Link, Route } = ReactRouterDOM;
import { noteService } from "./services/note.service.js";
import { NoteList } from "./cmps/NoteList.jsx";
import { NoteModal } from "./cmps/NoteModal.jsx";
import { NoteFilter } from "./cmps/NoteFilter.jsx";

export class NoteApp extends React.Component {
  state = {
    notes: null,
    pinnedNotes:null,
    filter: null,
    selectedNote: null,
  };
  componentDidMount() {
    this.loadNotes();
  }
  loadNotes() {
    noteService.query(this.state.filter).then((notes) => {
        console.log(notes);
      this.setState({ notes:notes.gNotes,pinnedNotes:notes.gPinnedNotes });
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
      console.log('pinned')
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
    const { notes,pinnedNotes} = this.state;
    if (!notes) return <div>Loading...</div>;

    return (
      <section className="note-page-container">
        <section className="container">
            <section className="note-filter-section">
                <NoteFilter/>
            </section>
        <section className="pinned-container">
            <h2>Pinned Notes:</h2>
        { pinnedNotes && 
                <NoteList
                setMap={this.setMap}
                onEditNote={this.onEditNote}
                onDeleteNote={this.onDeleteNote}
                onPinnedNote={this.onPinnedNote}
                notes={pinnedNotes}
              />
            }
          
          </section>
            <section className="unpinned-container">
                <h2>UnPinned notes</h2>
          <NoteList
            setMap={this.setMap}
            onEditNote={this.onEditNote}
            onDeleteNote={this.onDeleteNote}
            onPinnedNote={this.onPinnedNote}
            notes={notes}
          />
          </section>
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
