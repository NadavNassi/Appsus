"use strict";
import { utilService } from "../../../services/util-service.js";

const { makeLorem, makeId } = utilService;

const gBooks = [
  {
    id: makeId(),
    subject: "Whats up?",
    body: makeLorem(20),
    isRead: false,
    sentAt: new Date(Date.now()),
  },
  {
    id: makeId(),
    subject: "Whats uppp?",
    body: makeLorem(130),
    isRead: false,
    sentAt: new Date(Date.now()),
  },
  {
    id: makeId(),
    subject: "Whats?",
    body: makeLorem(53),
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
