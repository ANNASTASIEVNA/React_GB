import { MESSAGES_NEW_MESSAGE, MESSAGES_REMOVE_MESSAGES_TOGETHER_CHAT } from './action';

const initialState = {
  messagesList: {}
};

export const messagesReduser = (state = initialState, action) => {

  switch (action.type) {
    case MESSAGES_NEW_MESSAGE: {

      const currentMessages = state.messagesList[action.payload.chatId] || [];

      return {
        ...state,
        messagesList: {
          ...state.messagesList,
          [action.payload.chatId]: [
            ...currentMessages,
            action.payload.message,

          ]
        }
      }

    }
    case MESSAGES_REMOVE_MESSAGES_TOGETHER_CHAT: {
      const currentMessages = { ...state.messagesList };
      const newMessages = {}

      for (let key in currentMessages) {
        if (key !== action.payload) {
          newMessages[key] = currentMessages[key]
        }
      }

      return {
        messagesList: newMessages

      }

    }
    default: {
      return state
    }

  }

}