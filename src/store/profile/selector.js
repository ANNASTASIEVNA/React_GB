export const getProfileFromReduxer = (state) => state.profile;

export const getUserFromProfile = (state) => getProfileFromReduxer(state).user;

export const getShowStatusFromProfile = (state) => getProfileFromReduxer(state).showName;