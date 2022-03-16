const form = {
    isError: false,
    errorMsg: ""
};

const formValidation = ({ name, city, state, mobile_no, alt_mobile_no, pincode }) => {
    const validationArr = [ {...validateOnlyStrings(name), field: "name" }, 
                            {...validateMobileNo(mobile_no), field: "mobile_no"}, 
                            {...validatePinCode(pincode), field: "pincode"}, 
                            {...validateOnlyStrings(city), field: "city" }, 
                            {...validateOnlyStrings(state), field: "state" } ];
    
    if(alt_mobile_no.length) {
        validationArr.push({...validateAltMobileNo(mobile_no, alt_mobile_no), field: "alt_mobile_no"});
    }
    return validationArr.reduce((acc, currFormObj) => currFormObj.isError ? [...acc, currFormObj]: [...acc], []);
}

const validateOnlyStrings = (inputStr) => {
    if(!inputStr.length) {
        return {...form, isError: true, errorMsg: "Please fill this field!" };
    }

    const stringsRegExp = new RegExp(/^[a-z A-Z]+$/);
    return {...form, isError: stringsRegExp.test(inputStr) ? false: true, errorMsg: "Invalid String! Only alphabetic characters expected. " };
}

const validateMobileNo = (mobNo) => {
    if(!mobNo.length) {
        return {...form, isError: true, errorMsg: "Please add a Mobile No" };
    }

    const mobNoRegExp = new RegExp(/^[0-9]+$/, 'g');
    return {...form, isError: mobNoRegExp.test(mobNo) && mobNo.length === 10 ? false: true, errorMsg: "Invalid Mobile No!!" };
}

const validateAltMobileNo = (mobNo, altMobNo) => {
    if(mobNo === altMobNo) {
        return {...form, isError: true, errorMsg: "Alt Mob No cannot be same as Primary Mob No!" };
    }
    return validateMobileNo(altMobNo);    
}

const validatePinCode = (pinCode) => {
    if(!pinCode.length) {
        return {...form, isError: true, errorMsg: "Please add a Pincode" };
    }

    const pinCodeRegExp = new RegExp(/^[0-9]+$/, 'g');
    return {...form, isError: pinCodeRegExp.test(pinCode) && pinCode.length === 6 ? false: true, errorMsg: "Invalid Pincode!!" }; 
}

export { validateOnlyStrings, validateMobileNo, validatePinCode, formValidation };
