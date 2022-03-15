const form = {
    isError: false,
    errorMsg: ""
};

const formValidation = ({ name, city, state, mobile_no, alt_mobile_no, pincode }) => {
    const validationArr = [validateOnlyStrings(name), validateOnlyStrings(city), validateOnlyStrings(state), validateMobileNo(mobile_no), validatePinCode(pincode)];
    
    if(alt_mobile_no.length) {
        validationArr.push(validateAltMobileNo(mobile_no, alt_mobile_no));
    }

    return validationArr.reduce((acc, currFormObj) => currFormObj.isError ? [...acc, currFormObj]: [...acc], []);
}

const validateOnlyStrings = (inputStr) => {
    const stringsRegExp = new RegExp(/^[a-z A-Z]+$/);
    return {...form, isError: stringsRegExp.test(inputStr) ? false: true, errorMsg: "Invalid String! Only alphabetic characters expected. " };
}

const validateMobileNo = (mobNo) => {
    const mobNoRegExp = new RegExp(/^[0-9]+$/, 'g');
    return {...form, isError: mobNoRegExp.test(mobNo) && mobNo.length === 10 ? false: true, errorMsg: "Invalid Mobile No!!" };
}

const validateAltMobileNo = (mobNo, altMobNo) => {
    if(mobNo === altMobNo) {
        return {...form, isError: true, errorMsg: "Alt Mob No cannot be equal to Primary Mob No!" };
    }
    return validateMobileNo(altMobNo);    
}

const validatePinCode = (pinCode) => {
    const pinCodeRegExp = new RegExp(/^[0-9]+$/, 'g');
    return {...form, isError: pinCodeRegExp.test(pinCode) && pinCode.length === 6 ? false: true, errorMsg: "Invalid Pincode!!" }; 
}

export { validateOnlyStrings, validateMobileNo, validatePinCode, formValidation };
