import { createContext, useContext } from 'react';

const Context = createContext(undefined)

export const PageContextProvider = ({ value, children }) => {
  return <Context.Provider value={value}>{children}</Context.Provider>
}

const usePageContext = () => useContext(Context)

export default usePageContext;
