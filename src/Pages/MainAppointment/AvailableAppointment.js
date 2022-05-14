import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState({})
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='p-12'>
            <h4 className='text-center text-secondary text-xl'>Available Appointment On {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment} />)
                }
            </div>
            {treatment && <Modal treatment={treatment} date={date}/>}
        </div>
    );
};

export default AvailableAppointment;