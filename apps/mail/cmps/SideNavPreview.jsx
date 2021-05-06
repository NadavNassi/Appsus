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

    // onMarkerLi = (ev)=> {
    //     currentLi = ev.target;
    //     ev.target.classList.add('active-li')
    // }
    render() {
        const { label, onLabelSelect } = this.props
        const { unreadMailCount } = this.state
        return (
            <li onClick={(ev) => onLabelSelect(label)} className={label}>{label} {label === 'Inbox' && unreadMailCount > 0 && `(${unreadMailCount})`}</li>
        )
    }
}