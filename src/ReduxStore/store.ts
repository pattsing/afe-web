import { combineReducers, configureStore } from "@reduxjs/toolkit";
import navBarReducer from "./NavBarSlice";

const rootReducer = combineReducers({
  navBar: navBarReducer,
});

export default configureStore({
  reducer: rootReducer,
});
