const { Link } = ReactRouterDOM;

export function MailPreview({ mail, onReadMail }) {
  const { subject, body, sentAt, isRead } = mail;
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
      <Link to={`/mail/${mail.id}`} className='decoration-none'>
        <section
          className={`mail-preview grid grid-gap center ${!isRead && 'unread'}`}
          onClick={() => onReadMail(mail.id)}
        >
          <div className='from'>{mail.from}</div>
          <div className='subject'>{subject}</div>
          <div className='body'>{getBody()}</div>
          <div className='sent-at'>
            {getHour()}:{getMinutes()}
          </div>
        </section>
      </Link>
    </React.Fragment>
  );
}
