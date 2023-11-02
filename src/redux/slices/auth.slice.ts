import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface AuthSliceShape {
  accessToken?: string | null;
}
const initialState: AuthSliceShape = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
  },
});
export const { updateAccessToken } = authSlice.actions;

export default authSlice.reducer;
