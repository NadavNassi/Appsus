import { MailPreview } from './MailPreview.jsx';

export function MailList({ mails, onReadMail, onRemoveMail }) {
  return (
    <section className='mail-list'>
      <div className='mail-header grid center'>
        <div className='from'>From</div>
        <div className='subject'>Subject</div>
        <div className='body'>Message</div>
        <div className='time'>Time</div>
        <div className="mail-list-controller"></div>
        {mails.map((mail) => {
          return (
            <MailPreview key={mail.id} mail={mail} onReadMail={onReadMail} onRemoveMail={onRemoveMail} />
          );
        })}
      </div>
    </section>
  );
}
