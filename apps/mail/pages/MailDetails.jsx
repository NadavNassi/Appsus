const { withRouter } = ReactRouterDOM

import { Loader } from "../../../cmps/Loader.jsx";
import { mailService } from "../services/mail.service.js";
import { LabelList } from '../cmps/LabelList.jsx'

class _MailDetails extends React.Component {
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
    console.log('before history push');
    mailService.remove(mailId).then(() => {
      this.props.history.push('/mail');
    })
  };

  onRemoveLabels = (label) => {
    const { mailId } = this.props.match.params;
    mailService.removeLabel(mailId, label)
      .then(mail => this.setState({ mail }))
  }

  getLabels = () => {
    const labels = mailService.getAvailableLabels()
    const avialableLabels = labels.filter(label => {
      return !this.state.mail.labels.includes(label)
    })
    return avialableLabels
  }

  onAddLabel = (label) => {
    mailService.addNewMailLabel(this.state.mail.id, label)
      .then(mail => this.setState({ mail }))
  }



  render() {
    console.log(this.state.mail);
    if (!this.state.mail) return <Loader />
    const { from, subject, body, labels } = this.state.mail;
    return (
      <section className='mail-details flex'>
        <div className='edit-mail flex flex-direction-column'>
          <button
            className='btn delete-btn right-self'
            onClick={this.onRemoveMail}
          >
            Delete mail
          </button>
        </div>
        <div className='mail'>
          <h3 className='from'>From: </h3>
          <p>{from}</p>
          <h4 className='subject'>Subject: </h4>
          <p>{subject}</p>
          <h4 className='body'>Body:</h4>
          <p> {body}</p>
          <h2>Labels:</h2>
          <div className="labels">
            <div className="user-labels">
              <small>click label to remove</small>
              <LabelList labels={labels} onClickLabels={this.onRemoveLabels} />
            </div>
            <div className="available-labels">
              <small>Select new label</small>
              <LabelList labels={this.getLabels()} onClickLabels={this.onAddLabel} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export const MailDetails = withRouter(_MailDetails)