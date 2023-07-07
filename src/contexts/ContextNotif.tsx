import { createContext, ReactNode, useState } from 'react';

interface ContextNotifProviderProps{
  children: ReactNode;
}

interface ContextNotifTypes{
  activeNotif: boolean;
  setActiveNotification: (newState: boolean) => void;
  text: string;
  setText: (newText: string) => void;
}

export const ContextNotif = createContext({} as ContextNotifTypes);

export const ContextNotifProvider = ({ children }: ContextNotifProviderProps) => {

  const [activeNotif, setActiveNotification] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  
  return(
    <ContextNotif.Provider 
      value={{ activeNotif, setActiveNotification, text, setText }}
    >
      {children}
    </ContextNotif.Provider>
  );
}