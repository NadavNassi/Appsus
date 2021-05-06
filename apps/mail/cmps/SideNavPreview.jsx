import { eventBusService } from '../../../services/event.bus.service.js';

export class SideNavPreview extends React.Component {
    state = {
        unreadMailCount: 0,
    }
    removeEvent;
    componentDidMount() {
        this.removeEvent = eventBusService.on(
            'mail-count',
            ({ unreadMailCount }) => {
                this.setState({ unreadMailCount });
            }
        );
    }
    componentWillUnmount() {
        this.removeEvent()
    }
    render() {
        const { label, onLabelSelect } = this.props
        const { unreadMailCount } = this.state
        return (
            <li onClick={() => onLabelSelect(label)} className={label}>{label} {label === 'Inbox' && `(${unreadMailCount})`}</li>
        )
    }
}