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
      <Link className={!isRead && 'active'} to={`/mail/read/${mail.id}`} className={`decoration-none ${!isRead && 'unread'}`}>{from}</Link>
      <Link className={!isRead && 'active'} to={`/mail/read/${mail.id}`} className={`decoration-none ${!isRead && 'unread'}`}>{subject}</Link>
      <Link className={!isRead && 'active'} to={`/mail/read/${mail.id}`} className={`decoration-none ${!isRead && 'unread'}`}>{getBody()}</Link>
      <Link className={!isRead && 'active'} to={`/mail/read/${mail.id}`} className={`decoration-none ${!isRead && 'unread'}`}>
        {getHour()}:{getMinutes()}
      </Link>
      <button className='btn btn-remove' onClick={() => onRemoveMail(mail.id)}><i className="fas fa-trash-alt"></i></button>
    </React.Fragment>
  );
}
