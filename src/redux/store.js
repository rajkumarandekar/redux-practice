import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import laptopReducer from "./reducers/laptopReducer";
import mobileReducer from "./reducers/mobileReducer";
import { usersReducer } from "./reducers/usersReducers";

import thunk from "redux-thunk";
import logger from "react-logger";
const rootReducer = combineReducers({
  laptops: laptopReducer,
  mobiles: mobileReducer,
  users: usersReducer,
});
const store = createStore(rootReducer, compose(applyMiddleware(thunk,logger)));
export default store;
