import { combineReducers } from 'redux';

export const BUFFER_LIST_PANE = 0;
export const CHAT_PANE = 1;
export const MSG_PANE = 2;

const defaultState = {
  buffers: [
    // Example Buffer schema:
    {
      name: "chat room or user name",
      msgDraft: "", // The current text you have typed in the msg box, before hitting send.
      msgs: [
        {
          username: "joe.schmoe",
          text: "some message"
        }
      ],
      selectedMsg: 0,
      msgScrollIndex: 0,
      links: [
        {
          msgIndex: 0, // The message index where we found this link
          textIndex: 0, // the character offset in the message string where this link was found.
          url: "http://someurl.com"
        }
      ],
      selectedLink: 0
    }
  ],
  bufferScrollIndex: 0,
  activeBuffer: 0,
  activePane: BUFFER_LIST_PANE,
};

export default function(state = defaultState, action) {
  switch (action.type) {
    // case expression:
    //
    //   break;
    default:
        return defaultState;
        break;
  }
};
