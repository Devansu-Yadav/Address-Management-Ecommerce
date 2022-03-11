import { useState, useContext, createContext } from 'react';

const InputFormContext = createContext({ isFormControllerAdded: false, handleFormControllerClick: () => {}});
const useInputForm = () => useContext(InputFormContext);

const InputFormProvider = ({ children }) => {
    const [isFormControllerAdded, setIsFormControllerAdded] = useState(false);
  
    const handleFormControllerClick= () => {
      console.log("Is Clicked??");
      isFormControllerAdded ? setIsFormControllerAdded(false): setIsFormControllerAdded(true);
    }
  
    return (
        <InputFormContext.Provider value={{ isFormControllerAdded, handleFormControllerClick }}>
            {children}
        </InputFormContext.Provider>
    );
}

export { useInputForm, InputFormProvider };