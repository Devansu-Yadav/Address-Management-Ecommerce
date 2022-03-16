import '../index.css';
import { useFormError } from './Form-Error-Context';

const FormError = () => {
    const { addressDataErr } = useFormError();

    return (
        <div className='error'>{ addressDataErr }</div>
    );
}

export { FormError };