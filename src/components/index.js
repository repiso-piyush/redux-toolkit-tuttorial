import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSond(state, action) {
      state.push(action.payload);
    }
    // removeSong(state,action){

    // }
  }
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer
  }
});

console.log(store);
