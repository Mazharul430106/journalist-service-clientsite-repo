import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import Footer from '../Shared/Footer/Footer';
import DisplayAllService from './DisplayAllService';

const AllServicesData = () => {
    useTitle('My Services');
    const allService = useLoaderData();
    return (
        <div className='px-[5%]'>
            <div>
                <h1 className='font-semibold text-2xl'>My Services</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                {
                    allService.map(service=> <DisplayAllService key={service._id} service={service}></DisplayAllService>)
                }
            </div>
           
        </div>
    );
};

export default AllServicesData;