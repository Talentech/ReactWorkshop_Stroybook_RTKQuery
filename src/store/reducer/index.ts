import { combineReducers } from "@reduxjs/toolkit";
import { reducer as oidcReducer } from "redux-oidc";
import { reducer as appNotificationsReducer } from "../features/appNotifications/appNotificationsSlice";

const reducer = combineReducers({
  oidc: oidcReducer,
  appNotifications: appNotificationsReducer,
});

export default reducer;
