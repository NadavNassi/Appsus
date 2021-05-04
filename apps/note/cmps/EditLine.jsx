
const { Route,Link,withRouter } = ReactRouterDOM;

import {NoteModal} from './NoteModal.jsx'; 
 class _EditLine extends React.Component {
    state = {

    }


    render(){
        return(
            <section>
                <div className="edit-line-container">
                    <button className="note-btn"><i className="fas fa-thumbtack"></i></button>
                    <button className="note-btn"><i className="fas fa-palette"></i></button>
                    <Route component={()=><NoteModal onEditNote={this.props.onEditNote}/>} path="/note/edit/:id" />
                    <Link className="note-btn" to={`/note/edit/${this.props.id}`} ><i className="fas fa-edit"></i></Link>
                    <button onClick={() =>{
                        this.props.onDeleteNote(this.props.id)
                    }} className="note-btn"><i className="fas fa-trash-alt"></i></button>
                </div>
            </section>
        )
    }
}

export const EditLine = withRouter(_EditLine)