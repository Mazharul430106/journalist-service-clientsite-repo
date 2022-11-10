import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import DisplayReviews from './DisplayReviews';

const MyReviews = () => {
    useTitle('My Reviews');
    const [reviews, setReviews]= useState([]);
    useEffect(()=>{
        fetch('https://jurnalist-service-server-site.vercel.app/reviews')
        .then(res=> res.json())
        .then(data=> setReviews(data))
    },[])

    const handleDeleteReview = (id)=>{
        const agree = window.confirm('Are You Sure Delete ?');
        if(agree){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE' 
            })
            .then(res=> res.json())
            .then(data=> {
                if(data.deletedCount > 0){
                    alert('Review Successfully Deleted');
                    const reminingReviews = reviews.filter(review=> review._id !== id);
                    setReviews(reminingReviews);
                }
            });
        }
    }


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
                        reviews?.map(review=> <DisplayReviews 
                                key={review._id}
                                review={review}
                                handleDeleteReview={handleDeleteReview}
                            >    
                             </DisplayReviews>)
                      }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyReviews;