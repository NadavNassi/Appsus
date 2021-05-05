import { EditLine } from "./EditLine.jsx";
export class NotePreview extends React.Component {
  state = {
    colorProfile: "null",
  };
  componentDidMount() {
   
  }
  changeColorProfile = (color) => {

  };
  render() {
    const { note, onDeleteNote, onEditNote, onPinnedNote } = this.props;
    return (
      <section>
        <div className={`note-container ${this.state.colorProfile}`} ref={this.noteContainer}>
          <p>{note.info.txt}</p>
          <EditLine
            id={note.id}
            onDeleteNote={onDeleteNote}
            changeColorProfile={this.changeColorProfile}
            onPinnedNote={onPinnedNote}
            onEditNote={onEditNote}
          />
        </div>
      </section>
    );
  }
}
