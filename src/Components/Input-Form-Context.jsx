import { useState, useContext, createContext } from 'react';

const InputFormContext = createContext({   
        isFormControllerAdded: false, 
        handleFormControllerClick: () => {}, 
        isEditBtnClicked: false, 
        setIsEditBtnClicked: () => {}, 
        clearFormStates: () => {},
        formData: {},
        handleFormData: () => {} 
});

const useInputForm = () => useContext(InputFormContext);

const InputFormProvider = ({ children }) => {
    const [isFormControllerAdded, setIsFormControllerAdded] = useState(false);
    const [isEditBtnClicked, setIsEditBtnClicked] = useState(false);

    const defaultFormData = {
        "name": "",
        "mobile_no": "",
        "pincode": "",
        "city": "",
        "address": "",
        "alt_mobile_no": "",
        "state": ""
    };
    const [formData, setFormData] = useState(defaultFormData);

    const clearFormStates = () => {
        if(isFormControllerAdded) {
            handleFormControllerClick();
        } else if(isEditBtnClicked) {
            setIsEditBtnClicked(false);
        }
    }

    const handleFormData = (data) => {
        setFormData({...data});
    }
  
    const handleFormControllerClick= () => {
      console.log("Is Clicked??");
      isFormControllerAdded ? setIsFormControllerAdded(false): setIsFormControllerAdded(true);
    }
  
    return (
        <InputFormContext.Provider value={{ isFormControllerAdded, handleFormControllerClick, isEditBtnClicked, setIsEditBtnClicked, clearFormStates, defaultFormData, formData, handleFormData }}>
            {children}
        </InputFormContext.Provider>
    );
}

export { useInputForm, InputFormProvider };