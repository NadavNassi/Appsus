'use strict';
import { utilService } from '../../../services/util-service.js';

const { makeLorem, makeId } = utilService;

const gUser = {
  mails: [
    {
      id: makeId(),
      from: makeLorem(1),
      subject: 'first?',
      body:
        'various people burn I had to The sky it a different story more or less It',
      isRead: false,
      sentAt: new Date(Date.now()),
      labels: ['inbox']
    },
    {
      id: makeId(),
      from: makeLorem(1),
      subject: 'seconed?',
      body:
        'from various people I as generally It and . in such cases in such cases from various people a pleasure tuned a dead channel It a dead channel had burn to was The sky bit by bit tuned each time to . above was All I The sky the port a pleasure the color of television this happened . All a dead channel was more or less each time It as generally All was a pleasure The sky from various people bit by bit tuned . from various people to . and All this happened I in such cases to a dead channel the color of television the color of television a different story to . a different story and a dead channel . The sky burn a dead channel it to was The sky ',
      isRead: false,
      sentAt: new Date(Date.now()),
      labels: ['inbox']
    },
    {
      id: makeId(),
      from: makeLorem(1),
      subject: 'first & thirs?',
      body:
        'above I tuned in such cases as generally . I in such cases more or less happens tuned All as generally the story . tuned a dead channel each time was to . The sky a different story more or less in such cases each time . a pleasure a dead channel All and',
      isRead: true,
      sentAt: new Date(Date.now()),
      labels: ['inbox', 'star']
    },
  ],
  labels: [
    'inbox',
    'star'
  ]
}




export const mailService = {
  query,
  getMailById,
  remove,
  toggleIsRead,
  sendMail,
  getByLabel,
  getLabels,
  removeLabel,
  getAvailableLabels,
  addNewMailLabel,
  addNewLabel
};

function query(filterBy) {
  console.log(filterBy);
  if (!filterBy.txt && !filterBy.mailStatus) {
    return Promise.resolve(gUser);
  }
  const { txt, mailStatus } = filterBy;
  const filteredBy = {}
  filteredBy.mails = gUser.mails.filter((mail) => {
    return (
      mail.subject.toUpperCase().includes(txt.toUpperCase()) ||
      mail.from.toUpperCase().includes(txt.toUpperCase()) ||
      mail.body.toUpperCase().includes(txt.toUpperCase()) &&
      mail.isRead === mailStatus
    );
  });
  filteredBy.labels = gUser.labels
  return Promise.resolve(filteredBy);
}

function getMailStatus(mailStatus) {
  let status = null;
  switch (mailStatus) {
    case 'false':
      status = false;
      break;
    case 'true':
      status = true;
      break;
    default:
      status = null;
  }
  return status;
}

function getMailById(mailId) {
  const mail = gUser.mails.find((mail) => mail.id === mailId);
  return Promise.resolve(mail);
}

function remove(mailId) {
  const mailIdx = gUser.mails.findIndex((mail) => mail.id === mailId);
  gUser.mails.splice(mailIdx, 1);
  return Promise.resolve(gUser.mails);
}

function toggleIsRead(mailId) {
  const chosenMailIdx = gMails.findIndex((mail) => mail.id === mailId);
  gMails[chosenMailIdx].isRead = true;
  return Promise.resolve(gMails)
}

function sendMail(composedMail) {
  return _createMail(composedMail)
    .then(() => Promise.resolve(gUser.mails))
}

function _createMail({ subject, body }) {
  console.log('in create mail');
  const newMail = {
    id: makeId(),
    from: makeLorem(1),
    subject: subject,
    body: body,
    isRead: false,
    sentAt: new Date(Date.now()),
    labels: ['inbox']
  }
  gUser.mails.push(newMail)
  return Promise.resolve('success')
}

function getByLabel(label) {
  const filteredMails = gUser.mails.filter(mail => {
    return mail.labels.includes(label)
  })
  return Promise.resolve(filteredMails)
}

function getLabels() {
  return gUser.labels
}

function removeLabel(mailId, userLabel) {
  const mailIdx = gUser.mails.findIndex(mail => {
    return mail.id === mailId
  })
  const labelIdx = gUser.mails[mailIdx].labels.findIndex(label => {
    return label === userLabel
  })
  gUser.mails[mailIdx].labels.splice(labelIdx, 1)
  return Promise.resolve(gUser.mails[mailIdx])
}

function addNewMailLabel(mailId, label) {
  const mailIdx = gUser.mails.findIndex(mail => {
    return mail.id === mailId
  })
  gUser.mails[mailIdx].labels.push(label)
  return Promise.resolve(gUser.mails[mailIdx])
}

function addNewLabel(newLabel) {
  gUser.labels.push(newLabel)
  return Promise.resolve(gUser.labels)
}

function getAvailableLabels() {
  return gUser.labels
}