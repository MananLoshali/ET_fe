// import { createStore } from "@reduxjs/toolkit";

// const reducerFn = (state = 0, action) => {
//   console.log("reducer called");
//   console.log(state);
//   if (action.type === "INCREMENT") {
//     return state + action.payload;
//   } else if (action.type === "DECREMENT") {
//     return state - action.payload;
//   }
//   return state;
// };

// export const store = createStore(reducerFn);

// store.subscribe(() => {
//   console.log(`current state ${store.getState()}`);
// });

// store.dispatch({          //THIS IS THE ACTION
//   type: "INCREMENT",      //WHICH TELLS WHAT TO DO
//   payload: 2,
// });

// store.dispatch({
//   type: "INCREMENT",
//   payload: 2,
// });
// store.dispatch({
//   type: "DECREMENT",
//   payload: 2,
// });
// store.dispatch({
//   type: "INCREMENT",
//   payload: 2,
// });

// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const slice = createSlice({
//   name: "test",
//   initialState: { counter: 0 },
//   reducers: {
//     inc(state, action) {
//       state.counter++;
//     },
//     dec(state, action) {
//       state.counter--;
//     },
//     addBy(state, action) {
//       state.counter += action.payload;
//     },
//   },
// });

// export const actions = slice.actions;

// const store = configureStore({
//   reducer: slice.reducer,
// });
// export default store;

// store.subscribe(() => {
//   console.log(`value of the current state ${store.getState().counter}`);
// });

// store.dispatch(slice.actions.inc());
// store.dispatch(slice.actions.dec());
// store.dispatch(slice.actions.addBy(10));
