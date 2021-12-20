import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
   name: 'user',
   initialState: {
      user: {
         user: {
            name: null,
         },
      },
   },
   reducers: {
      login: (state, action) => {
         state.user = action.payload;
      },
      logout: (state) => {
         state.user = {
            data: {
               name: null,
            },
         };
      },
   },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
