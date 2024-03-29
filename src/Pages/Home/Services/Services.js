import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    // console.log(services);
    useEffect(()=>{
        fetch('https://jurnalist-service-server-site.vercel.app/service')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])

    return (
        <div className='px-[5%]'>
            <div>
                <h1 className='text-5xl text-center font-semibold my-5'>Services</h1>
                <p className=' pb-10 px-10 text-center'>A journalist is an individual that collects/gathers information in form of text, audio, or pictures, <br /> processes them into a news-worthy form, and disseminates it to the public.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    services.map(service=> <Service key={service.service_id} service={service}></Service>)
                }
            </div>

            <div className='text-center'>
                <Link className='btn btn-primary rounded-sm w-full lg:max-w-[200px] md:max-w-[200px] text-white mt-10' to='/service'>See All Services</Link>
            </div>
        </div>
    );
};

export default Services;