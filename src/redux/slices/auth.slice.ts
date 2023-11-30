import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostLoginResponse, TypeUser } from '../endpoints/user';
import { PURGE } from 'redux-persist';

const initialState: PostLoginResponse = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAccessToken: (state, action: PayloadAction<string | undefined | null>) => {
      state.accessToken = action.payload;
    },
    updateRefreshToken: (state, action: PayloadAction<string | undefined | null>) => {
      state.refreshToken = action.payload;
    },
    updateUserProfile: (state, action: PayloadAction<TypeUser>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});
export const { updateAccessToken, updateUserProfile, updateRefreshToken } = authSlice.actions;

export default authSlice.reducer;
