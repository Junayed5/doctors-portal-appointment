import React from 'react';
import quotes from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id:1,
            name:'Winston Harry',
            img:people1,
            location:'New york'
        },
        {
            _id:2,
            name:'Winston Harry',
            img:people2,
            location:'New york'
        },
        {
            _id:3,
            name:'Winston Harry',
            img:people3,
            location:'New york'
        },
    ]
    return (
        <section className='p-12'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-secondary'>Testimonial</h4>
                    <h1 className='text-3xl '>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quotes} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <Review key={review._id} review={review}/>)
                }
            </div>
        </section>
    );
};

export default Testimonial;