import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MyReviews from './MyReviews';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    // console.log(serviceDetails)
    const {_id, name, img, price, description } = serviceDetails;
    return (
        <div>
            <h1 className='text-5xl text-center my-5 mb-10'>Service Details</h1>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row rounded-lg ">
                    <img src={img} alt='' className="max-w-sm rounded-lg h-full w-full shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <p className="py-6">{description}</p>
                        <div className='flex justify-between'>
                            <p>Price : {price}</p>
                            <Link className='btn btn-sm' to={`/addreview/${_id}`} >add review</Link>
                        </div>
                    </div>
                </div>
            </div>

            <MyReviews></MyReviews>

        </div>
    );
};

export default ServiceDetails;

