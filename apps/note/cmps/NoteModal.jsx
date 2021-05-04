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
     noteState: null
  };

  closeModal = () => {
    this.props.history.push(`/note`);
    this.handleStateChange();
  };
  onOutSideClick = (ev) => {
    if (ev.target.classList.contains("modal-container")) {
      this.props.history.push(`/note`);
      this.handleStateChange();
    }
  };
  handleStateChange = () => {
    if(this.state.noteState === 'Add'){
      noteService.onAddNote(this.state.note);
    }else{
      this.props.onEditNote(this.state.note,this.props.match.params.id)
    }
  }
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

  componentDidMount() {
    if(this.props.match.params.id){
      this.setState({noteState:'Edit'})
    }else{
      this.setState({noteState:'Add'})
    }
  }

  setNoteState = (id) =>{
    let str = '';
    if(id){
      str = 'Edit Note'
    }else{
      str = 'Add Note'
    }
    return str;
  }


  render() {
    const {id} = this.props.match.params
    return (
      <div onClick={this.onOutSideClick} className="modal-container">
        <div className="modal ">
          <span onClick={this.closeModal} className="close-modal">
            x
          </span>
          <h1>{this.setNoteState(id)}</h1>
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
