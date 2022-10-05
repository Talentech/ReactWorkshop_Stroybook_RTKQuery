import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityId,
  EntityState,
} from "@reduxjs/toolkit";
import Axios from "axios";
import { IPeople, ISWApiResponse } from "src/@types/star-wars";

const scope = `@people`;

enum Actions {
  FETCH_ALL = "FETCH_ALL",
  FETCH_ONE = "FETCH_ONE",
}

const actionProvider = (actionName: Actions) => `${scope}/${actionName}`;

const peopleService = {
  getAllPeople: () => Axios.get(`${process.env.SWAPI}/people`),
  getPeopleById: (id: string) => Axios.get(`${process.env.SWAPI}/people/${id}`),
};

export const fetchAllPeople = createAsyncThunk<ISWApiResponse<IPeople>>(
  actionProvider(Actions.FETCH_ALL),
  async () =>
    peopleService.getAllPeople().then(({ data }) =>
      data.results.map((p: IPeople) => ({
        ...p,
        // @ts-ignore
        id: p.url.split("people")[1].replaceAll("/", ""),
      }))
    )
);

export const fetchPeopleById = createAsyncThunk<IPeople, string>(
  actionProvider(Actions.FETCH_ONE),
  async (id) =>
    peopleService.getPeopleById(id).then(({ data }) => ({
      ...data,
      id: data.url.split("people")[1].replaceAll("/", ""),
    }))
);

const peopleAdapter = createEntityAdapter<IPeople>();

export const { reducer, actions } = createSlice({
  name: "people",
  initialState: peopleAdapter.getInitialState({ loading: false }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPeople.fulfilled, (state, entities) => {
      state.loading = false;
      peopleAdapter.setAll(state, entities as any);
    });
    builder.addCase(fetchAllPeople.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPeopleById.fulfilled, peopleAdapter.upsertOne);
  },
});

const peopleSelectors = peopleAdapter.getSelectors<{
  people: EntityState<IPeople>;
}>((state) => state.people);

export const peopleLoadingStateSelector = (store: {
  people: EntityState<IPeople> & any;
}): boolean => store.people.loading;

export const allPeopleSelector = (store: { people: EntityState<IPeople> }) =>
  peopleSelectors.selectAll(store);

export const singlePeopleSelector = (
  store: { people: EntityState<IPeople> },
  id: EntityId
) => peopleSelectors.selectById(store, id);
