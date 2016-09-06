import * as types from './actionTypes.js';

export function scrollDown() {
  return { type: types.SCROLL_DOWN }
}

export function scrollUp() {
  return { type: types.SCROLL_UP }
}

export function setActivePane(paneID) {
  return { type: types.SET_ACTIVE_PANE, paneID }
}

export function selectBuffer(bufferIndex) {
  return { type: types.SELECT_BUFFER, bufferIndex }
}

export function selectMsg(msgIndex) {
  return { type: types.SELECT_MSG, msgIndex }
}

export function toggleLinkMode() {
  return { type: types.TOGGLE_LINK_MODE }
}

export function setActiveLink(linkIndex) {
  return { type: types.SET_ACTIVE_LINK, linkIndex }
}

export function selectLink(url) {
  //@TODO: open browser with the url
  return { type: types.SELECT_LINK, url }
}

// Possibly refactor to async.
export function sendMsg(targetBuffer, msg) {
  return { type: types.SEND_MSG, targetBuffer, msg }
}

export function revieveMsg(targetBuffer, msg) {
  return { type: types.RCV_MSG, targetBuffer, msg }
}
