import { MailList } from "./cmps/MailList.jsx";
import { Loader } from "../../cmps/Loader.jsx";
import { mailService } from "./services/mail.service.js";
import { MailFilter } from "./cmps/MailFilter.jsx";

export class MailApp extends React.Component {
  state = {
    mails: null,
    filterBy: {
      txt: "",
      mailStatus: "all",
    },
  };

  componentDidMount() {
    this.loadMails();
  }

  loadMails = () => {
    mailService
      .query(this.state.filterBy)
      .then((mails) => this.setState({ mails }));
  };

  onShowMail = (mailId) => {
    const { mails } = this.state;
    const chosenMailIdx = mails.findIndex((mail) => mail.id === mailId);
    mails[chosenMailIdx].isRead = true;
    this.setState((prevState) => ({ mails }));
  };

  onSetFilter = (filterBy) => {
    this.setState(
      { filterBy: { ...this.state.filterBy, ...filterBy } },
      this.loadMail
    );
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
