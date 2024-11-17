import { createSlice } from '@reduxjs/toolkit';
import Namespace from '../namespace';

type InitialStateType = {
  name: string;
};
const InitialState : InitialStateType = {
  name: 'none'
};
const userActivitySlice = createSlice({
  name: Namespace.userActivity,
  initialState: InitialState,
  reducers: {},
})
export default userActivitySlice;
