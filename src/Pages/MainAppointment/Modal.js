import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Modal = ({ treatment, date,setTreatment,refetch }) => {
    const [user] = useAuthState(auth)
    const { _id, name, slots } = treatment;

    const handleAppointment = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const formattedDate = format(date, 'PP')
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.displayName,
            patientEmail: user.email,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if(data.success){
                    toast(`Appointment Done for ${formattedDate}, ${slot} `)
                }
                else{
                    toast.warning(`Have an appointment for ${data.booking.date}, ${data.booking?.slot} `)
                }
                
                refetch()
                setTreatment({});
            })

        
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
                        <select name='slot' className="select select-bordered w-full max-w-lg">
                            {slots?.map((slot,index) => <option key={index} value={slot}>{slot}</option>)}
                        </select>
                        <input type="text" name='name' disabled value={user.displayName} className="input input-bordered w-full max-w-lg" />
                        <input type="email" name='email' disabled value={user.email} className="input input-bordered w-full max-w-lg" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-lg" />
                        <input type="submit" value='Submit' className="input input-bordered w-full max-w-lg bg-neutral text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;