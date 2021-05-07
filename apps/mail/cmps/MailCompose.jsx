const { withRouter } = ReactRouterDOM

class _MailCompose extends React.Component {

  state = {
    composeMail: {
      from: '',
      subject: '',
      body: ''
    }
  }
  componentDidMount() {
    if (this.props.mail) {
      let { body, subject, from } = this.props.mail
      subject = `re::${from} ` + subject
      body = '\n \n \n ==================' + body
      this.setState(prevState => ({
        composeMail: {
          ...prevState,
          from,
          subject,
          body
        }
      }))
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

  onCloseModal = () => {
    this.props.history.push('/mail')
  }


  render() {
    const { to, subject, body } = this.state.composeMail
    return (
      <React.Fragment>
        <div className="compose-screen"></div>
        <div className="compose-modal">
          <form className='compose-mail' onSubmit={this.onSubmit}>
            <h3>Compose mail</h3>
            <label htmlFor="compose-to">To</label>
            <input type="email" name="from" id="compose-to" value={to} onChange={this.handleChange} />
            <label htmlFor='compose-subject'>Subject</label>
            <input
              value={subject}
              name='subject'
              id='compose-subject'
              className='compose-subject'
              onChange={this.handleChange}
            ></input>
            <label htmlFor='compose-body'>Body</label>
            <textarea
              value={body}
              name='body'
              id='compose-body'
              className='compose-body'
              onChange={this.handleChange}
            ></textarea>
            <div className="edit-line flex">
              <button onClick={this.onCloseModal}>Discard</button>
              <button type='submit'>Send!</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}


export const MailCompose = withRouter(_MailCompose)

