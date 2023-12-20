import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DialogState {
  isDialogOpen: boolean;
  textFieldValue: string;
}

const initialState: DialogState = {
  isDialogOpen: false,
  textFieldValue: '',
};

const DialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog: (state) => {
      state.isDialogOpen = true;
    },
    closeDialog: (state) => {
      state.isDialogOpen = false;
    },
    setTextFieldValue: (state, action: PayloadAction<string>) => {
      state.textFieldValue = action.payload;
    },
  },
});

export const { openDialog, closeDialog, setTextFieldValue } = DialogSlice.actions;
export default DialogSlice.reducer;