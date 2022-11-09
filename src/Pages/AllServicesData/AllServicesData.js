import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import Footer from '../Shared/Footer/Footer';
import DisplayAllService from './DisplayAllService';

const AllServicesData = () => {
    useTitle('Services');
    const allService = useLoaderData();
    
    return (
        <div>
            <div>
                <h1 className='font-semibold text-2xl'>My Services</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 my-10'>
                {
                    allService.map(service=> <DisplayAllService key={service._id} service={service}></DisplayAllService>)
                }
            </div>
            <div className='mb-10'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AllServicesData;