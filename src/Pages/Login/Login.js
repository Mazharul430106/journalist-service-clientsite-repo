import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import './Login.css';


const Login = () => {

    useTitle('Login');
    const { loginUser, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleLoginForm = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
               
                // alert('user successfully login');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleSignInGoogle = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error));
    }

    return (
        <div className='mb-10'>
            <div className="hero my-10">
                <div className="hero-content form_width flex-col">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleLoginForm} className="card-body login_form ">
                            <h1 className='text-center text-4xl font-semibold'>Login Now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary " value="Login" />
                            </div>
                        </form>
                        <div style={{width:'403px', paddingBottom: '15px'}} className='mx-auto'>
                            <div className="form-control mt-6">
                                <button onClick={handleSignInGoogle} className="btn btn-primary">
                                    <span> <FcGoogle className='mr-1 text-sm'></FcGoogle></span> Login With Google
                                </button>
                            </div>
                            <div className=' login_text flex text-center justify-between my-4'>
                                <h1 className='ms-3'>Create a New Account</h1>
                                <Link className='text-primary' to='/register' >Please Register</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
         
        </div>
    );
};

export default Login;
