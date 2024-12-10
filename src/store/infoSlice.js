import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  status: "created",
  editedData: null,
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    createData: (state, action) => {
      state.value.push(action.payload);
    },
    saveData(state, action) {
      state.editedData = action.payload;
      state.status = "updated";
    },
    editData: (state, action) => {
      const index = state.value.findIndex(
        (item) => item.id == action.payload.id
      );
      console.log(index);

      if (index !== -1) {
        state.value.splice(index, 1, {
          id: action.payload.id,
          title: action.payload.title,
          info: action.payload.info,
          image: action.payload.image,
        });
      }
    },
    deleteData: (state, action) => {
      const index = state.value.findIndex(
        (item) => item.id == action.payload.id
      );
      if (index) {
        state.value.splice(index, 1);
      }
    },
  },
});

export const { createData, editData, saveData, deleteData } =
  infoSlice.actions;

export default infoSlice.reducer;
