import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor-small.png';
import PageButton from '../Shared/PageButton';

const Appointment = () => {
    return (
        <div className="hero">
            <div
            style={{"backgroundImage": `url(${appointment})`}}
            className="hero-content flex-col lg:flex-row">
                <img src={doctor} className="max-w-lg rounded-lg mt-[-130px] " />
                <div>
                    <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                    <h1 className="text-3xl text-white">Make an appointment today</h1>
                    <p className="py-6 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam cumque eius assumenda nulla modi excepturi hic eaque dicta eligendi optio, consectetur unde harum, doloribus consequatur exercitationem molestias similique dolorum. Excepturi quasi dolores cum velit voluptatum est mollitia animi officia quaerat?</p>
                    <PageButton/>
                </div>
            </div>
        </div>
    );
};

export default Appointment;