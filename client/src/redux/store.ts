import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const reducer = {
};
const store = configureStore({
  reducer,
});
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export default store;
