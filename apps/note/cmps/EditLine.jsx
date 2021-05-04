export class EditLine extends React.Component {
    state = {}
    render(){
        return(
            <section>
                <div className="edit-line-container">
                    <button className="note-btn"><i className="fas fa-thumbtack"></i></button>
                    <button className="note-btn"><i className="fas fa-palette"></i></button>
                    <button className="note-btn"><i className="fas fa-edit"></i></button>
                    <button className="note-btn"><i className="fas fa-trash-alt"></i></button>
                </div>
            </section>
        )
    }
}