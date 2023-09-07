import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  ids: string[];
}

const initialState: InitialState = {
  ids: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<{ id: string }>) {
      state.ids.push(action.payload.id)
    },
    removeFavorite(state, action: PayloadAction<{ id: string }>) {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    },
  }
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;