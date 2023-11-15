import { notification } from 'antd';
import { NotificationInstance } from 'antd/es/notification/interface';
import { createContext, useContext, useMemo } from 'react';

interface TypeNotificationContext {
  openNotification: NotificationInstance;
}

const NotificationContext = createContext<TypeNotificationContext | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [api, contextHolder] = notification.useNotification();

  const contextValue = useMemo<TypeNotificationContext>(
    () => ({
      openNotification: api,
    }),
    [api]
  );

  return (
    <NotificationContext.Provider value={contextValue}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const popups = useContext(NotificationContext);
  if (popups == null) {
    throw new Error('useFlightSearchContext() called outside of a FlightSearchProvider?'); // an alert is not placed because this is an error for the developer not the user
  }
  return popups;
};
export default useNotificationContext;
