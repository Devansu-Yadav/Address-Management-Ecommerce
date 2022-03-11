import '../index.css';

const AddressList = () => {
    return (
        <ul className='flex-col-container address-list'>
            <li>
                <div className='flex-col-container address-card'>
                    <p className='flex-row-container para-4 name-phone-no-container'>
                        <span>Devansu Yadav</span>
                        <span>Phone No: 9008568012</span>
                        <span>Alt mobile No: </span>
                    </p>
                    <span className='address-txt'>Building No 3, Flat No 501, Sanskruti, 90 FT Road, Thakur Complex, Kandivali(E), Mumbai - 400101, Mumbai, Maharashtra - 400101</span>
                    <p className='flex-row-container para-4 state-city-container'>
                        <span>State: Maharashtra</span>
                        <span>City: Mumbai</span>
                        <span>Pincode: 400101 </span>
                    </p>
                    <div className='flex-row-container address-list-btns'>
                        <button className='btn btn-primary rounded-med'>Edit</button>
                        <button className='btn btn-error rounded-med'>Delete</button>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export { AddressList };