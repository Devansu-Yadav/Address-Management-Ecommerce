import { useState, useContext, createContext } from 'react';

const FormErrorContext = createContext({
    addressDataErr: "",
    setAddressDataErr: () => {},
    isError: false,
    setIsError: () => {},
    errorFormField: "",
    setErrorFormField: () => {}
});

const useFormError = () => useContext(FormErrorContext);

const FormErrorProvider = ({ children }) => {
    const [addressDataErr, setAddressDataErr] = useState("");
    const [isError, setIsError] = useState(false);
    const [errorFormField, setErrorFormField] = useState("");

    return (
        <FormErrorContext.Provider value={{ addressDataErr, setAddressDataErr, isError, setIsError, errorFormField, setErrorFormField }}>
            { children }
        </FormErrorContext.Provider>
    );
}

export { useFormError, FormErrorProvider };
