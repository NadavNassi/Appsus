import { eventBusService } from '../../../services/event.bus.service.js';

export class SideNavPreview extends React.Component {
    state = {
        unreadMailCount: 0
    }
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

    onLabelClick = (label) => {
        this.props.onLabelSelect(label)
        this.props.setActiveLabel(label)
    }


    render() {
        const { label, activeLabel } = this.props
        const { unreadMailCount } = this.state
        return (
            <li onClick={() => this.onLabelClick(label)} className={`${label} ${activeLabel === label && 'active'}`}>{label} {label === 'Inbox' && unreadMailCount > 0 && `(${unreadMailCount})`}</li>
        )
    }
}