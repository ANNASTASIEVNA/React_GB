import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { profileReducer } from './profile/reduser';
import { chatsReduser } from './chats/reduser';
import { messagesReduser } from './messages/reduser';

export const store = configureStore(
  combineReducers({
    profile: profileReducer,
    chatsList: chatsReduser,
    messages: messagesReduser
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());