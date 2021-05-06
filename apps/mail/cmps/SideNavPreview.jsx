import { eventBusService } from '../../../services/event.bus.service.js';

export class SideNavPreview extends React.Component {
    state = {
        unreadMailCount: 0,
        li:null
    }
    currentLi = null;
    removeEvent;
    componentDidMount() {
        this.removeEvent = eventBusService.on(
            'mail-count',
            (unreadMailCount) => {
                this.setState({ unreadMailCount });
            }
        );
    }
    componentWillUnmount() {
        this.removeEvent()
    }

<<<<<<< HEAD
    // onMarkerLi = (ev)=> {
    //     currentLi = ev.target;
    //     ev.target.classList.add('active-li')
    // }
=======
    onLabelClick = (label) => {
        this.props.onLabelSelect(label)
        this.props.setActiveLabel(label)
    }


>>>>>>> 759247d9838eb6aa6e651ebd2d02b74192cc744a
    render() {
        const { label, onLabelSelect, activeLabel, setActiveLabel } = this.props
        const { unreadMailCount } = this.state
        return (
<<<<<<< HEAD
            <li onClick={(ev) => onLabelSelect(label)} className={label}>{label} {label === 'Inbox' && unreadMailCount > 0 && `(${unreadMailCount})`}</li>
=======
            <li onClick={() => this.onLabelClick(label)} className={`${label} ${activeLabel === label && 'active'}`}>{label} {label === 'Inbox' && unreadMailCount > 0 && `(${unreadMailCount})`}</li>
>>>>>>> 759247d9838eb6aa6e651ebd2d02b74192cc744a
        )
    }
}