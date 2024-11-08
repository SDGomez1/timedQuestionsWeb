import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "./features/stateSlice";
export const store = configureStore({
  reducer: { stateSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
