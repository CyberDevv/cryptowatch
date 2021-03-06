import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user.store';
import watchlistReducer from './watchlist.store';
import coinsReducer from './coins.store';
import coinsWithNoDataReducer from './coinsWithNoData.store';

export default configureStore({
   reducer: {
      user: userReducer,
      watchList: watchlistReducer,
      coins: coinsReducer,
      coinsWithNoData: coinsWithNoDataReducer,
   },
});
