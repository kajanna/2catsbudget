import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface OptionsState {
    categories: string[]
};

const initialState = {
    categories: ["food", "bills", "hobby"], 
} as OptionsState


const optionsSlice = createSlice({
    name: "options",
    initialState,
    reducers: {
        addCategory: (state:OptionsState, action:PayloadAction) => {},
        deleteCategory: (state:OptionsState, action:PayloadAction) => {}
    }
})

export default optionsSlice.reducer;