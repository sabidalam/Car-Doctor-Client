import React, { useContext } from 'react';
import image from '../../assets/images/login/login.svg';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Form, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { setToken } from '../../Api/auth';

const SignUp = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/');
            })
            .catch(err => console.error(err))
    }

    const handleGoogleSingIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setToken();
                navigate('/');
            })
            .catch(err => console.error(err))

    }
    return (
        <div>
            <div className="hero my-8">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:mr-24 lg:text-left">
                        <img src={image} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm border-2 border-gray-400 bg-base-100">
                        <Form onSubmit={handleSignUp} className="card-body">
                            <h1 className="text-4xl text-center font-bold">Sign Up!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
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

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <div>
                                <p className='text-center font-bold text-gray-600'>Or SignIn With</p>
                                <div className='text-center mt-5'>
                                    <button className="btn bg-gray-300 border-0 btn-circle"><FaFacebookF className='text-xl text-blue-600' /></button>
                                    <button className="btn ml-5 bg-gray-300 border-0 btn-circle"><FaLinkedinIn className='text-xl text-blue-600' /></button>
                                    <button onClick={handleGoogleSingIn} className="btn ml-5 bg-gray-300 border-0 btn-circle"><FcGoogle className='text-xl' /></button>
                                </div>
                                <p className='text-center text-gray-600 mt-5'>Already Have an Account? <Link className='font-semibold text-orange-400' to='/login'>Login</Link></p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;