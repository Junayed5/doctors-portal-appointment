import React from 'react';
import clock from '../../assets/icons/clock.svg';
import location from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12'>
            <InfoCard cardTitle="Opening Hours" bgclass="bg-gradient-to-r from-secondary to-primary" img={clock}/>
            <InfoCard cardTitle="Our Location" bgclass="bg-[#3A4256]" img={location}/>
            <InfoCard cardTitle="Contact Us" bgclass="bg-gradient-to-r from-secondary to-primary" img={phone}/>
        </div>
    );
};

export default Info;