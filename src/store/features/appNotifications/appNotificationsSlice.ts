import {
  createEntityAdapter,
  createSlice,
  EntityId,
  createAction,
  Action,
  AnyAction,
} from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import { TalentechColors } from "@talentech/components";

export interface IAppNotification {
  id: string;
  content: string;
  color: Exclude<
    TalentechColors,
    TalentechColors.PRIMARY | TalentechColors.SECONDARY
  >;
  duration?: number;
}

// ACTIONS & THUNKS

const scope = `@appNotifications`;

enum Actions {
  ADD_APP_NOTIFICATION = "ADD_APP_NOTIFICATION",
  REMOVE_APP_NOTIFICATION = "REMOVE_APP_NOTIFICATION",
}

const actionProvider = (actionName: Actions) => `${scope}/${actionName}`;

export const addAppNotification = createAction<IAppNotification>(
  actionProvider(Actions.ADD_APP_NOTIFICATION)
);
export const removeAppNotification = createAction<string>(
  actionProvider(Actions.REMOVE_APP_NOTIFICATION)
);

// ENTITY ADAPTER

const appNotificationsAdapter = createEntityAdapter<IAppNotification>({
  selectId: (notification) => notification.id,
});

// REDUCER

interface RejectedAction extends Action {
  error: Error;
  meta: { requestId: string };
}

function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith("rejected");
}

export const { reducer, actions } = createSlice({
  name: "appNotifications",
  initialState: appNotificationsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAppNotification, appNotificationsAdapter.addOne)
      .addCase(removeAppNotification, appNotificationsAdapter.removeOne)
      .addMatcher(isRejectedAction, (state, action) => {
        appNotificationsAdapter.addOne(state, {
          id: action.meta.requestId,
          color: TalentechColors.DANGER,
          content: `${action.type} ${action.error.message}`,
        });
      });
  },
});

// SELECTORS

const getSliceSelector = appNotificationsAdapter.getSelectors<RootState>(
  (store) => store.appNotifications
);

export const singleAppNotification = (store: RootState, id: EntityId) =>
  getSliceSelector.selectById(store, id);

export const allAppNotifications = (store: RootState) =>
  getSliceSelector.selectAll(store);
