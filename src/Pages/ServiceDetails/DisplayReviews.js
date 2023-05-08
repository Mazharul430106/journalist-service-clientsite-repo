import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Link } from 'react-router-dom';

const DisplayReviews = ({ review, handleDeleteReview }) => {
    // console.log(review)
    const { user } = useContext(AuthContext);
    const { userName, review: userReview, service, _id } = review;
    const [reviewService, setReviewService] = useState({});

    useEffect(() => {
        fetch(`https://jurnalist-service-server-site.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [service])

    return (
        <tr>
            <td>
                <div>
                    {
                        reviewService?.img &&
                        <img style={{ width: '70px', borderRadius: '4px' }} src={reviewService?.img} alt="" />
                    }
                </div>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
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
                <Link to={`/updateReview/${_id}`}>
                    <button className='btn btn-primary rounded-sm lg:max-w-[180px] w-full text-white'>update</button>
                </Link>
            </td>
            <th>
                <button onClick={() => handleDeleteReview(_id)} className='btn btn-primary rounded-sm lg:max-w-[180px] w-full text-white'>Delete</button>
            </th>
        </tr>
    )
};

export default DisplayReviews;