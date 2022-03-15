import '../index.css';
import { useEffect, useState } from 'react';
import { useInputForm } from './Input-Form-Context';
import { useAddressData } from './Address-Data-Context';

const InputForm = () => {
    const { isFormControllerAdded, handleFormControllerClick, isEditBtnClicked, setIsEditBtnClicked } = useInputForm();
    const { addressData, setAddressData, addAddress, updateAddress, defaultAddressOps, addressOps, setAddressOps } = useAddressData();

    const fetchFormData = (event) => {
        const formData = {
            "name": event.target.name.value,
            "mobile_no": event.target['phone no'].value,
            "pincode": event.target['pincode'].value,
            "city": event.target['city'].value,
            "address": event.target['address'].value,
            "alt_mobile_no": event.target['alt phone no'].value,
            "state": event.target['state'].value
        };
        return formData;
    }

    const addAddressHandler = (address) => {
        console.log(address);
        setAddressOps({...defaultAddressOps, add: true });
        setAddressData((addresses) => addresses.concat([address]));
    }

    const updateAddressHandler = (updatedAddress) => {
        const filteredAddressData = addressData.filter((address) => address.id !== addressOps.id);
        setAddressData([...filteredAddressData, updatedAddress]);
        setAddressOps({...addressOps, update: true });
    }

    // Add Address
    useEffect(() => {
        if(addressOps.add) {
            const addedAddress = addressData[addressData.length - 1];
            addAddress(addedAddress);
        }
    }, [addressData, addressOps]);

    // Update Address
    useEffect(() => {
        if(addressOps.id.length && addressOps.update) {
            const updatedAddress = addressData.find((address) => address.id === addressOps.id);
            updateAddress(addressOps.id, updatedAddress);
        }
    }, [addressData, addressOps]);

    return (
        <form className={`flex-col-container address-input-form space-M ${isEditBtnClicked ? "address-edit-form": "" }`} onSubmit={(event) => {
            event.preventDefault();
            if(isEditBtnClicked) {
                const updatedAddress = fetchFormData(event);
                updateAddressHandler(updatedAddress);
            } else {
                const formAddressData = fetchFormData(event);
                addAddressHandler(formAddressData);
            }
        }}
        >
            <div className='form-Row'>
                <div className='form-item'>
                    <input type="text" className='form-input-field input-primary' name='name' placeholder='Name' required></input>
                </div>
                <div className='form-item'>
                    <input type="text" className='form-input-field input-primary' name='phone no' placeholder='Phone No' required></input>
                </div>
            </div>
            <div className='form-Row'>
                <div className='form-item'>
                    <input type="text" className='form-input-field input-primary' name='pincode' placeholder='Pincode' required></input>
                </div>
                <div className='form-item'>
                    <input type="text" className='form-input-field input-primary' name='city' placeholder='City' required></input>
                </div>
            </div>
            <div className='form-Row'>
                <div className='form-item'>
                    <textarea className='form-input-field form-text-area input-primary' name='address' rows="5" placeholder='Address(Area and Street)' required></textarea>
                </div>
            </div>

            <div className='form-Row'>
                <div className='form-item'>
                    <input type="text" className='form-input-field input-primary' name='alt phone no' placeholder='Alternate Phone No (Optional)'></input>
                </div>
                <div className='form-item'>
                    <select className="form-select-field input-primary" name="state" required>
                        <option value="" disabled="">--Select State--</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>
                </div>
            </div>
            <div className='form-Row'>
                { isEditBtnClicked && <div className='form-item'>
                    <input type="submit" value="Save" className='btn btn-primary rounded-med space-S'></input>
                </div>
                }

                { isFormControllerAdded && <div className='form-item'>
                    <input type="submit" value="Add" className='btn btn-primary rounded-med space-S'></input>
                </div> 
                }
                
                <div className='form-item'>
                    <input type="button" value="Random Data" className='btn btn-outline-primary rounded-med space-S'></input>
                </div>
                
                <div className='form-item'>
                    <input type="button" value="Cancel" className='btn btn-error rounded-med space-S' 
                    onClick={() => {
                        if(isEditBtnClicked) {
                            setIsEditBtnClicked(false);
                        } else {
                            handleFormControllerClick();
                            setAddressOps({...addressOps, add: false });
                        }
                    }}></input>
                </div>
            </div>
        </form>
    );
}

export { InputForm };