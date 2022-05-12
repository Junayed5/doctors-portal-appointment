import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div>
            <h4 className='text-center text-secondary text-xl'>Available Appointment On {format(date, 'PP')}</h4>
        </div>
    );
};

export default AvailableAppointment;