export class MailCompose extends React.Component {
  // onSubmit = () => {
  //     this.props.onComposeMail
  // }

  render() {
    console.log(this.props);
    return (
      <form className='compose-mail'>
        <label htmlFor='compose-subject'>Subject</label>
        <textarea
          name='compose-subject'
          id='compose-subject'
          cols='100'
          rows='1'
        ></textarea>
        <hr />
        <label htmlFor='compose-body'>Body</label>
        <textarea
          name='compose-body'
          id='compose-body'
          cols='100'
          rows='100'
        ></textarea>
      </form>
    );
  }
}
