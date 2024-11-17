import { createSlice } from '@reduxjs/toolkit';
import Namespace from '../namespace';

type InitialStateType = {
  auth: string;
};
const InitialState : InitialStateType = {
  auth: 'NO_AUTH'
};
const serverDataSlice = createSlice({
  name: Namespace.serverData,
  initialState: InitialState,
  reducers: {},
})
export default serverDataSlice;
