import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // console.log(service)
    const { _id, name, img, price, description } = service;
    return (
        <div className="card w-full mx-auto bg-base-100 rounded shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>
                    {
                        description.length > 100 ? <p>{description.slice(0, 100)}...... <Link to={`/service/${_id}`} className='text-primary'>Read More</Link></p> : <></>
                    }
                </p>
                <p><span className='font-bold text-primary'>Price</span> : {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/service/${_id}`} className="btn btn-primary rounded-sm text-white">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;