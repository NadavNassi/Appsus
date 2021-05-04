import { MailPreview } from './MailPreview.jsx';

export function MailList({ mails, onReadMail }) {
  return (
    <section className='mail-list'>
      <div className='mail-header grid grid-gap center'>
        <div className='from'>From</div>
        <div className='subject'>Subject</div>
        <div className='body'>Message</div>
        <div className='time'>Time</div>
      </div>
      {mails.map((mail) => {
        return (
          <MailPreview key={mail.id} mail={mail} onReadMail={onReadMail} />
        );
      })}
    </section>
  );
}
