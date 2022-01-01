import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { value: { email: null } };

export const userSlice = createSlice({
   name: 'user',
   initialState: initialStateValue,
   reducers: {
      login: (state, action) => {
         state.user = action.payload;
      },

      logout: (state) => {
         state.user = initialStateValue;
      },
   },
});

export const { login, logout } = userSlice.actions;
// export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
