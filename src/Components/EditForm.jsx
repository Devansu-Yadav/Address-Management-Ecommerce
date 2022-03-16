import '../index.css';
import { useInputForm } from './Input-Form-Context';
import { InputForm } from './InputForm';

const EditForm = () => {
    const { isEditBtnClicked } = useInputForm();

    return (
        <div style={{ display: isEditBtnClicked ? "block": "none" }}>
            <InputForm />
        </div>
    );
}

export { EditForm };