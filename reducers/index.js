import { combineReducers } from 'redux';
import login from './login';
import sale from './sale';
import report from './report';
export default combineReducers({
 login,
 sale,
 report
});
