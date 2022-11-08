import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const { name, img, price, description } = serviceDetails;
    return (
        <div>
            <h1 className='text-5xl text-center my-5 mb-10'>Service Details</h1>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} alt='' className="max-w-sm rounded-lg h-full w-full shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <p className="py-6">{description}</p>
                        <p>Price : {price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;

