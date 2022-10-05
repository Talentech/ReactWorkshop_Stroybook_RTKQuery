import { configureStore } from "@reduxjs/toolkit";
import { loadUser } from "redux-oidc";
import reducer from "@store/reducer";
import userManager from "@auth/UserManager";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { peopleApi } from "./features/starwars/starWarsSlice";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["redux-oidc/USER_FOUND"],
        ignoredPaths: ["oidc.user"],
      },
    }).concat(peopleApi.middleware),
});

setupListeners(store.dispatch);
loadUser(store, userManager);

export type RootState = ReturnType<typeof store.getState>;

export default store;
