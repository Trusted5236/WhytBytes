"use client"
import { createContext, useState } from 'react';


export const FormContext = createContext();


export const FormProvider = ({ children }) => {
  const [formData2, setFormData] = useState({
    rank: "0",
    precentile: "0",
    scores:"0"
  });

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };


  return (
    <FormContext.Provider value={{ formData2, updateFormData}}>
      {children}
    </FormContext.Provider>
  );
};
