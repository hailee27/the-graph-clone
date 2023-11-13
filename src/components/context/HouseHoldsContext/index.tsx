import React, { createContext, useContext, useMemo, useState } from 'react';

interface TypeHouseHoldsContext {
  contentPrint?: string;
  setContentPrint: React.Dispatch<React.SetStateAction<string | undefined>>;
}
const HouseHoldsContext = createContext<TypeHouseHoldsContext | undefined>(undefined);
export const HouseHoldsProvider = ({ children }: { children: React.ReactNode }) => {
  const [contentPrint, setContentPrint] = useState<string | undefined>(undefined);
  const contextValue = useMemo<TypeHouseHoldsContext>(
    () => ({
      setContentPrint,
      contentPrint,
    }),
    [contentPrint]
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
