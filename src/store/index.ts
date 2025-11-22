import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import dummyReducers from './dummySlice.ts';
import FileActionsReducer from './FileOperationsDataSlice.ts';

const store = configureStore({
    reducer: {
        dummy: dummyReducers,
        fileActions: FileActionsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;