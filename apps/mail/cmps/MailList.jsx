import { MailPreview } from "./MailPreview.jsx";

export function MailList({ mails }) {
  console.log(mails);
  return (
    <section className='mail-list'>
      {mails.map((mail) => {
        return <MailPreview key={mail.id} mail={mail} />;
      })}
    </section>
  );
}
