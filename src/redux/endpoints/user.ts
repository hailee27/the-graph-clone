/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '../api';

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPokemonByName: build.query<any, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});
export { injectedRtkApi as UserApi };
export const { useGetPokemonByNameQuery } = injectedRtkApi;
