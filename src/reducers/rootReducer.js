import { combineReducers } from "redux";
import data from "./data";
import questions from "./questions";

const rootReducer = combineReducers({
  data,
  questions,
});

export default rootReducer;
