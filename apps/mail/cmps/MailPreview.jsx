export function MailPreview({ mail }) {
  const { subject, body, sentAt, isUnread } = mail;
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
    const txt = body.length > 20 ? body.substring(0, 100) + "..." : body;
    return txt;
  };
  const getIsUnread = () => {
    return isUnread;
  };
  return (
    <section className='mail-preview grid grid-gap'>
      <div className='subject'>{subject}</div>
      <div className='body'>{getBody()}</div>
      <div className='sent-at'>
        {getHour()}:{getMinutes()}
      </div>
    </section>
  );
}
