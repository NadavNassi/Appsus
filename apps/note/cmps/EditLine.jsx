
const { Route,Link,withRouter } = ReactRouterDOM;

import {NoteModal} from './NoteModal.jsx'; 
 class _EditLine extends React.Component {
    state = {

    }
 
    render(){
        const {onPinnedNote,onDeleteNote,onEditNote,id} = this.props;
        
        return(
            <section>
                <div className="edit-line-container">
                    <button className={`note-btn `} onClick={()=>{
                        onPinnedNote(id)
                    }    
                    }><i className="fas fa-thumbtack"></i></button>
                    <button className="note-btn"><i className="fas fa-palette"></i></button>
                    <Route component={()=><NoteModal onEditNote={onEditNote}/>} path="/note/edit/:id" />
                    <Link className="note-btn" to={`/note/edit/${id}`} ><i className="fas fa-edit"></i></Link>
                    <button onClick={() =>{
                        onDeleteNote(id)
                    }} className="note-btn"><i className="fas fa-trash-alt"></i></button>
                </div>
            </section>
        )
    }
}

export const EditLine = withRouter(_EditLine)