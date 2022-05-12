import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iste perferendis reiciendis dolorum alias at, vero laudantium quidem saepe officia!</p>
            </div>
            <div className='flex items-center'>
                <div>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 m-5">
                            <img src={review.img} />
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className='text-2xl'>{review.name}</h4>
                    <h6>{review.location}</h6>
                </div>
            </div>
        </div>
    );
};

export default Review;