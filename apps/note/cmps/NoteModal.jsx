const { withRouter } = ReactRouterDOM;
import { utilService } from "../../../services/util-service.js";
import { noteService } from "../services/note.service.js";

class _NoteModal extends React.Component {
  state = {
    note: {
      type: "NoteText",
      txt: null,
      createdAt: Date.now(),
    },
  };

  closeModal = () => {
    this.props.history.push(`/note`);
    noteService.onAddNote(this.state.note);
  };
  onOutSideClick = (ev) => {
    if (ev.target.classList.contains("modal-container")) {
      this.props.history.push(`/note`);
      noteService.onAddNote(this.state.note);
    }
  };
  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === "radio" ? +target.value : target.value;
    this.setState((prevState) => ({
      note: {
        ...prevState.note,
        [field]: value,
      },
    }));
  };


  render() {
    return (
      <div onClick={this.onOutSideClick} className="modal-container">
        <div className="modal ">
          <span onClick={this.closeModal} className="close-modal">
            x
          </span>
            <h2>What it's on your mind?</h2>
            <input
              type="text"
              id="name"
              name="txt"
              onChange={this.handleChange}
              className="note-input"
            />
        </div>
      </div>
    );
  }
}

export const NoteModal = withRouter(_NoteModal);
