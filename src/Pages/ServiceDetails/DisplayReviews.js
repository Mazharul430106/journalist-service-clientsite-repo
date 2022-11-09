import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const DisplayReviews = ({review}) => {

    // console.log(review)
    const {user} = useContext(AuthContext);
    const { userName, userReview, service } = review;

    const [reviewService, setReviewService] = useState({});
    
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${service}`)
        .then(res=> res.json())
        .then(data=> setReviewService(data))
    },[service])

    return (
        <tr>
            <td>
                <div>
                    {
                        reviewService?.img &&
                        <img style={{width: '70px', borderRadius: '4px' }} src={ reviewService?.img } alt="" />
                    }
                </div>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={user?.photoURL} alt="Avatar Tailwind CSS Component"/>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{userName}</div>
                    </div>
                </div>
            </td>
            <td>
                {userReview}
            </td>
            <td>
                <button className='btn btn-primary'>update</button>
            </td>
            <th>
                <button className='btn btn-primary'>Delete</button>
            </th>
        </tr>
    )
};

export default DisplayReviews;