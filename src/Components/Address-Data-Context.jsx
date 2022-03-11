import axios from 'axios';
import { useState, useContext, createContext } from 'react';

const AddressDataContext = () => createContext({ apiURL: "https://622882479fd6174ca8263249.mockapi.io/api/ecommerce/addresses", data: [] });
const useAddressData = () => useContext(AddressDataContext);

const AddressDataProvider = ({ children }) => {
    const [addressData, setAddressData] = useState([]);
    const [addressDataErr, setAddressDataErr] = useState("");
    const apiURL = "https://622882479fd6174ca8263249.mockapi.io/api/ecommerce/addresses";

    const getAddresses = async() => {
        try {
            const data = await axios.get(apiURL);
            setAddressData((addressList) => addressList.concat(data.data));
            console.log("Data Fetched!!", data.data);
        } catch(err) {
            console.log("Error - ", err.message);
            setAddressDataErr(err.message);
        }
    }

    const addAddress = async (address) => {
        try {
            const response = await axios.post(apiURL, address);
            console.log("Response status ", response.status);
            if (response.status === "201" || response.status === "200") {
                console.log("Data saved on server!!");
            }
        } catch(err) {
            console.log("Error - ", err.message);
            setAddressDataErr(err.message);
        }
    }

    const updateAddress = async(addressId, updatedAddressData) => {
        try {
            const response = await axios.put(`${apiURL}/${addressId}`, updatedAddressData);
            console.log("Response status ", response.status);
            if (response.status === "201" || response.status === "200") {
                console.log("Data updated on server!!");
            }
        } catch(err) {
            console.log("Error - ", err.message);
            setAddressDataErr(err.message);
        }
    }

    const deleteAddress = async(addressId) => {
        try {
            const response = await axios.delete(`${apiURL}/${addressId}`);
            console.log("Response status ", response.status);
            if (response.status === "201" || response.status === "200") {
                console.log("Data deleted from server!!");
            }
        } catch(err) {
            console.log("Error - ", err.message);
            setAddressDataErr(err.message);
        }
    }

    return (
        <AddressDataContext.Provider value={
            { 
                apiURL, 
                addressData, 
                setAddressData, 
                addressDataErr, 
                setAddressDataErr,
                getAddresses,
                addAddress,
                updateAddress,
                deleteAddress
            }
        }>
            {children}
        </AddressDataContext.Provider>
    );
}

export { useAddressData, AddressDataProvider };
