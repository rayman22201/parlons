import React, {Component} from 'react';
import blessed from 'blessed';
import {render} from 'react-blessed';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {App} from './components/App.js';
import appReducer from './reducers';

// Default store that does nothing.
const store = applyMiddleware(thunk)(createStore)(appReducer);

// @TODO:
// - make tabIndex stateless
// - highlight urls / select urls / copy pasta urls
// url regex: /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b((\/)?[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/ig
// 
// abstract out my custom redux friendly list component from ChatList and BufferList

// Creating our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'Parlons Chat!',
  debug: true
});
console.log = screen.debug.bind(screen);

//screen.on("resize", () => screen.debug("resized"));
// screen.on('keypress', function(ch, key){
//   console.log(JSON.stringify(key));
// });

// Adding a way to quit the program
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

screen.key(['tab'], function(ch, key) {
});

// Rendering the React app using our screen
const component = render(
  <Provider store={store}>
    <App />
  </Provider>, screen);
