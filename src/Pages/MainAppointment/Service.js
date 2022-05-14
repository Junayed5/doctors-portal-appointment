import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : <span className='text-red-700'>Try Another Day</span>}</p>
                <p>{slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available</p>
                <div className="card-actions justify-center">
                    <label 
                    htmlFor="booking-modal" 
                    disabled={slots.length === 0}
                    onClick={() => setTreatment(service)} 
                    className="btn btn-primary text-white bg-primary uppercase"
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;