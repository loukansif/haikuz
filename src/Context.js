import React, { createContext, useState } from "react";

export const DataContext = createContext();

const ContextProvider = (props) => {
  const [userContext, setUserContext] = useState(null);
  return (
    <DataContext.Provider value={{ userContext, setUserContext }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
