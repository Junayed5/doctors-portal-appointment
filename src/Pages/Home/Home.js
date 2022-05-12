import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Info from './Info';
import OurServices from './OurServices';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <OurServices/>
            <Appointment/>
            <Testimonial/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;