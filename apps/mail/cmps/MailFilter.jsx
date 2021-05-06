
export class MailFilter extends React.Component {
  state = {
    filterBy: {
      txt: '',
      mailStatus: '',
    },
  }

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === 'select-one' ? this.getMailStatus(target.value) : target.value
    this.setState(({ filterBy }) => ({
      filterBy: { ...filterBy, [field]: value },
    }));
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
          <button className="filter-search-btn">Search</button>

        </div>
      </form>
    );
  }
}
