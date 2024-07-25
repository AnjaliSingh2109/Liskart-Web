import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface HamburgerState {
    show: boolean;
}

const initialState: HamburgerState = {
    show: false,
};

const hamburgerSlice = createSlice({
    name: "hamburger",
    initialState,
    reducers: {
        setHamburgerShow(state, action: PayloadAction<boolean>) {
            state.show = action.payload;
        },
    },
});

export const { setHamburgerShow } = hamburgerSlice.actions;
export default hamburgerSlice.reducer;
