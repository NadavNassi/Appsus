const { Link } = ReactRouterDOM;


export function MailPreview({ mail, onReadMail, onRemoveMail, onStarMail }) {
  const { subject, body, sentAt, isRead, from, id, labels } = mail;

  const getTime = () => {
    return new Date(sentAt).toLocaleString()
  };

  const getBody = () => {
    const txt = body.length > 40 ? body.substring(0, 40) + '...' : body;
    return txt;
  };



  return (
    <tr className='mail-preview'>
      <td><Link className={`decoration-none from-td`} to={`/mail/read/${id}`}>{from}</Link></td>
      <td><Link className={`decoration-none subject-td`} to={`/mail/read/${id}`}>{subject}</Link></td>
      <td><Link className={`decoration-none body-td`} to={`/mail/read/${id}`}>{getBody()}</Link></td>
      <td><Link className={`decoration-none time-td`} to={`/mail/read/${id}`}>{getTime()}</Link></td>
      <td className='actions-btns flex'>
        <i className="btn btn-remove fas fa-trash-alt" onClick={() => onRemoveMail(id)}></i>
        {!isRead ? <i className="btn btn-toggle-read fas fa-envelope" onClick={() => onReadMail(id)}></i> : <i className="fas fa-envelope-open" onClick={() => onReadMail(id)}></i>}
        {labels.includes('Star') ? <i className="fas fa-star" onClick={() => onStarMail(id)}></i> : <i className="far fa-star" onClick={() => onStarMail(id)}></i>}
      </td>
    </tr>

  );
}
