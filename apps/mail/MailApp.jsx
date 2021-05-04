import { MailList } from "./cmps/MailList.jsx";
import { Loader } from "../../cmps/Loader.jsx";
import { mailService } from "./services/mail.service.js";
import { MailFilter } from "./cmps/MailFilter.jsx";
import { eventBusService } from "../../services/event.bus.service.js";

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
      const unreadMail = mails.filter((mail) => mail.isRead === false);
      eventBusService.emit("mail-count", {
        mailCount: mails.length,
        unreadMailCount: unreadMail.length,
      });
    });
  };

  onShowMail = (mailId) => {
    const { mails } = this.state;
    const chosenMailIdx = mails.findIndex((mail) => mail.id === mailId);
    mails[chosenMailIdx].isRead = true;
    this.setState({ mails });
  };

  onSetFilter = (filterBy) => {
    console.log(filterBy);
    this.setState({ filterBy: { ...this.state.filterBy, ...filterBy } }, () => {
      this.loadMails();
    });
  };

  onDeleteMail = () => {
    const { mailId } = this.props.match.params;
    mailService.deleteMail(mailId).then(() => {
      this.props.history.push("/mail");
    });
  };

  render() {
    const { mails } = this.state;
    if (!this.state.mails) return <Loader />;
    return (
      <section className='mail-app'>
        <MailFilter onSetFilter={this.onSetFilter} />
        <MailList mails={mails} onShowMail={this.onShowMail} />
      </section>
    );
  }
}
