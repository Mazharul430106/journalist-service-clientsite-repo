import React, { useEffect, useState } from 'react';
import DisplayReviews from './DisplayReviews';

const MyReviews = () => {
    const [reviews, setReviews]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=> res.json())
        .then(data=> setReviews(data))
    },[])

  
    return (
        <div className='mt-10'>
            <h1 className='text-5xl text-center my-7'> My Reviews</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>User</th>
                            <th>Review</th>
                            <th>Operation</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        reviews?.map(review=> <DisplayReviews key={review._id} review={review}></DisplayReviews>)
                      }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyReviews;