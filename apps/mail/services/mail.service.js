"use strict";

const gBooks = [
  {
    id: "AxcE34",
    subject: "Whats up?",
    body: "first message",
    isRead: false,
    sentAt: new Date(Date.now()),
  },
  {
    id: "eD26wW",
    subject: "Whats uppp?",
    body: "seconed message",
    isRead: false,
    sentAt: new Date(Date.now()),
  },
  {
    id: "Xc9sR4",
    subject: "Whats?",
    body: "third message",
    isRead: false,
    sentAt: new Date(Date.now()),
  },
];

export const mailService = {
  query,
};

function query() {
  return Promise.resolve(gBooks);
}
