import { createSlice } from "@reduxjs/toolkit";

//dispatch
import { dispatch } from "../store";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", //can be contact, STARRED msgs, SHARED msgs
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    //Toggle Sidebar
    toggleSideBar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
  },
});

//
export function ToggleSideBar() {
  return async () => {
    dispatch(slice.actions.toggleSideBar());
  };
}

export function UpdateSidebarType(type) {
  return async () => {
    dispatch(slice.actions.updateSidebarType({ type }));
  };
}

//Reducer
export default slice.reducer;
