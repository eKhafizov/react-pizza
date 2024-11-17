import { combineReducers } from '@reduxjs/toolkit';
import Namespace from './namespace';
import userActivitySlice from './userActivity/userActivitySlice';
import serverDataSlice from './serverData/serverDataSlice';
import PizzaAPI from '@/feature/rtkQuery';

const rootReducer = combineReducers({
  [Namespace.userActivity] : userActivitySlice.reducer,
  [Namespace.serverData] : serverDataSlice.reducer,
  [Namespace.queryData] : PizzaAPI.reducer
});
export default rootReducer;
