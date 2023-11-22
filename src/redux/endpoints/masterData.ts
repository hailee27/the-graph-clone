import { api } from '../api';

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMasterData: build.query<MasterDataResponse[], MasterDataParams>({
      query: () => ({
        url: 'master-data',
      }),
    }),
    getMasterDataDistinct: build.query<MasterDataResponseDistinct, MasterDataDistinctParams>({
      query: (queryArg) => ({
        url: `master-data/${queryArg.distinct}`,
        method: 'GET',
        params: { code: queryArg.code },
      }),
    }),
  }),
});
// TYPE getMasterData
export type SelectionsType = {
  key?: string | undefined;
  name?: string | undefined;
  nameEn?: string | undefined;
  additionsData?: string | null | undefined;
};

export type MasterDataResponse = {
  key?: string | undefined;
  name?: string | undefined;
  nameEn?: string | undefined;
  selections?: SelectionsType[];
};

export type MasterDataParams = void;

// TYPE getMasterDataDistinct
export type DataMasterDataResponseDistinct = {
  code: number;
  prefecture: string;
  neighborhood: string | undefined;
  city: string;
};

export type MasterDataResponseDistinct = {
  totals: number;
  data: DataMasterDataResponseDistinct[];
};
export type MasterDataDistinctParams = {
  distinct: 'code' | string;
  code?: number | null;
};
export { injectedRtkApi as MasterDataApi };
export const {
  useGetMasterDataQuery,
  useLazyGetMasterDataQuery,
  useGetMasterDataDistinctQuery,
  useLazyGetMasterDataDistinctQuery,
} = injectedRtkApi;
