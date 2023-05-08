import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { toast } from 'react-hot-toast';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dy70ygr', 'template_28emf48', form.current, 'o5E_e7JTnVh9xiC31')
            .then((result) => {
                console.log(result.text);
                toast.success('Information Submited Successfully');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='px-[5%]'>
            <div className='contact_title mt-15 my-10'>
                <h1 className='text-5xl text-center font-semibold'>Contact Me</h1>
            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
                <div className=''>
                    <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.866007186!2d90.25446958979383!3d23.780863186788824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1683410446700!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className=''>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2'>
                            <div className='mb-2 '>
                                <input type="text" name='fastName' placeholder="fast name" className=" rounded input input-bordered focus:outline-none input-primary w-full" required />
                            </div>
                            <div className='mb-2'>
                                <input type="text" name='lastName' placeholder="last name" className=" rounded input input-bordered focus:outline-none input-primary w-full" required />
                            </div>
                        </div>

                        <div className='mb-2'>
                            <input type="text" name='email' placeholder="email" className=" rounded input input-bordered focus:outline-none input-primary w-full" required />
                        </div>
                        <div className='mb-2'>
                            <textarea name='message' rows={8} className=" rounded textarea textarea-primary focus:outline-none w-full" placeholder="Message" required></textarea>
                        </div>
                        <div className=''>
                            <input type="submit" className=' rounded btn btn-primary text-white w-full' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;