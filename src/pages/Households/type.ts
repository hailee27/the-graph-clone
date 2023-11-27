export interface TypeContentHouseHold {
  age: number;
  nameKanji: {
    firstName: string;
    lastName: string;
  };
  nameKatakana: {
    firstName: string;
    lastName: string;
  };
  gender: string;
  birthDay: {
    year: number;
    month: number;
    day: number;
  };
  address: {
    name: string;
    code: string;
    prefectures: string;
    municipalities: string;
    street: string;
  };
  lifeInsurance: {
    lifeInsurance1: {
      type: string;
      fee: string;
    };
    lifeInsurance2: {
      type: string;
      fee: string;
    };
  };
  household: string;
  saving: {
    monthly: string;
    totalAmount: string;
  };
  gambling: {
    type: string;
    content: string;
  };
  hobbies: string;
  memo: string;
  placeOfWork: {
    companyName: string;
    capital: string;
    numberOfEmployees: string;
  };
  salary: {
    annualIncome: string;
    monthlytakehomePay: string;
  };
  dutyStation: string;
  lengthOfService: string;
  transfer: string;
  desireToChangeJobs: string;
  commutingTime: {
    type: string;
    time: string;
  };
  placeOfBirth: string;
  familyHome: {
    familyHome1: {
      type: string;
      age: string;
    };
    familyHome2: {
      type: string;
      age: string;
    };
  };
  brothers: string;
  thoseWholiveAtHome: {
    thoseWholiveAtHome1: {
      relationship: string;
      age: string;
    };
    thoseWholiveAtHome2: {
      relationship: string;
      age: string;
    };
  };
  inheritance: string;
  nursingCare: string;
  workMemo: string;
  familyMemo: string;
}
export interface CommonType {
  newHouseInfor: {
    plannedNewHome: {
      plannedNewHome1: {
        relationship: string;
        age: string;
      };
    };
    budget: {
      type: string;
      breakdown: string;
      initialCostMovingFee: string;
      householdAppliancesCost: string;
      others: string;
    };
    desiredRent: {
      type: number;
      selfBurdenAmount: string;
      parking: string;
      other: string;
    };
    desiredFloorPlan: {
      floorPlan: string;
      breadth: string;
    };
    desiredAreaConditions: string;
    memo: string;
  };
  scholarships: {
    borrowing: {
      borrowing1: {
        kinds: string;
        borrower: string;
        numberOfYearsLeft: string;
        bonus: string;
        remainingDebt: string;
        monthly: string;
        delay: string;
        guarantor: string;
      };
    };
    memo: string;
  };
}
export interface TypeFormFutureHome {
  liveInRetirement: string;
  reasonPurchasingHome: string;
  buyHome: {
    age: string;
    note: string;
  };
  ownHome: {
    have: string;
    note: string;
  };
  retirementSaving: {
    maximum: string;
    untilAge60: number;
    annual: string;
  };
  other: string;
}
export interface TypeFormLifeDiagnosis {
  householdFinance: {
    savingStatus: string;
    wastefulFixedCosts: string;
    variableCosts: string;
    loanDebt: string;
    childbirthAndChildcare: string;
  };
  livingEnvironment: {
    comfort: string;
    housework: string;
    spaceStorageCapacity: string;
    fulfillmentofPrivateLife: string;
    healthConsiderations: string;
    childbirthAndChildcare: string;
  };
  regardingMeasures: {
    necessarySecurity: string;
    survivingFamily: string;
  };
  retirementMeasures: {
    retirementSaving: string;
    operationalFunds: string;
    assetFormation: string;
    reducingExpensesInRetirement: string;
    securingHousingForRetirement: string;
  };
  disasterCountermeasures: {
    earthquakeFireTyphoon: string;
    securingaLifeline: string;
    foodStockpilingAndDisasterPrevention: string;
    securingFunds: string;
  };
  healthMeasures: {
    selfCateringEnvironment: string;
    immunityUpEnvironment: string;
  };
}
