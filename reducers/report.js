import {
    GET_BESTSELLING_REPORT_SUCCESS,
    GET_BESTSELLING_REPORT_FAIL
  } from '../actions/types';
  
  const initialState = {
    bestSelling: [],
    
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_BESTSELLING_REPORT_SUCCESS:
       
        return {
          ...state,
          bestSelling: action.payload,
         
        };
  
      case GET_BESTSELLING_REPORT_FAIL:
        return {
          ...state,
          bestSelling: [],
         
        };
  
  
      default:
        return state;
    }
  }
  