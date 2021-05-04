import { MailList } from "./cmps/MailList.jsx";
import { Loader } from "../../cmps/Loader.jsx";
import { mailService } from "./services/mail.service.js";

export class MailApp extends React.Component {
  state = {
    mails: null,
  };

  componentDidMount() {
    this.loadMails();
  }

  loadMails = () => {
    mailService.query().then((mails) => this.setState({ mails }));
  };

  render() {
    const { mails } = this.state;
    console.log(mails);
    if (!this.state.mails) return <Loader />;
    return (
      <section className='mail-app'>
        <h1>Mail page</h1>
        <MailList mails={mails} />
      </section>
    );
  }
}
