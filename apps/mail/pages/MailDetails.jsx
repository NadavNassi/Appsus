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
    mailService.getMailById(mailId).then((mail) => {
      mail.isRead = true
      this.setState({ mail })

    });
  };

  onRemoveMail = () => {
    const { mailId } = this.props.match.params;
    console.log('before history push');
    mailService.remove(mailId).then(() => {
      this.props.history.push('/mail');
    })
  };

  getLabels = () => {
    const labels = mailService.getAvailableLabels()
    const avialableLabels = labels.filter(label => {
      return !this.state.mail.labels.includes(label)
    })
    return avialableLabels
  }

  onRemoveLabels = (label) => {
    const { mailId } = this.props.match.params;
    mailService.removeLabel(mailId, label)
      .then(mail => this.setState({ mail }))
  }

  onAddLabel = (label) => {
    mailService.addNewMailLabel(this.state.mail.id, label)
      .then(mail => this.setState({ mail }))
  }

  onCloseMail = () => {
    this.props.history.push('/mail')
  }



  render() {
    if (!this.state.mail) return <Loader />
    const { from, subject, body, labels } = this.state.mail;
    return (
      <section className='mail-details'>
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
        <div className='edit-mail flex'>
          <button className='btn back-btn' onClick={this.onCloseMail}>Back to mail box</button>
          <button
            className='btn delete-btn right-self'
            onClick={this.onRemoveMail}
          >
            Delete mail
          </button>
        </div>
      </section>
    );
  }
}


export const MailDetails = withRouter(_MailDetails)