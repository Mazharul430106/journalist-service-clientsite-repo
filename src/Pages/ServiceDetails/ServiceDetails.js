import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MyReviews from './MyReviews';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    // console.log(serviceDetails)
    const { _id, name, img, price, description } = serviceDetails;
    return (
        <div>
            <div className='px-[5%]'>
                <h1 className='text-5xl text-center my-5 mb-10 font-semibold'>Service Details</h1>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10'>
                    <div>
                        <img src={img} alt='' className="rounded-none h-full w-full shadow-2xl" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold pt-5">{name}</h1>
                        <p className="py-6 leading-7 lg:pb-10 md:pb-10">{description}</p>
                        <div className='lg:flex justify-between'>
                            <p className='text-primary font-semibold '>Price : {price}</p>
                            <Link className='btn btn-primary rounded-sm text-white lg:max-w-[200px] w-full lg:mt-0 mt-5' to={`/addreview/${_id}`} >add review</Link>
                        </div>
                    </div>
                </div>
            </div>

            <MyReviews></MyReviews>

        </div>
    );
};

export default ServiceDetails;

