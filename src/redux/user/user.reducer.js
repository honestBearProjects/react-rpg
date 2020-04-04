const INITIAL_STATE ={
  //Null is still considered a value
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) =>  {
  switch (action.type) {
    case 'SET_CURRENT_USER':
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
