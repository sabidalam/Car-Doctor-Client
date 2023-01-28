import React, { useContext } from 'react';
import image from '../../assets/images/login/login.svg';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { setToken } from '../../Api/auth';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                //get jwt token
                fetch('https://genius-car-server-sigma-five.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        //set in local storage
                        localStorage.setItem('genius-Token', data.token);
                        form.reset();
                        navigate(from, { replace: true });
                    })

            })
            .catch(err => console.error(err));

    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setToken(user);
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
                        <Form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-4xl text-center font-bold">Login!</h1>
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
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p className='text-center font-bold text-gray-600'>Or Login With</p>
                                <div className='text-center mt-5'>
                                    <button className="btn bg-gray-300 border-0 btn-circle"><FaFacebookF className='text-xl text-blue-600' /></button>
                                    <button className="btn ml-5 bg-gray-300 border-0 btn-circle"><FaLinkedinIn className='text-xl text-blue-600' /></button>
                                    <button onClick={handleGoogleSignIn} className="btn ml-5 bg-gray-300 border-0 btn-circle"><FcGoogle className='text-xl' /></button>
                                </div>
                                <p className='text-center text-gray-600 mt-5'>New to this website? <Link className='font-semibold text-orange-400' to='/signUp'>Sign Up</Link></p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;