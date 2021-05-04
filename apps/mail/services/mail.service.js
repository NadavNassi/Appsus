"use strict";
import { utilService } from "../../../services/util-service.js";

const { makeLorem, makeId } = utilService;

const gMails = [
  {
    id: makeId(),
    from: makeLorem(1),
    subject: "Whats up?",
    body:
      "various people burn I had to The sky it a different story more or less It",
    isRead: false,
    sentAt: new Date(Date.now()),
  },
  {
    id: makeId(),
    from: makeLorem(1),
    subject: "Whats uppp?",
    body:
      "from various people I as generally It and . in such cases in such cases from various people a pleasure tuned a dead channel It a dead channel had burn to was The sky bit by bit tuned each time to . above was All I The sky the port a pleasure the color of television this happened . All a dead channel was more or less each time It as generally All was a pleasure The sky from various people bit by bit tuned . from various people to . and All this happened I in such cases to a dead channel the color of television the color of television a different story to . a different story and a dead channel . The sky burn a dead channel it to was The sky ",
    isRead: false,
    sentAt: new Date(Date.now()),
  },
  {
    id: makeId(),
    from: makeLorem(1),
    subject: "Whats?",
    body:
      "above I tuned in such cases as generally . I in such cases more or less happens tuned All as generally the story . tuned a dead channel each time was to . The sky a different story more or less in such cases each time . a pleasure a dead channel All and",
    isRead: true,
    sentAt: new Date(Date.now()),
  },
];

export const mailService = {
  query,
  getMailById,
  deleteMail,
};

function query(filterBy) {
  if (!filterBy.txt) return Promise.resolve(gMails);
  const { txt, mailStatus } = filterBy;
  const filteredBy = gMails.filter((mail) => {
    return (
      mail.body.toUpperCase().includes(txt) &&
      mail.title.toUpperCase().includes(txt)
    );
  });
  return Promise.resolve(filterBy);
}

function getMailById(mailId) {
  const mail = gMails.find((mail) => mail.id === mailId);
  return Promise.resolve(mail);
}

function deleteMail(mailId) {
  const mailIdx = gMails.findIndex((mail) => mail.id === mailId);
  gMails.splice(mailIdx, 1);
  return Promise.resolve(gMails);
}
