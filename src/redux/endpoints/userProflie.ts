import { api } from '../api';

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postUsersProfile: build.mutation<PostUsersProfileResponse, PostUsersProfileParams>({
      query: (queryArg) => ({
        url: '/users/profile',
        method: 'POST',
        body: queryArg,
      }),
    }),
  }),
});

export type PostUsersProfileResponse = void;
export type PostUsersProfileParams = {
  basicInformation: TypeBasicInformation[];
  newHomePlans: TypeNewHomePlans[];
  borrowings: TypeBorrowings[];
  budgetAmount: string;
  breakdown: string;
  initialCost: string;
  householdApplianceCost: string;
  others: string;
  desiredRent: string;
  selfPayAmount: string;
  parking: string;
  parkingLotConsumptionTax: string;
  desiredFloorPlan: string;
  breadth: string;
  desiredArea: string;
};

export type TypeBasicInformation = {
  informationType: 'NONE' | string;
  firstName: string;
  lastName: string;
  firstNameKana: string;
  lastNameKana: string;
  birthday: string;
  currentAddress: string;
  postCode: number;
  prefecture: string;
  municipality: string;
  buildingName: string;
  lifeInsurance: string;
  monthlyPremiums: number[];
  householdAccountBook: string;
  savingsMonthly: string;
  totalAmountOfSavings: string;
  gambling: string;
  gamblingOther: string;
  hobby: string;
  basicMemo: string;
  workplaceCompanyName: string;
  workplaceCapital: string;
  workplaceNumberOfEmployees: string;
  salaryAnnual: string;
  salaryMonthly: string;
  workLocation: string;
  lengthService: string;
  transfer: string;
  desireJob: string;
  commutingMethod: string;
  commutingMethodNumber: string;
  workMemo: string;
  birthPlace: string;
  familyHomes: {
    name: string;
    age: number;
  }[];
  brother: string;
  yourRelationships: {
    name: string;
    age: number;
  }[];
  inheritance: string;
  nursingCare: string;
  familyMemo: string;
};
export type TypeNewHomePlans = {
  name: string;
  age: number;
};
export type TypeBorrowings = {
  borrower: number;
  remainingDebt: number;
  numberOfYearsLeft: number;
  monthly: number;
  bonus: number;
  delay: string;
  guarantor: string;
  tax: number;
  electric: number;
};
export { injectedRtkApi as UserProFileApi };
export const { usePostUsersProfileMutation } = injectedRtkApi;
