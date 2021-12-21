import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user.store';
import watchlistReducer from './watchlist.store';

export default configureStore({
   reducer: {
      user: userReducer,
      watchList: watchlistReducer,
   },
});
