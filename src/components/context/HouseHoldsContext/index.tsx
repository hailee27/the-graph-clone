import React, { createContext, useContext, useMemo } from 'react';
import { useGetMasterDataQuery } from '../../../redux/endpoints/masterData';
import { DefaultOptionType } from 'antd/es/select';

interface TypeHouseHoldsContext {
  relationshipInParantHome?: DefaultOptionType[] | undefined;
  relationshipNewResident?: DefaultOptionType[] | undefined;
  budgetAmountForNewHouse?: DefaultOptionType[] | undefined;
  InitialCostMovingFee?: DefaultOptionType[] | undefined;
  householdApplianceCosts?: DefaultOptionType[] | undefined;
  others?: DefaultOptionType[] | undefined;
  desiredRent?: DefaultOptionType[] | undefined;
  selfPayAmount?: DefaultOptionType[] | undefined;
  desiredFloorPlan?: DefaultOptionType[] | undefined;
  breadth?: DefaultOptionType[] | undefined;
  borrowing?: DefaultOptionType[] | undefined;
}
const HouseHoldsContext = createContext<TypeHouseHoldsContext | undefined>(undefined);
export const HouseHoldsProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: masterData } = useGetMasterDataQuery();

  // Relationship with prospective new resident
  const relationshipInParantHome = useMemo(() => {
    const data = masterData?.find((e) => e.key === '36_if_you_live_in_your_parents_home_your_relationship')?.selections;
    return data?.map((e) => ({
      label: e.name,
      value: e.nameEn,
    })) as DefaultOptionType[];
  }, [masterData]);
  //Relationship with prospective new resident
  const relationshipNewResident = useMemo(() => {
    const data = masterData?.find((e) => e.key === '41_relationship_with_prospective_new_resident')?.selections;
    return data?.map((e) => ({
      label: e.name,
      value: e.nameEn,
    })) as DefaultOptionType[];
  }, [masterData]);

  //Budget amount for new house"
  const budgetAmountForNewHouse = useMemo(() => {
    const data = masterData?.find((e) => e.key === '43_budget_amount_for_new_house')?.selections;
    return data?.map((e) => ({
      label: e.name,
      value: e.nameEn,
    })) as DefaultOptionType[];
  }, [masterData]);

  //Initial cost moving fee
  const InitialCostMovingFee = useMemo(() => {
    const data = masterData?.find((e) => e.key === '45_initial_cost_moving_fee')?.selections;
    return data?.map((e) => ({
      label: e.name,
      value: e.nameEn,
    })) as DefaultOptionType[];
  }, [masterData]);

  // Household appliance costs
  const householdApplianceCosts = useMemo(() => {
    const data = masterData?.find((e) => e.key === '46_household_appliance_costs')?.selections;
    return data?.map((e) => ({
      label: e.name,
      value: e.nameEn,
    })) as DefaultOptionType[];
  }, [masterData]);

  // Others
  const others = useMemo(() => {
    const data = masterData?.find((e) => e.key === '47_others')?.selections;
    return data?.map((e) => ({
      label: e.name,
      value: e.nameEn,
    })) as DefaultOptionType[];
  }, [masterData]);

  // Desired rent
  const desiredRent = useMemo(() => {
    const data = masterData?.find((e) => e.key === '48_desired_rent')?.selections;
    return data?.map((e) => ({
      label: e.name,
      value: e.nameEn,
    })) as DefaultOptionType[];
  }, [masterData]);

  // Self-pay amount
  const selfPayAmount = useMemo(() => {
    const data = masterData?.find((e) => e.key === '49_self_pay_amount')?.selections;
    return data?.map((e) => ({
      label: e.name,
      value: e.nameEn,
    })) as DefaultOptionType[];
  }, [masterData]);

  // Desired floor plan
  const desiredFloorPlan = useMemo(() => {
    const data = masterData?.find((e) => e.key === '52_desired_floor_plan')?.selections;
    return data?.map((e) => ({
      label: e.name,
      value: e.nameEn,
    })) as DefaultOptionType[];
  }, [masterData]);

  // Breadth
  const breadth = useMemo(() => {
    const data = masterData?.find((e) => e.key === '53_breadth')?.selections;
    return data?.map((e) => ({
      label: e.name,
      value: e.nameEn,
    })) as DefaultOptionType[];
  }, [masterData]);

  // Borrowing
  const borrowing = useMemo(() => {
    const data = masterData?.find((e) => e.key === '56_borrowing')?.selections;
    return data?.map((e) => ({
      label: e.name,
      value: e.nameEn,
    })) as DefaultOptionType[];
  }, [masterData]);

  const contextValue = useMemo(
    () => ({
      relationshipInParantHome,
      relationshipNewResident,
      budgetAmountForNewHouse,
      InitialCostMovingFee,
      householdApplianceCosts,
      others,
      desiredRent,
      selfPayAmount,
      desiredFloorPlan,
      breadth,
      borrowing,
    }),
    [
      relationshipInParantHome,
      relationshipNewResident,
      budgetAmountForNewHouse,
      InitialCostMovingFee,
      householdApplianceCosts,
      others,
      desiredRent,
      selfPayAmount,
      desiredFloorPlan,
      breadth,
      borrowing,
    ]
  );
  return <HouseHoldsContext.Provider value={contextValue}>{children}</HouseHoldsContext.Provider>;
};
export const useHouseHoldsContext = () => {
  const popups = useContext(HouseHoldsContext);
  if (popups == null) {
    throw new Error('useFlightSearchContext() called outside of a FlightSearchProvider?'); // an alert is not placed because this is an error for the developer not the user
  }
  return popups;
};

export default HouseHoldsContext;
