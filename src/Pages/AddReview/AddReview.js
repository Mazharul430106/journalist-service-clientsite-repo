import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const review = useLoaderData();
    const { _id, name } = review;


    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const userName = `${form.fristName.value} ${form.lastName.value}`;
        const serviceId = form.service_id.value;
        const email = user?.email || 'unregistred';
        const message = form.message.value;

        // console.log(name, email, message, userName);

        const review = {
            service : _id,
            serviceName : name,
            userName,
            serviceId,
            email,
            message
        }

        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.acknowledged){
                alert('User Successfully Reviewed')
            }
            form.reset();
        })

    }


    return (
        <div>
            <form onSubmit={handlePlaceReview}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <input type="text" name='fristName' placeholder="Frist Name" className="input input-bordered input-primary w-full" required/>
                    <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered input-primary w-full" required/>
                    <input type="text" name='service_id' placeholder="Service_Id" defaultValue={_id} className="input input-bordered input-primary w-full" readOnly />
                    <input type="text" name='email' placeholder="Email" defaultValue={user?.email} className="input input-bordered input-primary w-full" readOnly />
                </div>
                <div>
                    <textarea name='message' style={{ height: '250px', resize: 'none' }} className="textarea textarea-primary w-full mt-3" placeholder="Message"></textarea>
                </div>
                <input type="submit" className='btn btn-primary mt-2 text-white' value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;