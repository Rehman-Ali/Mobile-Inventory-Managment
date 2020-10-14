import {
    GET_SOLD_PRODUCT_FAIL,
    GET_SOLD_PRODUCT_SUCCESS
  } from '../actions/types';
  
  const initialState = {
    allproduct: [],
    
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_SOLD_PRODUCT_SUCCESS:
       
        return {
          ...state,
          allproduct: action.payload,
         
        };
  
      case GET_SOLD_PRODUCT_FAIL:
        return {
          ...state,
          allproduct: [],
         
        };
  
  
      default:
        return state;
    }
  }
  