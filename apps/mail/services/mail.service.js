'use strict';
import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/storage/storage-service.js'

const { makeLorem, makeId } = utilService;
const STORAGE_MAIL = 'mailDB'

let gMail = _loaFromStorage()



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
  addNewLabel,
  toggleMailStar
};

function _createDB() {
  return {
    mails: [
      {
        id: makeId(),
        from: 'Matan',
        subject: 'Things are getting better',
        body:
          'I\'m almost done with the map, can you login and take a look?',
        isRead: false,
        sentAt: '24/4/21',
        labels: ['All', 'Inbox'],
      },
      {
        id: makeId(),
        from: 'Liel',
        subject: 'Checking on your progress',
        body:
          'Hope evreything going well. i won\'t be around in the next few days but im available on the phone and slack if you need anything',
        isRead: false,
        sentAt: '25/4/21',
        labels: ['All', 'Inbox'],
      },
      {
        id: makeId(),
        from: 'Ilai',
        subject: 'bit by bit',
        body:
          'whatsuuuppppp?!?!?!???!?!?!?!',
        isRead: true,
        sentAt: '1/5/21',
        labels: ['All', 'Inbox', 'Star'],
      },
      {
        id: makeId(),
        from: 'Matan',
        subject: 'Things are getting better',
        body:
          'I\'m almost done with the map, can you login and take a look?',
        isRead: false,
        sentAt: '2/5/21',
        labels: ['All', 'Inbox'],
      },
      {
        id: makeId(),
        from: 'Matan',
        subject: 'Things are getting better',
        body:
          'I\'m almost done with the map, can you login and take a look?',
        isRead: false,
        sentAt: '24/4/21',
        labels: ['All', 'Inbox'],
      },
      {
        id: makeId(),
        from: 'Liel',
        subject: 'Checking on your progress',
        body:
          'Hope evreything going well. i won\'t be around in the next few days but im available on the phone and slack if you need anything',
        isRead: false,
        sentAt: '25/4/21',
        labels: ['All', 'Inbox'],
      },
      {
        id: makeId(),
        from: 'Ilai',
        subject: 'bit by bit',
        body:
          'whatsuuuppppp?!?!?!???!?!?!?!',
        isRead: true,
        sentAt: '1/5/21',
        labels: ['All', 'Inbox', 'Star'],
      },
      {
        id: makeId(),
        from: 'Matan',
        subject: 'Things are getting better',
        body:
          'I\'m almost done with the map, can you login and take a look?',
        isRead: false,
        sentAt: '2/5/21',
        labels: ['All', 'Inbox'],
      },
      {
        id: makeId(),
        from: 'Matan',
        subject: 'Things are getting better',
        body:
          'I\'m almost done with the map, can you login and take a look?',
        isRead: false,
        sentAt: '24/4/21',
        labels: ['All', 'Inbox'],
      },
      {
        id: makeId(),
        from: 'Liel',
        subject: 'Checking on your progress',
        body:
          'Hope evreything going well. i won\'t be around in the next few days but im available on the phone and slack if you need anything',
        isRead: false,
        sentAt: '25/4/21',
        labels: ['All', 'Inbox'],
      },
      {
        id: makeId(),
        from: 'Ilai',
        subject: 'bit by bit',
        body:
          'whatsuuuppppp?!?!?!???!?!?!?!',
        isRead: true,
        sentAt: '1/5/21',
        labels: ['All', 'Inbox', 'Star'],
      },
      {
        id: makeId(),
        from: 'Matan',
        subject: 'Things are getting better',
        body:
          'I\'m almost done with the map, can you login and take a look?',
        isRead: false,
        sentAt: '2/5/21',
        labels: ['All', 'Inbox'],
      },
      {
        id: makeId(),
        from: 'Matan',
        subject: 'Things are getting better',
        body:
          'I\'m almost done with the map, can you login and take a look?',
        isRead: false,
        sentAt: '24/4/21',
        labels: ['All', 'Inbox'],
      },
      {
        id: makeId(),
        from: 'Liel',
        subject: 'Checking on your progress',
        body:
          'Hope evreything going well. i won\'t be around in the next few days but im available on the phone and slack if you need anything',
        isRead: false,
        sentAt: '25/4/21',
        labels: ['All', 'Inbox'],
      },
      {
        id: makeId(),
        from: 'Ilai',
        subject: 'bit by bit',
        body:
          'whatsuuuppppp?!?!?!???!?!?!?!',
        isRead: true,
        sentAt: '1/5/21',
        labels: ['All', 'Inbox', 'Star'],
      },
      {
        id: makeId(),
        from: 'Matan',
        subject: 'Things are getting better',
        body:
          'I\'m almost done with the map, can you login and take a look?',
        isRead: false,
        sentAt: '2/5/21',
        labels: ['All', 'Inbox'],
      }
    ],
    labels: [
      'All',
      'Star',
      'Inbox',
      'Sent',
    ]
  }
}

function query(filterBy) {
  if (!gMail) {
    gMail = _createDB()
    _saveToStorage()
  }
  if (!filterBy.txt && filterBy.mailStatus === '') {
    return Promise.resolve(gMail);
  }
  
  let { txt, mailStatus } = filterBy;
  const filteredBy = {}
  if (mailStatus === 'read') mailStatus = true
  if (mailStatus === 'unRead') mailStatus = false

  filteredBy.mails = gMail.mails.filter((mail) => {
    const filterRegex = new RegExp(txt, 'i');
    return (
      (filterRegex.test(mail.from) ||
        filterRegex.test(mail.subject) ||
        filterRegex.test(mail.body))
    );
  });
  if (mailStatus !== 'all') filteredBy.mails = filteredBy.mails.filter(mail => mail.isRead === mailStatus)
  filteredBy.labels = gMail.labels
  return Promise.resolve(filteredBy);
}


function getMailById(mailId) {
  const mail = gMail.mails.find((mail) => mail.id === mailId);
  return Promise.resolve(mail);
}

function remove(mailId) {
  const mailIdx = gMail.mails.findIndex((mail) => mail.id === mailId);
  gMail.mails.splice(mailIdx, 1);
  _saveToStorage()
  return Promise.resolve(gMail.mails);
}

function toggleIsRead(mailId) {
  const chosenMailIdx = gMail.mails.findIndex((mail) => mail.id === mailId);
  gMail.mails[chosenMailIdx].isRead = !gMail.mails[chosenMailIdx].isRead;
  _saveToStorage()
  return Promise.resolve(gMail)
}

function sendMail(composedMail) {
  if (composedMail.id) {
    _replayMail(composedMail)
      .then(() => Promise.resolve())
  }
  return _createMail(composedMail)
    .then(() => Promise.resolve(gMail.mails))
}

function _replayMail(composedMail) {
  const mailIdx = gMail.mails.findIndex(mail => {
    return mail.id === composedMail.id
  })
  gMail.mails[mailIdx] = {
    ...gMail.mails[mailIdx],
    id: makeId(),
    from: 'me',
    subject: composedMail.subject,
    body: composedMail.body,
    sentAt: Date.now()
  }
  _saveToStorage()
}

function _createMail({ subject, body, from }) {
  console.log('in create mail');
  const newMail = {
    id: makeId(),
    from: from,
    subject: subject,
    body: body,
    isRead: true,
    sentAt: Date.now(),
    labels: ['All', 'Sent'],
  }
  gMail.mails.push(newMail)
  _saveToStorage()
  return Promise.resolve('success')
}

function getByLabel(label) {
  const filteredMails = gMail.mails.filter(mail => {
    return mail.labels.includes(label)
  })
  return Promise.resolve(filteredMails)
}

function getLabels() {
  return gMail.labels
}

function removeLabel(mailId, userLabel) {
  const mailIdx = gMail.mails.findIndex(mail => {
    return mail.id === mailId
  })
  const labelIdx = gMail.mails[mailIdx].labels.findIndex(label => {
    return label === userLabel
  })
  gMail.mails[mailIdx].labels.splice(labelIdx, 1)
  _saveToStorage()
  return Promise.resolve(gMail.mails[mailIdx])
}

function addNewMailLabel(mailId, label) {
  const mailIdx = gMail.mails.findIndex(mail => {
    return mail.id === mailId
  })
  gMail.mails[mailIdx].labels.push(label)
  _saveToStorage()
  return Promise.resolve(gMail.mails[mailIdx])
}

function addNewLabel(newLabel) {
  gMail.labels.push(newLabel)
  _saveToStorage()
  return Promise.resolve(gMail.labels)
}

function getAvailableLabels() {
  return gMail.labels
}

function toggleMailStar(mailId) {
  const mailIdx = gMail.mails.findIndex(mail => {
    return mail.id === mailId
  })
  if (gMail.mails[mailIdx].labels.includes('Star')) {
    const labelIdx = gMail.mails[mailIdx].labels.findIndex(label => label === 'Star')
    gMail.mails[mailIdx].labels.splice(labelIdx)
  } else {
    gMail.mails[mailIdx].labels.push('Star')
  }
  _saveToStorage()
  return Promise.resolve(gMail.mails)
}

function _saveToStorage() {
  storageService.saveToStorage(STORAGE_MAIL, gMail)
}

function _loaFromStorage() {
  return storageService.loadFromStorage(STORAGE_MAIL)
}