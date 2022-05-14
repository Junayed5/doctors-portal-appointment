import { format } from 'date-fns';
import React from 'react';

const Modal = ({ treatment, date }) => {
    const {_id, name, slots } = treatment;

    const handleAppointment = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id,slot);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-neutral mb-4">{name}</h3>
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className='grid grid-cols-1 gap-4' onSubmit={handleAppointment}>
                        <input type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-lg" disabled />
                        {/* <select name='slot' className="select select-bordered w-full max-w-lg">
                            {slots.map(slot => <option value={slot}>{slot}</option>)}
                        </select> */}
                        <input type="text" name='name' placeholder="Enter Name" className="input input-bordered w-full max-w-lg" />
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered w-full max-w-lg" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-lg" />
                        <input type="submit" value='Submit' className="input input-bordered w-full max-w-lg bg-neutral text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;