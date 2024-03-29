import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const handleRegisterForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const userPhoto = form.url.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result=> {
            const user = result.user;
            alert('Registation Successfully');
            console.log(user);
            handleUpdateUserProfile(name, userPhoto);
            form.reset();
        })
        .catch(error=> {
            console.log(error);
        })

        // console.log(name, userPhoto, email, password);
    }

    const handleUpdateUserProfile = (name, userPhoto)=> {
        const profile = {
            displayName : name,
            photoURL : userPhoto
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(err=> {
            console.log(err);
        })
    }
    
    return (
        <div className='mb-10'>
            <div className="hero my-8">
                <div className="hero-content form_width flex-col lg:flex-row">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleRegisterForm} className="card-body">
                            <h1 className='text-center text-4xl font-semibold'>Register Now</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Url</span>
                                </label>
                                <input type="text" name='url' placeholder="Img_Url" className="input input-bordered" required />
                            </div>
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
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Register" />
                            </div>
                            <div className='flex my-4 justify-between'> 
                                <p> All Ready Have An Account </p>
                                <Link to='/login' className='text-primary'> Please Login</Link> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>

          
        </div>
    );
};

export default Register;

