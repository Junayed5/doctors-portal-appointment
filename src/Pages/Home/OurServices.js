import React from 'react';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import treatment from '../../assets/images/treatment.png';
import whitening from '../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const OurServices = () => {
    return (
        <div className='p-12 my-20'>
            <div className='text-center m-5'>
                <p className='font-bold text-secondary'>Our Services</p>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <ServiceCard img={fluoride} />
                <ServiceCard img={cavity} />
                <ServiceCard img={whitening} />
            </div>
            <div className="hero lg:p-28">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='pl-10'>
                        <h1 className="text-5xl font-bold text-accent">Exceptional Dental Care,On Your Team</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;