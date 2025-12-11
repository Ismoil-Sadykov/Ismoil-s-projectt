import { create } from "zustand";

export const useData = create((set) => ({
  dataUsers: [
    {
      name: "Ismoil",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem tempore iure quos!?",
      age: 17,
      id: 1,
    },
    {
      name: "Azim",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem tempore iure quos!?",
      age: 16,
      id: 2,
    },
    {
      name: "Abubakr",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem tempore iure quos!?",
      age: 16,
      id: 3,
    },
    {
      name: "Muhsin",
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem tempore iure quos!?",
      age: 15,
      id: 4,
    },
  ],

  deleteUser: (id) =>
    set((state) => ({ dataUsers: state.dataUsers.filter((e) => e.id != id) })),

  editUser: (updateUser) =>
    set((state) => ({
      dataUsers: state.dataUsers.map((e) => {
        e.id === updateUser.id ? (e = updateUser) : e
        return e
      }
      ),
    })),
    addUsers: (newData) =>
      set((state) => ({ dataUsers: [...state.dataUsers, newData] })),
}));
