import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface dummysliceProps{
    toggle:number,
}

const initialState:dummysliceProps = {
    toggle:0,
}

const dummySlice = createSlice({
    name:'dummy',
    initialState,
    reducers:{
        setToggle(state, action:PayloadAction<number>){
            state.toggle = action.payload;
        },
    }
});

export const {
    setToggle
} = dummySlice.actions;

export const getoggle = (state:{dummy:dummysliceProps}) => state.dummy.toggle;
export default dummySlice.reducer;