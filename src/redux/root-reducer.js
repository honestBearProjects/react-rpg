import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';

//this is where we will combine all states together
export default combineReducers({
  user: userReducer
});
