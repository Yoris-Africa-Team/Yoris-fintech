'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define context type
interface DashboardContextType {
  activeComponent: 'firstView' | 'topUp' | 'wallet' | 'top-passcode' | 'with-passcode' | 'withdraw' | 'sendMoney';
  previousComponent: 'firstView' | 'topUp' | 'wallet' | 'top-passcode' | 'with-passcode' | 'withdraw' | 'sendMoney'| null;
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
  const [activeComponent, setActiveComponentState] = useState<DashboardContextType['activeComponent']>('firstView');
  const [previousComponent, setPreviousComponent] = useState<DashboardContextType['previousComponent']>(null);
  const [replaceWithContacts, setReplaceWithContacts] = useState(false);

  const setActiveComponent = (component: DashboardContextType['activeComponent']) => {
    setPreviousComponent(activeComponent); // Track the previous component
    setActiveComponentState(component);
  };

  return (
    <DashboardContext.Provider value={{ activeComponent, previousComponent, replaceWithContacts, setActiveComponent, setReplaceWithContacts }}>
      {children}
    </DashboardContext.Provider>
  );
};
