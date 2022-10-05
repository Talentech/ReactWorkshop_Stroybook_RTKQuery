import { combineReducers } from "@reduxjs/toolkit";
import { reducer as oidcReducer } from "redux-oidc";
import { reducer as appNotificationsReducer } from "../features/appNotifications/appNotificationsSlice";
import { reducer as peopleReducer } from "../features/starwars/starWarsSlice";

const reducer = combineReducers({
  oidc: oidcReducer,
  appNotifications: appNotificationsReducer,
  people: peopleReducer,
});

export default reducer;
