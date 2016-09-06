// scrolling
// context dependent, based on the active pane.
export const SCROLL_UP = "CHAT_SCROLL_UP";
export const SCROLL_DOWN = "CHAT_SCROLL_DOWN";

// Panes are the visual sections that you can interact with.
// I.E. the buffer list, chat list, or message typing box.
export const SET_ACTIVE_PANE = "SET_ACTIVE_PANE";

// selecting
// Buffers can either be a single user chat session, or a group chat room.
// Buffer b/c IRC style.
export const SELECT_BUFFER = "SELECT_BUFFER";
export const SELECT_MSG = "SELECT_MSG";
// Copy selected msg to the clipboard.
export const COPY_MSG = "COPY_MSG";

// Buffers
export const ADD_BUFFER = "ADD_BUFFER";
export const REMOVE_BUFFER = "REMOVE_BUFFER";

// Messages
// These may be async? probably, but start simple for now.
export const SEND_MSG = "SEND_MSG";
export const RCV_MSG = "RCV_MSG";

// Link Highlights
export const TOGGLE_LINK_MODE = "TOGGLE_LINK_MODE";
export const SET_ACTIVE_LINK = "SET_ACTIVE_LINK";
export const SELECT_LINK = "SELECT_LINK";
