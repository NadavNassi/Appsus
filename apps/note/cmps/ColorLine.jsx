

 export class ColorLine extends React.Component {
    state = {

    }
    setColorProfile = (ev)=>{
        this.props.changeColorProfile(ev.target.value)
    }
    render(){
        return(
            <section>
                <div className="color-line">
                    <button className="color-btn pink" value='pink' onClick={this.setColorProfile}></button>
                    <button className="color-btn light-orange" value='light-orange' onClick={this.setColorProfile}></button>
                    <button className="color-btn light-yellow" value='light-yellow' onClick={this.setColorProfile}></button>
                    <button className="color-btn light-green" value='light-green' onClick={this.setColorProfile}></button>
                    <button className="color-btn indigo" value='indigo' onClick={this.setColorProfile}></button>
                    <button className="color-btn light-blue" value='light-blue' onClick={this.setColorProfile}></button>
                    <button className="color-btn blue" value='blue' onClick={this.setColorProfile}></button>
                    <button className="color-btn light-purple" value='light-purple' onClick={this.setColorProfile}></button>
                </div>
            </section>
        )
    }
}