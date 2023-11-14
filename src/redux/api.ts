import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './store';
const baseUrl = import.meta.env.VITE_BASE_URL;

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const rootState = getState() as RootState;
    const token = rootState.auth.accessToken;
    if (token) {
      headers.set('Authorization', 'Bearer ' + token);
    }
    return headers;
  },
});
export const api = createApi({
  baseQuery,
  endpoints: () => ({}),
});
