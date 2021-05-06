const { Link } = ReactRouterDOM;


export function MailPreview({ mail, onReadMail, onRemoveMail }) {
  const { subject, body, sentAt, isRead, from, id } = mail;

  const getTime = () => {
    return new Date(sentAt).toLocaleString()
  };

  const getBody = () => {
    const txt = body.length > 20 ? body.substring(0, 100) + '...' : body;
    return txt;
  };



  return (
    <tr className='mail-preview'>
      <td><Link className={`decoration-none from-td`} to={`/mail/read/${id}`}>{from}</Link></td>
      <td><Link className={`decoration-none subject-td`} to={`/mail/read/${id}`}>{subject}</Link></td>
      <td><Link className={`decoration-none body-td`} to={`/mail/read/${id}`}>{getBody()}</Link></td>
      <td><Link className={`decoration-none time-td`} to={`/mail/read/${id}`}>{getTime()}</Link></td>
      <td>
        <button className='btn btn-remove' onClick={() => onRemoveMail(mail.id)}><i className="fas fa-trash-alt"></i></button>
        <button onClick={() => onReadMail(id)}>{!isRead ? <i className="fas fa-envelope"></i> : <i className="fas fa-envelope-open"></i>}</button>
      </td>
    </tr>

  );
}
