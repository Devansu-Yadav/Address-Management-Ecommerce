import '../index.css';
import { useEffect } from 'react';
import { useAddressData } from './Address-Data-Context';
import { useInputForm } from './Input-Form-Context';
import { EditForm } from './EditForm';

const AddressList = () => {
    const { addressData, setAddressData, addressDataErr, getAddresses, updateAddress, deleteAddress, defaultAddressOps, addressOps, setAddressOps } = useAddressData();
    const { isEditBtnClicked, setIsEditBtnClicked, clearFormStates } = useInputForm();

    const handleEditBtnClick = (id) => {
        setAddressOps({...defaultAddressOps, id: id });
        setIsEditBtnClicked(true);
        clearFormStates();
    }

    const deleteAddressHandler = (id) => {
        setAddressData((addresses) => [...addresses.filter((address) => address.id !== id)]);
        setAddressOps({...defaultAddressOps, id: id, delete: true });
    }

    // Fetch addresses
    useEffect(() => {
        getAddresses();
    }, []);

    // Delete Address
    useEffect(() => {
        if(addressOps.delete) {
            deleteAddress(addressOps.id);
        }
    }, [addressOps]);

    return (
        <ul className='flex-col-container address-list'>
            { addressDataErr && <div className='error'>{ addressDataErr }</div>}
            { !addressData.length ? <h2 className='heading-2'>No addresses Added!</h2>: addressData.map(address => {
                return (
                <li key={address.id}>
                    {isEditBtnClicked && addressOps.id === address.id ?  
                    <EditForm /> : <div className='flex-col-container address-card'>
                        <p className='flex-row-container para-4 name-phone-no-container'>
                            <span>{address.name}</span>
                            <span>Phone No: {address.mobile_no}</span>
                            { address.alt_mobile_no && <span>Alt mobile No: {address.alt_mobile_no}</span>}
                        </p>
                        <span className='address-txt'>{address.address}</span>
                        <p className='flex-row-container para-4 state-city-container'>
                            <span>State: {address.state}</span>
                            <span>City: {address.city}</span>
                            <span>Pincode: {address.pincode} </span>
                        </p>
                        <div className='flex-row-container address-list-btns'>
                            <button className='btn btn-primary rounded-med' onClick={() => handleEditBtnClick(address.id)}>Edit</button>
                            <button className='btn btn-error rounded-med' onClick={() => deleteAddressHandler(address.id)}>Delete</button>
                        </div>
                    </div>
                    }
                </li>
                );
            })}
        </ul>
    );
}

export { AddressList };