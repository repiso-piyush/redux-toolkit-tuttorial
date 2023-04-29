import { configureStore, createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: ["Dark Towers", "Haryy Potter"],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  }
});

const songsSlice = createSlice({
  name: "song",
  initialState: ["old song", "new song"],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  }
});

const store = configureStore({
  reducer: {
    //defines global state structure
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer
  }
});

// console.log(JSON.stringify(store.getState()))

// store.dispatch({
//   type:"song/addSong",
//   payload:"very new Song"
// })
// console.log(JSON.stringify(store.getState()))

// console.log(songsSlice.actions.addSong('Despacito'))

// store.dispatch(
//    songsSlice.actions.addSong('Despacito')
// )
// console.log(JSON.stringify(store.getState()))

export { store };
export const { addMovie, removeMovie } = moviesSlice.actions;
export const { addSong, removeSong } = songsSlice.actions;
