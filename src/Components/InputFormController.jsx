import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useInputForm } from './Input-Form-Context';

const InputFormController = () => {
    const { isFormControllerAdded, handleFormControllerClick, clearFormStates, defaultFormData, handleFormData } = useInputForm();

    return (
        <div className='flex-row-container add-address space-M' onClick={() => {
            handleFormControllerClick();
            handleFormData(defaultFormData);
            clearFormStates();
        }} 
        style={{ display: isFormControllerAdded ? "none": "flex" }}>
            <div className='add-address-icon centered-flex-row-container'>
                <FontAwesomeIcon icon={faPlus} />
            </div>
            <h3 className='heading-3 add-address-heading'>ADD A NEW ADDRESS</h3>
        </div>
    );
}

export { InputFormController };