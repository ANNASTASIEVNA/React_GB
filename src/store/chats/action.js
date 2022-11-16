export const CHATS_ADD_ITEM = 'CHATS_ADD_ITEM';
export const CHATS_REMOVE_ITEM = 'CHATS_REMOVE_ITEM';

export const chatsAddItemAction = (name, chatId) => ({
  type: CHATS_ADD_ITEM,
  payload: {
    name: name,
    id: chatId
  }
})

export const chatsRemoveItemAction = (cahtId) => ({
  type: CHATS_REMOVE_ITEM,
  payload: cahtId
})