import moment from 'moment';
import { CommonType, TypeContentHouseHold } from '../pages/Households/type';
import { PostUsersProfileParams, TypeBasicInformation } from '../redux/endpoints/userProflie';

export const formatInitalValue = (
  name: 'people' | 'wife' | 'husband',
  data: TypeBasicInformation,
  dataCommon: PostUsersProfileParams | null | undefined,
  gender?: 'FEMALE' | 'MALE' | 'NONE' | string
) => {
  return {
    [name]: {
      inforBasic: {
        nameKanji: {
          firstName: data.firstName,
          lastName: data.lastName,
        },
        nameKatakana: {
          firstName: data.firstNameKana,
          lastName: data.lastNameKana,
        },
        gender,
        email: data.email,
        birthDay: {
          day: Number(moment(data.birthday).format('DD')),
          month: Number(moment(data.birthday).format('MM')),
          year: Number(moment(data.birthday).format('YYYY')),
        },
        address: {
          name: data.currentAddress,
          code: String(data.postCode ?? 0),
          municipalities: data.municipality,
          prefectures: data.prefecture,
          street: data.buildingName,
        },
        household: data.householdAccountBook,
        saving: {
          monthly: isNaN(Number(data.savingsMonthly)) ? undefined : data.savingsMonthly,
          totalAmount: isNaN(Number(data.totalAmountOfSavings)) ? undefined : data.totalAmountOfSavings,
        },
        gambling: {
          type: data.gambling,
          content: data.gamblingOther,
        },
        hobbies: data.hobby,
        memo: data.basicMemo,
      } as TypeContentHouseHold,
      workInfor: {
        placeOfWork: {
          companyName: data.workplaceCompanyName,
          capital: !isNaN(Number(data.workplaceCapital)) ? data.workplaceCapital : undefined,
          numberOfEmployees: !isNaN(Number(data.workplaceNumberOfEmployees))
            ? data.workplaceNumberOfEmployees
            : undefined,
        },
        salary: {
          annualIncome: !isNaN(Number(data.salaryAnnual)) ? data.salaryAnnual : undefined,
          monthlytakehomePay: !isNaN(Number(data.salaryMonthly)) ? data.salaryMonthly : undefined,
        },
        dutyStation: data.workLocation,
        lengthOfService: data.lengthService,
        transfer: data.transfer,
        desireToChangeJobs: data.desireJob,
        commutingTime: {
          type: data.commutingMethod,
          time: data.commutingMethodNumber ? String(data.commutingMethodNumber) : null,
        },
        workMemo: data.workMemo,
      } as TypeContentHouseHold,
      familyInfor: {
        placeOfBirth: data.birthPlace,
        brothers: data.brother,
        inheritance: data.inheritance,
        nursingCare: data.nursingCare,
        familyMemo: data.familyMemo,
      } as TypeContentHouseHold,
    },
    common: {
      newHouseInfor: {
        budget: {
          type: dataCommon?.budgetAmount === 'undefined' ? null : dataCommon?.budgetAmount,
          breakdown: dataCommon?.breakdown,
          householdAppliancesCost: dataCommon?.householdApplianceCost,
          initialCostMovingFee: dataCommon?.initialCost,
          others: dataCommon?.others,
        },
        desiredRent: {
          type: Number(dataCommon?.desiredRent),
          selfBurdenAmount: dataCommon?.selfPayAmount,
          parking: isNaN(Number(dataCommon?.parking)) ? undefined : dataCommon?.parking,
          other: dataCommon?.parkingLotConsumptionTax,
        },
        desiredFloorPlan: {
          floorPlan: dataCommon?.desiredFloorPlan,
          breadth: dataCommon?.breadth === 'undefined' ? null : dataCommon?.breadth,
        },
        desiredAreaConditions: dataCommon?.desiredArea,
        memo: dataCommon?.newHouseMemo,
      },
      scholarships: {
        memo: dataCommon?.borrowingMemo,
      },
    } as CommonType,
  };
};
