import {
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from '../actions/types';

const initialState = {
  login_permission: false,
  
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
     
      return {
        ...state,
        login_permission: true,
       
      };

    case LOGIN_FAIL:
      return {
        ...state,
        login_permission: false,
       
      };


    default:
      return state;
  }
}
