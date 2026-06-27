"use client";

import { createContext, useState, ReactNode } from "react";

type TabContextType = {
  activeTab: string;
  setActiveTab: (tabKey: string) => void;
}

export const TabContext = createContext<TabContextType | undefined>(undefined);

export function TabContextProvider({
  children,
  defaultTab,
}: {
  children: ReactNode;
  defaultTab: string;
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}
