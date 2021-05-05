const { Route, Link } = ReactRouterDOM;

import { MailList } from "./cmps/MailList.jsx";
import { Loader } from "../../cmps/Loader.jsx";
import { mailService } from "./services/mail.service.js";
import { MailFilter } from "./cmps/MailFilter.jsx";
import { eventBusService } from "../../services/event.bus.service.js";
import { MailCompose } from "./cmps/MailCompose.jsx";

export class MailApp extends React.Component {
  state = {
    mails: null,
    filterBy: {
      txt: "",
      mailStatus: "",
    },
  };

  componentDidMount() {
    this.loadMails();
  }

  loadMails = () => {
    mailService.query(this.state.filterBy).then((mails) => {
      this.setState({ mails });
      const unreadMail = mails.filter((mail) => !mail.isRead);
      eventBusService.emit("mail-count", {
        mailCount: mails.length,
        unreadMailCount: unreadMail.length,
      });
    });
  };

  onReadMail = (mailId) => {
    mailService.toggleIsRead(mailId).then((mails) => this.setState({ mails }));
  };

  onSetFilter = (filterBy) => {
    console.log(filterBy);
    this.setState({ filterBy: { ...this.state.filterBy, ...filterBy } }, () => {
      this.loadMails();
    });
  };

  onComposeMail = (composeMail) => {
    mailService.sendMail(composeMail)
      .then((mails) => {
        this.setState({ mails })
        this.props.history.push('/mail')
      })
  };

  render() {
    const { mails } = this.state;
    if (!this.state.mails) return <Loader />;
    return (
      <section className="mail-app">
        <MailFilter onSetFilter={this.onSetFilter} />
        <MailList mails={mails} onReadMail={this.onReadMail} />

        <Route exact component={() => <MailCompose onComposeMail={this.onComposeMail} />} exact path={'/mail/compose-mail'} />
        <Link className='compose-btn' to='/mail/compose-mail'>
          +
        </Link>
      </section>
    );
  }
}
