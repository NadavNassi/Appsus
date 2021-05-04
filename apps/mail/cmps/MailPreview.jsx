export function MailPreview({ mail }) {
  const { subject, body, sentAt } = mail;
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
  return (
    <section className='mail-preview grid grid-gap'>
      <div className='subject'>{subject}</div>
      <div className='body'>{body}</div>
      <div className='sent-at'>
        {getHour()}:{getMinutes()}
      </div>
    </section>
  );
}
