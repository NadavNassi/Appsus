

 export class ColorLine extends React.Component {
    state = {

    }
    setColorProfile = (ev)=>{
        this.props.changeColorProfile(ev.target.value)
    }
    render(){
        const {changeColorProfile} = this.props;
        return(
            <section>
                <div className="color-line">
                    <button className="color-btn pink" value='pink' onClick={this.setColorProfile}></button>
                    <button className="color-btn light-orange" value='light-orange' onClick={this.setColorProfile}></button>
                    <button className="color-btn light-yellow" value='light-yellow' onClick={this.setColorProfile}></button>
                </div>
            </section>
        )
    }
}