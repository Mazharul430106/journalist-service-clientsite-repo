import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Register = () => {
    return (
        <div className='mb-10'>
            <div className="hero my-8">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form className="card-body">
                            <h1 className='text-center text-4xl font-semibold'>Register Now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Url</span>
                                </label>
                                <input type="text" name='img' placeholder="Img_Url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Register" />
                            </div>
                            <div className='flex my-4 justify-between'> 
                                <p> All Ready Have An Account </p>
                                <Link to='/login' className='text-red-400'> Please Login</Link> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Register;