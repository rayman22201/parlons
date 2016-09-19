'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollDown = scrollDown;
exports.scrollUp = scrollUp;
exports.setActivePane = setActivePane;
exports.selectBuffer = selectBuffer;
exports.addBuffer = addBuffer;
exports.removeBuffer = removeBuffer;
exports.selectMsg = selectMsg;
exports.toggleLinkMode = toggleLinkMode;
exports.setActiveLink = setActiveLink;
exports.selectLink = selectLink;
exports.copyMsg = copyMsg;
exports.sendMsg = sendMsg;
exports.revieveMsg = revieveMsg;

var _actionTypes = require('./actionTypes.js');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function scrollDown() {
  return { type: types.SCROLL_DOWN };
}

function scrollUp() {
  return { type: types.SCROLL_UP };
}

function setActivePane(paneID) {
  return { type: types.SET_ACTIVE_PANE, paneID };
}

function selectBuffer(bufferIndex) {
  return { type: types.SELECT_BUFFER, bufferIndex };
}

function addBuffer(name, msgs) {
  return { type: types.ADD_BUFFER, name, msgs };
}

function removeBuffer(bufferIndex) {
  return { type: types.removeBuffer, bufferIndex };
}

function selectMsg(msgIndex) {
  return { type: types.SELECT_MSG, msgIndex };
}

function toggleLinkMode() {
  return { type: types.TOGGLE_LINK_MODE };
}

function setActiveLink(linkIndex) {
  return { type: types.SET_ACTIVE_LINK, linkIndex };
}

function selectLink(url) {
  //@TODO: open browser with the url
  return { type: types.SELECT_LINK, url };
}

function copyMsg(text) {
  //@TODO: copy text to the clipboard
  return { type: types.COPY_MSG, text };
}

// Possibly refactor to async.
function sendMsg(targetBuffer, msg) {
  return { type: types.SEND_MSG, targetBuffer, msg };
}

function revieveMsg(targetBuffer, msg) {
  return { type: types.RCV_MSG, targetBuffer, msg };
}