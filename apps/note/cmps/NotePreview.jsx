
import { EditLine } from "./EditLine.jsx";
export class NotePreview extends React.Component {
  state = {
    colorProfile: null,
  };
  componentDidMount() {
    this.setState({ colorProfile: this.props.note.color });
  }

  changeColorProfile = (color) => {
    const { note, onEditNote, } = this.props;
    note.color = color;
    onEditNote(note,note.id)
    this.setState({ colorProfile: color });
  };
  setNoteContent = ()=>{
    const { note}  = this.props;
    switch(note.type){
      case 'NoteText':
         return <p>{note.info.txt}</p>;
        case 'NoteImg':
         return <img src={note.info.img} alt=""/>;
        case 'NoteVideo':
          return this.embedYoutubeVideo(note.info.video)
          case 'NoteAudio':
          return this.setAudio(note.info.audio)
          case 'NoteTodos':
          return <ul>{this.setList(note.info.list)}</ul>
          case 'NoteMap':
          return this.props.setMap(note.info.map)
           
    }
}

  setList = (list) => {
   return list.split(',').map((sentence,index)=>{
     return <li key={index} className="list-todos cursor-pointer" onClick={this.lineThrough}>{sentence}</li>;
    })
  }
  setAudio = (audio) => {
  let str = <audio className="audio-container" controls src={audio} type="audio/mpeg"></audio>;
  return str;
  }

  embedYoutubeVideo = (video) => {
    let str = 'https://www.youtube.com/embed/'+ video.split('=')[1]
   return <iframe width="100%" src={str} frameBorder="0" allowFullScreen></iframe>
  }
  lineThrough = (ev) =>{
    ev.target.classList.toggle('line-through');
  }
  render() {
    const { note, onDeleteNote, onEditNote, onPinnedNote } = this.props;
    return (
      <section>
        <div className={`note-container ${this.state.colorProfile}`} >
          {this.setNoteContent()}
          <EditLine
            note={note}
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
