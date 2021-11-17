import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { chatReducer } from "./chatReducer";
import { uiReducer } from "./uiReducer";


export const rootReducer = combineReducers({
  auth:authReducer,
  ui:uiReducer,
  chat:chatReducer
})