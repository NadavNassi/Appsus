const { Link } = ReactRouterDOM;

import { MailPreview } from './MailPreview.jsx';

export function MailList({ mails, onReadMail, onRemoveMail }) {
  return (
    <section className='mail-list'>
      <table>
        <thead>
          <tr className='table-header'>
            <td className='from'>From</td>
            <td className='subject'>Subject</td>
            <td className='body'>Message</td>
            <td className='time'>Time</td>
            <td className="actions"></td>
          </tr>
        </thead>
        <tbody>
          {mails.map((mail) => {
            return (
              <MailPreview key={mail.id} mail={mail} onReadMail={onReadMail} onRemoveMail={onRemoveMail} />
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
