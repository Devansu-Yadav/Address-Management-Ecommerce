import '../index.css';
import faker from 'faker';
import { useEffect, useState } from 'react';
import { useInputForm } from './Input-Form-Context';
import { useAddressData } from './Address-Data-Context';
import { formValidation } from './AddressFormValidation';

const InputForm = () => {
    const { isFormControllerAdded, handleFormControllerClick, isEditBtnClicked, setIsEditBtnClicked, defaultFormData, formData, handleFormData } = useInputForm();
    const { addressDataErr, setAddressDataErr, addressData, setAddressData, addAddress, updateAddress, defaultAddressOps, addressOps, setAddressOps } = useAddressData();
    const [isError, setIsError] = useState(false);
    const [errorFormField, setErrorFormField] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(!isError) {
            if(isEditBtnClicked) {
                updateAddressHandler(formData);
            } else {
                addAddressHandler(formData);
            }
        }
    }

    const formOnChangeHandler = (event) => {
        handleFormData({...formData, [event.target.name]: event.target.value });
    }
    
    const randomBtnHandler = () => {
        const randomAddressData = {
            "name": faker.name.findName(),
            "mobile_no": faker.phone.phoneNumber("##########"),
            "pincode": faker.address.zipCode("######"),
            "city": faker.address.city(),
            "address": faker.address.streetAddress(true),
            "alt_mobile_no": faker.phone.phoneNumber("##########"),
            "state": faker.address.state()
        }
        handleFormData(randomAddressData);
    }

    const addAddressHandler = (address) => {
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
            handleFormControllerClick();
        }
    }, [addressData, addressOps]);

    // Update Address
    useEffect(() => {
        if(addressOps.id.length && addressOps.update) {
            const updatedAddress = addressData.find((address) => address.id === addressOps.id);
            updateAddress(addressOps.id, updatedAddress);
            setIsEditBtnClicked(false);
        }
    }, [addressData, addressOps]);

    // Validating Form everytime before Submit
    useEffect(() => {
        if(!Object.values(formData).every(val => val === '')) {
            const form = formValidation(formData);
            
            if(form.length) {
                setIsError(true);
                setAddressDataErr(form[0].errorMsg);
                setErrorFormField(form[0].field);
            } else {
                setIsError(false);
                setAddressDataErr("");
                setErrorFormField("");
            }
        }
    }, [formData]);

    return (
        <form className={`flex-col-container address-input-form space-M ${isEditBtnClicked ? "address-edit-form": "" }`} onSubmit={(event) => onSubmitHandler(event)}>
            <div className='form-Row'>
                <div className='form-item'>
                    <input type="text" className={`form-input-field input-primary ${errorFormField === 'name' ? "input-error": "" }`} value={formData["name"]} name='name' placeholder='Name' onChange={(event) => formOnChangeHandler(event)} required></input>
                    { errorFormField === 'name' && addressDataErr && <div className='error'>{ addressDataErr }</div>}
                </div>
                <div className='form-item'>
                    <input type="text" className={`form-input-field input-primary ${errorFormField === 'mobile_no' ? "input-error": "" }`} value={formData["mobile_no"]} name='mobile_no' placeholder='Phone No' onChange={(event) => formOnChangeHandler(event)} required></input>
                    { errorFormField === 'mobile_no' && addressDataErr && <div className='error'>{ addressDataErr }</div>}
                </div>
            </div>
            <div className='form-Row'>
                <div className='form-item'>
                    <input type="text" className={`form-input-field input-primary ${errorFormField === 'pincode' ? "input-error": "" }`} value={formData["pincode"]} name='pincode' placeholder='Pincode' onChange={(event) => formOnChangeHandler(event)} required></input>
                    { errorFormField === 'pincode' && addressDataErr && <div className='error'>{ addressDataErr }</div>}
                </div>
                <div className='form-item'>
                    <input type="text" className={`form-input-field input-primary ${errorFormField === 'city' ? "input-error": "" }`} value={formData["city"]} name='city' placeholder='City' onChange={(event) => formOnChangeHandler(event)} required></input>
                    { errorFormField === 'city' && addressDataErr && <div className='error'>{ addressDataErr }</div>}
                </div>
            </div>
            <div className='form-Row'>
                <div className='form-item'>
                    <textarea className='form-input-field form-text-area input-primary' value={formData["address"]} name='address' rows="5" placeholder='Address(Area and Street)' onChange={(event) => formOnChangeHandler(event)} required></textarea>
                </div>
            </div>

            <div className='form-Row'>
                <div className='form-item'>
                    <input type="text" className={`form-input-field input-primary ${errorFormField === 'alt_mobile_no' ? "input-error": "" }`} value={formData["alt_mobile_no"]} name='alt_mobile_no' placeholder='Alternate Phone No (Optional)' onChange={(event) => formOnChangeHandler(event)}></input>
                    { errorFormField === 'alt_mobile_no' && addressDataErr && <div className='error'>{ addressDataErr }</div>}
                </div>
                <div className='form-item'>
                    <select className={`form-select-field input-primary ${errorFormField === 'state' ? "input-error": "" }`} value={formData["state"]} name="state" onChange={(event) => formOnChangeHandler(event)} required>
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
            { errorFormField === 'state' && addressDataErr && <div className='error'>{ addressDataErr }</div>}
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
                    <input type="button" value="Random Data" className='btn btn-outline-primary rounded-med space-S' onClick={ randomBtnHandler }></input>
                </div>
                
                <div className='form-item'>
                    <input type="button" value="Cancel" className='btn btn-error rounded-med space-S' 
                    onClick={() => {
                        if(isEditBtnClicked) {
                            setIsEditBtnClicked(false);
                        } else {
                            handleFormControllerClick();
                        }
                        setAddressDataErr("");
                    }}></input>
                </div>
            </div>
        </form>
    );
}

export { InputForm };