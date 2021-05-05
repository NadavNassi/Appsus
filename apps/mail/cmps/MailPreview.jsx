const { Link, Route } = ReactRouterDOM;

import { MailDetails } from '../pages/MailDetails.jsx'

export function MailPreview({ mail, onReadMail, onRemoveMail }) {
  const { subject, body, sentAt, isRead, from } = mail;
  const getHour = () => {
    return sentAt.getHours();
  };
  const getMinutes = () => {
    const minutes =
      sentAt.getMinutes() < 10
        ? `0${sentAt.getMinutes()}`
        : sentAt.getMinutes();
    return minutes;
  };
  const getBody = () => {
    const txt = body.length > 20 ? body.substring(0, 100) + '...' : body;
    return txt;
  };

  return (
    <React.Fragment>
      {/* <Route component={() => <MailDetails onRemoveMail={onRemoveMail} path='/mail/read/:mailId' />} /> */}
      <Link to={`/mail/read/${mail.id}`} className='decoration-none from'>{from}</Link>
      <Link to={`/mail/read/${mail.id}`} className='decoration-none subject'>{subject}</Link>
      <Link to={`/mail/read/${mail.id}`} className='decoration-none body'>{getBody()}</Link>
      <Link to={`/mail/read/${mail.id}`} className='decoration-none sent-at'>
        {getHour()}:{getMinutes()}
      </Link>
      <button className='btn btn-remove' onClick={() => onRemoveMail(mail.id)}><i className="fas fa-trash-alt"></i></button>
    </React.Fragment>
  );
}
