"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// scrolling
// context dependent, based on the active pane.
const SCROLL_UP = exports.SCROLL_UP = "CHAT_SCROLL_UP";
const SCROLL_DOWN = exports.SCROLL_DOWN = "CHAT_SCROLL_DOWN";

// Panes are the visual sections that you can interact with.
// I.E. the buffer list, chat list, or message typing box.
const SET_ACTIVE_PANE = exports.SET_ACTIVE_PANE = "SET_ACTIVE_PANE";

// selecting
// Buffers can either be a single user chat session, or a group chat room.
// Buffer b/c IRC style.
const SELECT_BUFFER = exports.SELECT_BUFFER = "SELECT_BUFFER";
const SELECT_MSG = exports.SELECT_MSG = "SELECT_MSG";
// Copy selected msg to the clipboard.
const COPY_MSG = exports.COPY_MSG = "COPY_MSG";

// Buffers
const ADD_BUFFER = exports.ADD_BUFFER = "ADD_BUFFER";
const REMOVE_BUFFER = exports.REMOVE_BUFFER = "REMOVE_BUFFER";

// Messages
// These may be async? probably, but start simple for now.
const SEND_MSG = exports.SEND_MSG = "SEND_MSG";
const RCV_MSG = exports.RCV_MSG = "RCV_MSG";

// Link Highlights
const TOGGLE_LINK_MODE = exports.TOGGLE_LINK_MODE = "TOGGLE_LINK_MODE";
const SET_ACTIVE_LINK = exports.SET_ACTIVE_LINK = "SET_ACTIVE_LINK";
const SELECT_LINK = exports.SELECT_LINK = "SELECT_LINK";