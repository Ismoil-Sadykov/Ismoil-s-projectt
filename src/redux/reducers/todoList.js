import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      name: "Ismoil",
      age: 18,
      id: 1,
    },
    {
      name: "Azimullo",
      age: 16,
      id: 2,
    },
    {
      name: "Abubakr",
      age: 16,
      id: 3,
    },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter((e) => e.id != payload);
    },
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
  },
});

export const { deleteUser, addUser } = counterSlice.actions;

export default counterSlice.reducer;
