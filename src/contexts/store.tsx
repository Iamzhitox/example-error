"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  notifications: string[];
  setNotifications: Dispatch<SetStateAction<string[]>>;
  openNotifications: boolean;
  setOpenNotifications: Dispatch<SetStateAction<boolean>>;
  pushNotification: (newNotification: string) => void;
}

const AuxiliarContext = createContext<ContextProps>({
  notifications: [],
  setNotifications: (): string[] => [],
  openNotifications: false,
  setOpenNotifications: (): boolean => false,
  pushNotification: () => {},
});

export const AuxiliarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notifications, setNotifications] = useState(getNotifications);
  const [openNotifications, setOpenNotifications] = useState(false);

  function getNotifications() {
    const gettingNotifications = typeof window !== "undefined" && window.sessionStorage.getItem("notifications");
    const notificationsFormatted: string[] = gettingNotifications
      ? JSON.parse(gettingNotifications)
      : [
          "Notification ID_#001: lorem ipsum",
          "Notification ID_#002: lorem ipsum",
        ];
    typeof window !== "undefined" && window.sessionStorage.setItem(
      "notifications",
      JSON.stringify(notificationsFormatted)
    );
    return notificationsFormatted;
  }

  function pushNotification(newNotification: string) {
    setNotifications((prev) => [...prev, newNotification]);
    typeof window !== "undefined" && window.sessionStorage.setItem(
      "notifications",
      JSON.stringify([...notifications, newNotification])
    );
  }

  return (
    <AuxiliarContext.Provider
      value={{
        notifications,
        setNotifications,
        openNotifications,
        setOpenNotifications,
        pushNotification,
      }}
    >
      {children}
    </AuxiliarContext.Provider>
  );
};

export const useAuxiliarContext = () => useContext(AuxiliarContext);
