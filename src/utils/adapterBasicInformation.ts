import { TypeContentHouseHold } from '../pages/Households/type';
import { TypeBasicInformation } from '../redux/endpoints/userProflie';

interface Props {
  data: TypeContentHouseHold;
  informationType: 'NONE' | 'WIFE' | 'HUSBAND';
}
export const verifyBasicInformationValue = ({ data, informationType }: Props) => {
  const res: TypeBasicInformation = {
    firstName: data?.nameKanji?.firstName ?? '',
    lastName: data?.nameKanji?.lastName ?? '',
    firstNameKana: data?.nameKatakana?.firstName ?? '',
    lastNameKana: data?.nameKatakana?.lastName ?? '',
    birthday: `${data?.birthDay?.year}-${data?.birthDay?.month}-${data?.birthDay?.day}` ?? '',
    basicMemo: data?.memo ?? '',
    currentAddress: data?.address?.name ?? '',
    postCode: Number(data?.address?.code) ?? 0,
    prefecture: data?.address?.prefectures ?? '',
    municipality: data?.address?.municipalities ?? '',
    buildingName: data?.address?.street ?? '',
    lifeInsurances:
      Object.values(data?.lifeInsurance ?? {}).map((e) => ({
        name: e.type ?? '',
        monthlyPremium: Number(e.fee) ?? '',
      })) ?? [],
    householdAccountBook: data?.household ?? '',
    savingsMonthly: data?.saving?.monthly ?? '',
    totalAmountOfSavings: data?.saving?.totalAmount ?? '',
    savingsRate: ((Number(data?.saving?.monthly) / Number(data?.saving?.totalAmount)) * 100).toFixed(1) ?? '',
    gambling: data?.gambling?.type ?? '',
    gamblingOther: data?.gambling?.content ?? '',
    hobby: data?.hobbies ?? '',
    workplaceCompanyName: data?.placeOfWork?.companyName ?? '',
    workplaceCapital: data?.placeOfWork?.capital ?? '',
    workplaceNumberOfEmployees: data?.placeOfWork?.numberOfEmployees ?? '',
    salaryMonthly: data?.salary?.monthlytakehomePay ?? '',
    salaryAnnual: data?.salary?.annualIncome ?? '',
    workLocation: data?.dutyStation ?? '',
    lengthService: data?.lengthOfService ?? '',
    transfer: data?.transfer ?? '',
    desireJob: data?.desireToChangeJobs ?? '',
    commutingMethod: data?.commutingTime?.type ?? '',
    commutingMethodNumber: Number(data?.commutingTime?.time) ?? '',
    workMemo: data?.workMemo ?? '',
    birthPlace: data?.placeOfBirth ?? '',
    familyHomes: Object.values(data?.familyHome ?? {}).map((e) => ({ age: Number(e.age) ?? '', name: e.type })) ?? [],
    brother: data?.brothers ?? '',
    yourRelationships:
      Object.values(data?.thoseWholiveAtHome ?? {}).map((e) => ({
        age: Number(e.age) ?? 0,
        name: e.relationship ?? '',
      })) ?? '',
    inheritance: data?.inheritance ?? '',
    nursingCare: data?.nursingCare ?? '',
    informationType,
    familyMemo: data?.familyMemo ?? '',
  };
  return res;
};
