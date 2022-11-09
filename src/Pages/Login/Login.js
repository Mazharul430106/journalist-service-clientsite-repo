import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import Footer from '../Shared/Footer/Footer';
import './Login.css';

const Login = () => {
    useTitle('Login');
    const {loginUser} = useContext(AuthContext);

    const handleLoginForm = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);

        loginUser(email, password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            alert('user successfully login');
            form.reset();
        })
        .catch(err=> {
            console.log(err);
        })

    }

    return (
        <div className='mb-10'>
            <div className="hero my-10">
                <div className="hero-content form_width flex-col">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleLoginForm} className="card-body">
                            <h1 className='text-center text-4xl font-semibold'>Login Now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Login" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login With Google</button>
                            </div>
                            <div className='flex justify-between my-4'>
                                <h1>Create a New Account</h1>
                                <Link className='text-red-400' to='/register' >Please Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Login;
