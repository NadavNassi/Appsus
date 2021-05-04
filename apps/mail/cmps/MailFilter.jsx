export class MailFilter extends React.Component {
  state = {
    filterBy: {
      txt: "",
      mailStatus: "all",
    },
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState(
      ({ filterBy }) => ({
        filterBy: { ...filterBy, [field]: value },
      }),
      () => {
        this.props.onSetFilter(this.state.filterBy);
      }
    );
  };

  render() {
    const { txt, mailStatus } = this.state.filterBy;
    return (
      <form className='mail-filter'>
        <h5>Search for mails: </h5>
        <input
          type='text'
          value={txt}
          name='txt'
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
