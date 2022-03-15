import { useState, useContext, createContext } from 'react';

const InputFormContext = createContext({ isFormControllerAdded: false, handleFormControllerClick: () => {}, isEditBtnClicked: false, setIsEditBtnClicked: () => {}, clearFormStates: () => {} });
const useInputForm = () => useContext(InputFormContext);

const InputFormProvider = ({ children }) => {
    const [isFormControllerAdded, setIsFormControllerAdded] = useState(false);
    const [isEditBtnClicked, setIsEditBtnClicked] = useState(false);

    const clearFormStates = () => {
        if(isFormControllerAdded) {
            handleFormControllerClick();
        } else if(isEditBtnClicked) {
            setIsEditBtnClicked(false);
        }
    }
  
    const handleFormControllerClick= () => {
      console.log("Is Clicked??");
      isFormControllerAdded ? setIsFormControllerAdded(false): setIsFormControllerAdded(true);
    }
  
    return (
        <InputFormContext.Provider value={{ isFormControllerAdded, handleFormControllerClick, isEditBtnClicked, setIsEditBtnClicked, clearFormStates }}>
            {children}
        </InputFormContext.Provider>
    );
}

export { useInputForm, InputFormProvider };