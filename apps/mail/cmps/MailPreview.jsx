const { Link, Route } = ReactRouterDOM;


export function MailPreview({ mail, onReadMail, onRemoveMail }) {
  const { subject, body, sentAt, isRead, from } = mail;

  const getTime = () => {
    return new Date(sentAt).toLocaleString()
  };

  const getBody = () => {
    const txt = body.length > 20 ? body.substring(0, 100) + '...' : body;
    return txt;
  };

  return (
    <React.Fragment>
      <Link to={`/mail/read/${mail.id}`} className={`decoration-none ${!isRead && 'unread'}`}>{from}</Link>
      <Link to={`/mail/read/${mail.id}`} className={`decoration-none ${!isRead && 'unread'}`}>{subject}</Link>
      <Link to={`/mail/read/${mail.id}`} className={`decoration-none ${!isRead && 'unread'}`}>{getBody()}</Link>
      <Link to={`/mail/read/${mail.id}`} className={`decoration-none ${!isRead && 'unread'}`}>
        {getTime()}
      </Link>
      <button className='btn btn-remove' onClick={() => onRemoveMail(mail.id)}><i className="fas fa-trash-alt"></i></button>
    </React.Fragment>
  );
}
