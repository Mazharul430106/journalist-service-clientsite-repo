import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import DisplayReviews from './DisplayReviews';
import { toast } from 'react-hot-toast';

const MyReviews = () => {
    useTitle('My Reviews');
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://jurnalist-service-server-site.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    const handleDeleteReview = (id) => {
        const agree = window.confirm('are you delete')
        if (agree) {

            // fetch(`https://jurnalist-service-server-site.vercel.app/reviews/${id}`, {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // alert('Review Successfully Deleted');
                        toast.success('Review Deleted Successfully');
                        const reminingReviews = reviews.filter(review => review._id !== id);
                        setReviews(reminingReviews);
                    }
                });
        }
    }

    
    return (
        <div className='mt-14 px-[5%]'>
            <h1 className='text-5xl text-center pb-10 font-semibold'> My Reviews</h1>
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
                            reviews?.map(review => <DisplayReviews
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