'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define context type
interface DashboardContextType {
  activeComponent: 'firstView' | 'topUp' | 'wallet' | 'top-passcode' | 'with-passcode' | 'withdraw' | 'sendMoney'| 'acctInfo'| 'addNewCard'| 'addNewAcct'| 'addMomo';
  replaceWithContacts: boolean;
  setActiveComponent: (component: DashboardContextType['activeComponent']) => void;
  setReplaceWithContacts: (value: boolean) => void;
}

// Create the context
const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

// Custom hook to use the context
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};

// Provider component
export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [activeComponent, setActiveComponent] = useState<DashboardContextType['activeComponent']>('firstView');
  
  const [replaceWithContacts, setReplaceWithContacts] = useState(false);

  

  return (
    <DashboardContext.Provider value={{ activeComponent,  replaceWithContacts, setActiveComponent, setReplaceWithContacts }}>
      {children}
    </DashboardContext.Provider>
  );
};
