import { eventBusService } from '../../../services/event.bus.service.js';

export class MailFilter extends React.Component {
  state = {
    filterBy: {
      txt: '',
      mailStatus: '',
    },
    mailCount: 0,
    unreadMailCount: 0,
  };
  removeEvent;
  componentDidMount() {
    this.removeEvent = eventBusService.on(
      'mail-count',
      ({ mailCount, unreadMailCount }) => {
        this.setState({ mailCount, unreadMailCount });
      }
    );
  }

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState(({ filterBy }) => ({
      filterBy: { ...filterBy, [field]: value },
    }));
  };

  onFilter = (ev) => {
    ev.preventDefault();
    this.props.onSetFilter(this.state.filterBy);
  };

  render() {
    const { txt, mailStatus } = this.state.filterBy;
    return (
      <form
        className='mail-filter flex space-evenly center'
        onSubmit={this.onFilter}
      >
        <h4>Search for mails: </h4>
        <input
          type='text'
          value={txt}
          name='txt'
          onChange={this.handleChange}
          placeholder='type to search'
        />
        <select
          name='mailStatus'
          value={mailStatus}
          onChange={this.handleChange}
        >
          <option value=''>All</option>
          <option value={true}>Read</option>
          <option value={false}>Unread</option>
        </select>
        <button>Search</button>
        <p>
          You have {this.state.unreadMailCount} unread mails of
          {this.state.mailCount} mails total
        </p>
      </form>
    );
  }
}
