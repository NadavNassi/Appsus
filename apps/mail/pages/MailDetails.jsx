import { Loader } from "../../../cmps/Loader.jsx";
import { mailService } from "../services/mail.service.js";

export class MailDetails extends React.Component {
  state = {
    mail: null,
  };
  componentDidMount() {
    this.loadMail();
  }
  loadMail = () => {
    const { mailId } = this.props.match.params;
    mailService.getMailById(mailId).then((mail) => this.setState({ mail }));
  };
  onRemoveMail = () => {
    const { mailId } = this.props.match.params;
    mailService.remove(mailId).then(() => {
      this.props.history.push("/mail");
    });
  };
  render() {
    if (!this.state.mail) return <Loader />
    const { from, subject, body, id } = this.state.mail;
    return (
      <section className='mail-details flex'>
        <div className='edit-mail flex flex-direction-column'>
          <button
            className='btn delete-btn right-self'
            onClick={() => this.onRemoveMail()}
          >
            Delete mail
          </button>
        </div>
        <div className='mail'>
          <h3 className='from'>From: {from}</h3>
          <h4 className='subject'>Subject: {subject}</h4>
          <h4 className='body'>Body: {body}</h4>
        </div>
      </section>
    );
  }
}
