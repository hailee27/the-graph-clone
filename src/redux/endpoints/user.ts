import { api } from '../api';

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postLogin: build.mutation<PostLoginResponse, PostLoginParams>({
      query: (queryArg) => ({
        url: '/auth/login',
        method: 'POST',
        body: queryArg,
      }),
    }),
    postLogout: build.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
        // body: queryArg,
      }),
    }),
  }),
});

export type PostLoginResponse = {
  accessToken?: string | undefined | null;
  refreshToken?: string | undefined | null;
  user?: TypeUser;
};
export type TypeUser = {
  id?: number;
  name?: string;
  role?: string;
  twoFactorMethod?: string;
  isVerified?: boolean;
  uuid?: string;
  deletedByAdmin?: boolean;
  deletedFlg?: boolean;
  createdAt?: string;
  updatedAt?: string | undefined | null;
  deletedAt?: string | undefined | null;
  lastActive?: string;
  isVerifiedAt?: string;
  prefersEmailId?: number;
};
export type PostLoginParams = {
  email: string;
  password: string;
};
export { injectedRtkApi as UserApi };
export const { usePostLoginMutation, usePostLogoutMutation } = injectedRtkApi;
