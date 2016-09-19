"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MSG_PANE = exports.CHAT_PANE = exports.BUFFER_LIST_PANE = undefined;

exports.default = function (state = defaultState, action) {
  switch (action.type) {
    // case expression:
    //
    //   break;
    default:
      return defaultState;
      break;
  }
};

var _redux = require("redux");

const BUFFER_LIST_PANE = exports.BUFFER_LIST_PANE = 0;
const CHAT_PANE = exports.CHAT_PANE = 1;
const MSG_PANE = exports.MSG_PANE = 2;

const defaultState = {
  buffers: [
  // Example Buffer schema:
  {
    name: "chat room or user name",
    msgDraft: "", // The current text you have typed in the msg box, before hitting send.
    msgs: [{
      username: "joe.schmoe",
      text: "some message"
    }],
    selectedMsg: 0,
    msgScrollIndex: 0,
    links: [{
      msgIndex: 0, // The message index where we found this link
      textIndex: 0, // the character offset in the message string where this link was found.
      url: "http://someurl.com"
    }],
    selectedLink: 0
  }],
  bufferScrollIndex: 0,
  activeBuffer: 0,
  activePane: BUFFER_LIST_PANE
};

;