
export class MailFilter extends React.Component {
  state = {
    filterBy: {
      txt: '',
      mailStatus: 'all',
    },
  }

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value

    this.setState(({ filterBy }) => ({
      filterBy: { ...filterBy, [field]: value },
    }), () => this.props.onSetFilter(this.state.filterBy));
  };

  getMailStatus = (status) => {
    switch (status) {
      case 'true':
        status = true
        break;
      case 'false':
        status = false
        break;
      default:
        status = ''
    }
    return status
  }

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
        <div className='filter-search-container'>

          <input
            type='text'

            name='txt'
            onChange={this.handleChange}
            placeholder='type to search'
          />
          <select
            name='mailStatus'

            onChange={this.handleChange}
          >
            <option value='all'>All</option>
            <option value={'read'}>Read</option>
            <option value={'unRead'}>Unread</option>
          </select>
          <button className="filter-search-btn">Search</button>

        </div>
      </form>
    );
  }
}
