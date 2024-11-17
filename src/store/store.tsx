import PizzaAPI from '@/feature/rtkQuery';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(PizzaAPI.middleware)
});
setupListeners(store.dispatch);
export default store;
