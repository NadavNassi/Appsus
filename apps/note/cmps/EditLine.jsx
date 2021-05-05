
const { Route,Link,withRouter } = ReactRouterDOM;
import {ColorLine} from './ColorLine.jsx';
import {NoteModal} from './NoteModal.jsx'; 
 class _EditLine extends React.Component {
    state = {
        ColorLineContainer: null,
        isPinned: false
    }
    componentDidMount() {
        this.setState({isPinned:this.props.note.isPinned})
    }

    changeColorLine = ()=>{
        this.setState({ColorLineContainer: !this.state.ColorLineContainer})
    }
    pinnedColor = ()=>{
        this.setState({isPinned:!this.props.note.isPinned})
    }
    render(){
        const {onPinnedNote,onDeleteNote,onEditNote,changeColorProfile,id} = this.props;
        
        return(
            <section>
                <div className="edit-line-container">
                    <button className={`note-btn `} onClick={(ev)=>{
                         ev.target.classList.toggle('note-toggle-btn'); 
                        onPinnedNote(id)
                    }    
                    }><i className={`fas fa-thumbtack`}></i></button>
                    <button className={`note-btn`} onClick={(ev)=>{
                        ev.target.classList.toggle('note-toggle-btn');                        
                           this.changeColorLine();
                    }}><i className="fas fa-palette"></i></button>
                    <Route component={()=><NoteModal onEditNote={onEditNote}/>} path="/note/edit/:id" />
                    <Link className="note-btn" to={`/note/edit/${id}`} ><i className="fas fa-edit"></i></Link>
                    <button onClick={(ev) =>{
                         ev.target.classList.toggle('note-toggle-btn'); 
                        onDeleteNote(id)
                        
                    }} className="note-btn"><i className="fas fa-trash-alt"></i></button>
                </div>
                {(this.state.ColorLineContainer) && <ColorLine changeColorProfile={changeColorProfile}/>}
            </section>
        )
    }
}

export const EditLine = withRouter(_EditLine)