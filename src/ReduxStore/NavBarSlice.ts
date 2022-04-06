import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavBarState {
  value: number;
}

const initNavBarState: NavBarState = {
  value: 0,
};

const navBarSlice = createSlice({
  name: "navBarState",
  initialState: initNavBarState,
  reducers: {
    setNavState: (state, action: PayloadAction<{ value: number }>) => {
      state.value = action.payload.value;
      return state;
    },
  },
});

export const { setNavState } = navBarSlice.actions;

export default navBarSlice.reducer;
