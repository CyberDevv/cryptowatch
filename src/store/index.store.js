import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user.store';

export default configureStore({
   reducer: {
      user: userReducer,
   },
});
