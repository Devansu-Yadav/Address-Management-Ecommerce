import '../index.css';

const AddressList = () => {
    return (
        <div className='flex-col-container address-list space-M'>
            <p className='para-4 name-phone-no-container'>
                <span>Devansu Yadav</span>
                <span>9008568012</span>
            </p>
            <span className='address-txt'>Building No 3, Flat No 501, Sanskruti, 90 FT Road, Thakur Complex, Kandivali(E), Mumbai - 400101, Mumbai, Maharashtra - 400101</span>
            <div className='flex-row-container address-list-btns'>
                <button className='btn btn-primary rounded-med space-S'>Edit</button>
                <button className='btn btn-error rounded-med space-S'>Delete</button>
            </div>
        </div>
    );
}

export { AddressList };