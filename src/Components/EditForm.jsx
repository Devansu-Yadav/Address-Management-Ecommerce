import '../index.css';
import { useAddressData } from './Address-Data-Context';
import { useInputForm } from './Input-Form-Context';
import { InputForm } from './InputForm';

const EditForm = () => {
    const { addressOps, setAddressOps } = useAddressData();
    const { isEditBtnClicked } = useInputForm();

    return (
        <div style={{ display: isEditBtnClicked ? "block": "none" }}>
            <InputForm />
        </div>
    );
}

export { EditForm };