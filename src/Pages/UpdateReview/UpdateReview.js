import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const UpdateReview = () => {
    const { user } = useContext(AuthContext);
    const singleReview = useLoaderData();
    console.log(singleReview);
    const { register, handleSubmit } = useForm()

    const handleUpdateReview = (data, event) => {
        
        fetch(`https://jurnalist-service-server-site.vercel.app/reviews/${singleReview._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Review updated Successfully')
                    event.target.reset();
                    console.log(data);
                }
            })
    }


    return (
        <div className='px-[5%]'>

            <h1 className='text-3xl my-5'>{singleReview?.serviceName}</h1>
            <form onSubmit={handleSubmit(handleUpdateReview)}>
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
                        <textarea  {...register('userReview', { required: true })} name='userReview' style={{ height: '250px', resize: 'none' }} defaultValue={singleReview?.userReview} className="textarea textarea-primary w-full  rounded-sm focus:outline-none" placeholder="Review" required></textarea>
                    </div>
                </div>
                <input type="submit" className='rounded-sm lg:max-w-[200px] w-full btn btn-primary mt-2 text-white' value="Update Review" />
            </form>
        </div>
    );
};

export default UpdateReview;