import { CHATS_ADD_ITEM, CHATS_REMOVE_ITEM } from './action';

const initialState = {
  chats: []
}

export const chatsReduser = (state = initialState, action) => {

  switch (action.type) {
    case CHATS_ADD_ITEM: {
      return {
        chats: [
          ...state.chats,
          action.payload,
        ]
      }

    }
    case CHATS_REMOVE_ITEM: {
      return {
        chats: state.chats.filter((item) => item.id !== action.payload)
      }

    }
    default: {
      return state;
    }

  }

}