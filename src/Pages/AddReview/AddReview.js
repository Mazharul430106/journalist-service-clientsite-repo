import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const review = useLoaderData();
    // console.log(review);
    const { _id, name, } = review;

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const userName = user?.displayName || 'User Name Not Found';
        const email = user?.email || 'unregistred';
        const userReview = form.review.value;

        // console.log(name, email, message, userName);

        const review = {
            service: _id,
            serviceName: name,
            userName,
            email,
            userReview
        }

        fetch(`https://jurnalist-service-server-site.vercel.app/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('User Successfully Reviewed')
                }
                form.reset();
            })
    }

    return (
        <div className='px-[5%]'>

            <h1 className='text-3xl my-5'>{name}</h1>
            <form onSubmit={handlePlaceReview}>
                <div className=''>
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3'>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name='fristName' placeholder="Frist Name" defaultValue={user?.displayName} className="input input-bordered input-primary w-full rounded-sm focus:outline-none" readOnly />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" name='email' placeholder="Email" defaultValue={user?.email} className="input input-bordered input-primary w-full rounded-sm focus:outline-none" readOnly />
                        </div>
                    </div>

                    <div className='mt-2'>
                        <label htmlFor="review">Review</label>
                        <textarea name='review' style={{ height: '250px', resize: 'none' }} className="textarea textarea-primary w-full  rounded-sm focus:outline-none" placeholder="Review" required></textarea>
                    </div>
                </div>
                <input type="submit" className='rounded-sm btn btn-primary mt-2 text-white' value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;