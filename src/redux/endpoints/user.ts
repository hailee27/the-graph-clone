import { api } from '../api';
import { PostUsersProfileParams } from './userProflie';

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postLogin: build.mutation<PostLoginResponse, PostLoginParams>({
      query: (queryArg) => ({
        url: '/auth/login',
        method: 'POST',
        body: queryArg,
      }),
    }),
    postLogout: build.mutation<PostLogoutResponse, PostLogoutParams>({
      query: (queryArg) => ({
        url: '/auth/logout',
        method: 'POST',
        body: queryArg,
      }),
    }),
    postVerifyPassword: build.mutation<PostVerifyPasswordResponse, PostVerifyParams>({
      query: (queryArg) => ({
        url: '/auth/verify-password',
        method: 'POST',
        body: queryArg,
      }),
    }),
    getMe: build.query<GetGetMeResponse, GetGetParams>({
      query: () => ({
        url: '/me',
        method: 'GET',
      }),
    }),
  }),
});

export type PostLogoutResponse = {
  success: boolean;
};
export type PostLogoutParams = {
  token: string;
};
export type GetGetParams = void;
export type GetGetMeResponse = TypeUser;

export type PostLoginResponse = {
  accessToken?: string | undefined | null;
  refreshToken?: string | undefined | null;
  user?: TypeUser;
  email?: string | undefined | null;
  verifyToken?: string | undefined | null;
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
  userProfile?: PostUsersProfileParams | null;
};
export type PostLoginParams = {
  email: string;
  password: string;
};

export type PostVerifyPasswordResponse = void;
export type PostVerifyParams = {
  token: string;
  password: string;
  passwordConfirm: string;
};
export { injectedRtkApi as UserApi };
export const {
  usePostLoginMutation,
  usePostLogoutMutation,
  usePostVerifyPasswordMutation,
  useGetMeQuery,
  useLazyGetMeQuery,
} = injectedRtkApi;
