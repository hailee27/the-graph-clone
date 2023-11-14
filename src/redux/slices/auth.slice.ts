import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostLoginResponse, TypeUser } from '../endpoints/user';

const initialState: PostLoginResponse = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAccessToken: (state, action: PayloadAction<string | undefined | null>) => {
      state.accessToken = action.payload;
    },
    updateUserProfile: (state, action: PayloadAction<TypeUser>) => {
      state.user = action.payload;
    },
  },
});
export const { updateAccessToken, updateUserProfile } = authSlice.actions;

export default authSlice.reducer;
