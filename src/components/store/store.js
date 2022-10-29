import { configureStore } from '@reduxjs/toolkit';
import {profileReducer} from '../store/reducer';

export default configureStore(profileReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());