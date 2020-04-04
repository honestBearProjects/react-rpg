import { UserActionTypes } from './user.types';

const INITIAL_STATE ={
  //Null is still considered a value
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) =>  {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return{
        ...state,
        currentUser: action.payload
      }
      //break;
    default:
      return state;
  }
}

export default userReducer;
