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
    updateUsersProfile: build.mutation<UpdateUsersProfileResponse, UpdateUsersProfileParams>({
      query: (queryArg) => ({
        url: `/users/${queryArg.id}/profile`,
        method: 'PUT',
        body: queryArg.params,
      }),
    }),
  }),
});
export type UpdateUsersProfileResponse = void;
export type UpdateUsersProfileParams = {
  id: string;
  params: PostUsersProfileParams;
};
export type PostUsersProfileResponse = void;
export type PostUsersProfileParams = {
  // basicInformation: TypeBasicInformation[];
  // newHomePlans: TypeNewHomePlans[];
  // borrowings: TypeBorrowings[];
  // budgetAmount: string;
  // breakdown: string;
  // initialCost: string;
  // householdApplianceCost: string;
  // others: string;
  // desiredRent: string;
  // selfPayAmount: string;
  // parking: string;
  // parkingLotConsumptionTax: string;
  // desiredFloorPlan: string;
  // breadth: string;
  // desiredArea: string;
  basicInformation: TypeBasicInformation[];

  gender: string | undefined;

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

  newHouseMemo: string;

  borrowings: BorrowingDto[];

  borrowingMemo: string;

  newHomePlans: RelationshipDto[];

  userType: 'SINGLE' | 'MULTIPLE';

  aboutFutureHome: AboutFutureHomeDto;

  aboutLifeDiagnosis: AboutLifeDiagnosisDto;
  tax: number;
  electricBill: number;
};
export interface BorrowingDto {
  borrower: number;

  remainingDebt: number;

  numberOfYearsLeft: number;

  monthly: number;

  bonus: number;

  delay: string;

  guarantor: string;

  kinds: number;

  electric: number;
}
export interface AboutFutureHomeDto {
  retirementLiveWith: string;

  specificReasons: string;

  planToBuyYourOwnHome: number;

  planToBuyYourOwnHomeMemo: string;

  disadvantagesToOwning: string;

  disadvantagesToOwningMemo: string;

  maximumMonthlySavings: number;

  otherRequests: string;
}
export interface AboutLifeDiagnosisDto {
  householdSavings: boolean;

  householdLoan: boolean;

  householdWasteful: boolean;

  householdPreparingChild: boolean;

  householdBudget: boolean;

  livingComfort: boolean;

  livingPrivateLife: boolean;

  // livingHousework: boolean;

  livingStorageCapacity: boolean;

  livingHouseworkEfficiency: boolean;

  livingHealthConsideration: boolean;
  livingPreparingChild: boolean;
  emergencyUnnecessaryPayments: boolean;

  emergencySecuringHousing: boolean;

  retirementSavings: boolean;

  retirementExpenses: boolean;

  retirementOperational: boolean;

  retirementSecuring: boolean;

  retirementAsset: boolean;

  countermeasureEarthquake: boolean;

  countermeasureSecuringFundS: boolean;

  countermeasureSecuringLifelines: boolean;

  countermeasureStorageSpace: boolean;

  measureSelfCatering: boolean;

  measureImmunityBoosting: boolean;
}

export type RelationshipDto = {
  age?: number;
  name?: string;
};
export type LifeInsuranceDto = {
  name: string;
  monthlyPremium: number;
};
export type TypeBasicInformation = {
  id?: number | null | undefined;

  informationType?: 'NONE' | 'WIFE' | 'HUSBAND';

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

  lifeInsurances: LifeInsuranceDto[];

  householdAccountBook: string;

  savingsMonthly: string;

  totalAmountOfSavings: string;

  savingsRate: string;

  gambling: string;

  gamblingOther: string;

  hobby: string;

  basicMemo: string;

  // WorkInfomation

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

  commutingMethodNumber: number;

  workMemo: string;

  // FamilyInformation
  birthPlace: string;

  familyHomes?: RelationshipDto[];

  brother: string;

  yourRelationships: RelationshipDto[];

  inheritance: string;

  nursingCare: string;

  familyMemo: string;
};
// export type TypeNewHomePlans = {
//   name: string;
//   age: number;
// };
// export type TypeBorrowings = {
//   borrower: number;
//   remainingDebt: number;
//   numberOfYearsLeft: number;
//   monthly: number;
//   bonus: number;
//   delay: string;
//   guarantor: string;
//   tax: number;
//   electric: number;
// };
export { injectedRtkApi as UserProFileApi };
export const { usePostUsersProfileMutation, useUpdateUsersProfileMutation } = injectedRtkApi;
