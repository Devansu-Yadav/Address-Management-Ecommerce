import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const InputFormController = () => {
    return (
        <div className='flex-row-container add-address space-M'>
            <div className='add-address-icon centered-flex-row-container'>
                <FontAwesomeIcon icon={faPlus} />
            </div>
            <h3 className='heading-3 add-address-heading'>ADD A NEW ADDRESS</h3>
        </div>
    );
}

export { InputFormController };