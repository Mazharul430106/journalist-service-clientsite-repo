import React from 'react';
import { Link } from 'react-router-dom';

const DisplayAllService = ({ service }) => {
    const { _id, name, img, price, description, service_id } = service;
    
    return (
        <div className="card w-96 mx-auto bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>
                {
                    description.length > 100 ? <p>{description.slice(0, 100)}...... <Link to={`/service/${_id}`} className='text-blue-400'>Read More</Link></p> : <></>
                }
            </p>
            <p><span className='font-bold'>Price</span> : {price}</p>
            <div className="card-actions justify-end">
                <Link className="btn btn-primary text-white" to={`/service/${_id}`}>View Details</Link>
            </div>
        </div>
    </div>
    );
};

export default DisplayAllService;