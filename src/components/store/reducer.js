
import { CHANGE_PROFILE_SHOW_NAME } from '../store/action';

const ititialState = {
  showName: false,
  user: 'User',
  userID: '#1',
}

export const profileReducer = (state = ititialState, action) => {
  switch (action.type) {
    case CHANGE_PROFILE_SHOW_NAME:
      return {
        ...state,
        showName: !state.showName
      }
    default:
      return state;
  }
}
