
import React, { createContext, useState } from 'react';


export const DataContext = createContext();


export const DataProvider = ({ children }) => {
  const [formData, setFormData] = useState([]);

  const addData = (newData) => {
    setFormData((prevData) => [...prevData, newData]);
  };

  return (
    <DataContext.Provider value={{ formData, addData }}>
      {children}
    </DataContext.Provider>
  );
};
