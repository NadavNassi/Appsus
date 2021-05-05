export class MailCompose extends React.Component {

  state = {
    composeMail: {
      subject: '',
      body: ''
    }
  }

  onSubmit = (ev) => {
    ev.preventDefault()
    this.props.onComposeMail(this.state.composeMail)
  }

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState(({ composeMail }) => ({
      composeMail: { ...composeMail, [field]: value },
    }));
  };

  render() {
    const { subject, body } = this.state.composeMail
    return (
      <React.Fragment>
        <div className="compose-screen"></div>
        <div className="compose-modal">
          <form className='compose-mail' onSubmit={this.onSubmit}>
            <h3>Compose mail</h3>
            <label htmlFor='compose-subject'>Subject</label>
            <textarea
              value={subject}
              name='subject'
              id='compose-subject'
              className='compose-subject'
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor='compose-body'>Body</label>
            <textarea
              value={body}
              name='body'
              id='compose-body'
              className='compose-body'
              onChange={this.handleChange}
            ></textarea>
            <button>Send!</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
