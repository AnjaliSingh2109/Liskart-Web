import { createSlice } from "@reduxjs/toolkit";

type TUserDetailState = {
    name: string;
    email: string;
};

const initialState: TUserDetailState = {
    name: "",
    email: "",
};

const userDetailSlice = createSlice({
    name: "userDetails",
    initialState,
    reducers: {
        setUserDetail: (_state, actions) => {
            return actions.payload;
        },
    },
});

export const { setUserDetail } = userDetailSlice.actions;

export default userDetailSlice.reducer;
