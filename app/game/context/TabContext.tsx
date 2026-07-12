"use client";

import { createContext, useState, ReactNode } from "react";

export const TabContext = createContext({
  activeTab: "test",
  activeIndex: 0,
  setActiveTab: (tabKey: string, activeIndex?: number) => {},
});

export function TabContextProvider({
  children,
  defaultTab,
}: {
  children: ReactNode;
  defaultTab: string;
}) {
  const [activeTab, _setActiveTab] = useState(defaultTab);
  const [activeIndex, _setActiveIndex] = useState(0);

  const setActiveTab = (tabKey: string, activeIndex: number = 0) => {
    _setActiveTab(tabKey);
    _setActiveIndex(activeIndex);
  };

  return (
    <TabContext.Provider value={{ activeTab, activeIndex, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}
