import {
    GET_BESTSELLING_REPORT_SUCCESS,
    GET_BESTSELLING_REPORT_FAIL,
    GET_PROFIT_GRAPH_REPORT_SUCCESS,
    GET_PROFIT_GRAPH_REPORT_FAIL
  } from '../actions/types';
  
  const initialState = {
    bestSellingGraph: {},
    ProfitGraph: [],
    
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_BESTSELLING_REPORT_SUCCESS:
       
        return {
          ...state,
          bestSellingGraph: action.payload,
         
        };
  
      case GET_BESTSELLING_REPORT_FAIL:
        return {
          ...state,
          bestSellingGraph: {},
         
        };
        case GET_PROFIT_GRAPH_REPORT_SUCCESS:
       
            return {
              ...state,
              ProfitGraph: action.payload,
             
            };
      
          case GET_PROFIT_GRAPH_REPORT_FAIL:
            return {
              ...state,
              ProfitGraph: [],
             
            };
      
  
      default:
        return state;
    }
  }
  