'use strict';
import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/storage/storage-service.js'

const { makeLorem, makeId } = utilService;
const STORAGE_MAIL = 'mailDB'

let gUser = _loaFromStorage()



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

function _createDB() {
  return {
    mails: [
      {
        id: makeId(),
        from: makeLorem(1),
        subject: 'first?',
        body:
          'various people burn I had to The sky it a different story more or less It',
        isRead: false,
        sentAt: Date.now(),
        labels: ['All', 'Inbox'],
      },
      {
        id: makeId(),
        from: makeLorem(1),
        subject: 'seconed?',
        body:
          'from various people I as generally It and . in such cases in such cases from various people a pleasure tuned a dead channel It a dead channel had burn to was The sky bit by bit tuned each time to . above was All I The sky the port a pleasure the color of television this happened . All a dead channel was more or less each time It as generally All was a pleasure The sky from various people bit by bit tuned . from various people to . and All this happened I in such cases to a dead channel the color of television the color of television a different story to . a different story and a dead channel . The sky burn a dead channel it to was The sky ',
        isRead: false,
        sentAt: Date.now(),
        labels: ['All', 'Inbox'],
      },
      {
        id: makeId(),
        from: makeLorem(1),
        subject: 'first & thirs?',
        body:
          'above I tuned in such cases as generally . I in such cases more or less happens tuned All as generally the story . tuned a dead channel each time was to . The sky a different story more or less in such cases each time . a pleasure a dead channel All and',
        isRead: true,
        sentAt: Date.now(),
        labels: ['All', 'Inbox', 'Star'],
      },
    ],
    labels: [
      'All',
      'Sent',
      'Inbox',
      'Star'
    ]
  }
}

function query(filterBy) {
  if (!gUser) {
    gUser = _createDB()
    _saveToStorage()
  }
  if (!filterBy.txt && filterBy.mailStatus === '') {
    console.log('from without filter');
    return Promise.resolve(gUser);
  }
  const { txt, mailStatus } = filterBy;
  console.log(mailStatus);
  const filteredBy = {}
  filteredBy.mails = gUser.mails.filter((mail) => {
    return (
      mail.subject.toUpperCase().includes(txt.toUpperCase()) &&
      mail.from.toUpperCase().includes(txt.toUpperCase()) &&
      mail.body.toUpperCase().includes(txt.toUpperCase()) &&
      mail.isRead === mailStatus
    );
  });
  filteredBy.labels = gUser.labels
  console.log(filteredBy);
  console.log('from with filter');
  return Promise.resolve(filteredBy);
}

function getMailById(mailId) {
  const mail = gUser.mails.find((mail) => mail.id === mailId);
  return Promise.resolve(mail);
}

function remove(mailId) {
  const mailIdx = gUser.mails.findIndex((mail) => mail.id === mailId);
  gUser.mails.splice(mailIdx, 1);
  _saveToStorage()
  return Promise.resolve(gUser.mails);
}

function toggleIsRead(mailId) {
  const chosenMailIdx = gUser.mails.findIndex((mail) => mail.id === mailId);
  gUser.mails[chosenMailIdx].isRead = !gUser.mails[chosenMailIdx].isRead;
  _saveToStorage()
  return Promise.resolve(gUser)
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
    sentAt: Date.now(),
    labels: ['All', 'Sent'],
  }
  gUser.mails.push(newMail)
  _saveToStorage()
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
  _saveToStorage()
  return Promise.resolve(gUser.mails[mailIdx])
}

function addNewMailLabel(mailId, label) {
  const mailIdx = gUser.mails.findIndex(mail => {
    return mail.id === mailId
  })
  gUser.mails[mailIdx].labels.push(label)
  _saveToStorage()
  return Promise.resolve(gUser.mails[mailIdx])
}

function addNewLabel(newLabel) {
  gUser.labels.push(newLabel)
  _saveToStorage()
  return Promise.resolve(gUser.labels)
}

function getAvailableLabels() {
  return gUser.labels
}

function _saveToStorage() {
  storageService.saveToStorage(STORAGE_MAIL, gUser)
}

function _loaFromStorage() {
  return storageService.loadFromStorage(STORAGE_MAIL)
}