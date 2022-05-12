import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bgImage from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';

const AppointmentBanner = ({date,setDate}) => {
    
    return (
        <div 
        style={{'backgroundImage': `url(${bgImage})`}}
        class="hero h-[800px]">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div className='mr-16'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>Your selected date:{format(date, 'PP')}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;