import React from 'react';
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div style={{'backgroundImage':`url(${appointment})`}} className='text-center p-36'>
            <h4 className='font-bold text-secondary text-xl'>Contact Us</h4>
            <h1 className='text-4xl text-white p-5'>Stay Connected With Us</h1><br />
            <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs" /><br /><br />
            <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" /><br /><br />
            <input type="text" placeholder="Your message" className="input input-bordered w-full max-w-xs p-20" /><br />
            <button className='btn btn-secondary m-4 text-white'>Submit</button>

        </div>
    );
};

export default ContactUs;