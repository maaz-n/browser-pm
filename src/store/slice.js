import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  records: JSON.parse(localStorage.getItem("passwords")) || [],
  editMode: false,
  editingRecord: null,
  website: "",
  username: "",
  password: "",
};

export const myPasswordManager = createSlice({
  name: "PassOP",
  initialState,
  reducers: {
    addRecord: (state, action) => {
      const newRecord = action.payload;
      const isDuplicate = state.records.some(
        (record) =>
          record.website === newRecord.website &&
          record.username === newRecord.username &&
          record.password === newRecord.password
      );
      let isEmpty = false;
      if (
        newRecord.website === "" ||
        newRecord.username === "" ||
        newRecord.password === ""
      ) {
        isEmpty = true;
      }

      isDuplicate || isEmpty
        ? console.log("Cant add record")
        : state.records.push(newRecord);
    },
    deleteRecord: (state, action) => {
      const { id } = action.payload;
      const confirmation = confirm(
        "Are you sure you want to delete this record?"
      );
      if(confirmation){
        state.records = state.records.filter((record) => record.id !== id)
        localStorage.setItem("passwords", JSON.stringify(state.records))
      }
    },

    updateRecord: (state, action) => {
      const { id } = action.payload
      const recordToEdit = action.payload
      state.editingRecord = recordToEdit,
      state.records = state.records.filter((record) => record.id !== id)
    },

    enterEditMode: (state) => {
      state.editMode = true;
    },
    
    exitEditMode: (state) => {
      state.editMode = false;
    },
  },
});

export const {
  addRecord,
  deleteRecord,
  updateRecord,
  enterEditMode,
  exitEditMode,
} = myPasswordManager.actions;
export default myPasswordManager.reducer;
