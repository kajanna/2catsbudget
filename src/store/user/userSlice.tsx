import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string | null;
  email: string | null;
  password: string | null;
}

const initialState = {
  name: null,
  email: null,
  password: null,
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: UserState, action: PayloadAction<{}>) => {
      console.log("LOGGING", state.name, action);
    },
    logout: (state: UserState) => {
      console.log("LOGOUT");
    },
    isLoggedCheck: (state: UserState, action: PayloadAction<{}>) => {
      console.log("ISLOGGEDCHECK", state.name, action);
    },
    register: (state: UserState, action: PayloadAction<{}>) => {
      console.log("REGISTER", state.name, action);
    },
  },
});

export const { login, logout, isLoggedCheck, register } = userSlice.actions;
export default userSlice.reducer
