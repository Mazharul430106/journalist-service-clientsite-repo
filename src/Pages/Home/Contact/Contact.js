import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className='contact_title mt-15 my-10'>
                <h1 className='text-5xl text-center'>Contact Me</h1>
            </div>

            <form action="">
                <div className='mb-2'>
                    <input type="text" placeholder="name" className="input input-bordered input-primary w-full" required />
                </div>
                <div className='mb-2'>
                    <input type="text" placeholder="email" className="input input-bordered input-primary w-full" required/>
                </div>
                <div className='mb-2'>
                    <input type="text" placeholder="password" className="input input-bordered input-primary w-full" required />
                </div>
                <div className='mb-2'>
                    <textarea className="textarea textarea-primary w-full" style={{height: '250px', resize: 'none' }} placeholder="Message" required></textarea>
                </div>
                <div className='mb-2'>
                    <input type="submit" className='btn btn-primary text-white w-full' />
                </div>
            </form>

        </div>
    );
};

export default Contact;