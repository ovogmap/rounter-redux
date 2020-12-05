import { combineReducers } from "redux";
import main from './main';
import detail from './detail';

const rootreducer = combineReducers({main, detail})
export default rootreducer