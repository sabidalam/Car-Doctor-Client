import React from 'react';
import image1 from '../../assets/images/about_us/person.jpg';
import image2 from '../../assets/images/about_us/parts.jpg';

const About = () => {
    return (

        <div className="hero my-12 max-w-5xl mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={image1} className="max-w-sm w-4/5 h-full rounded-lg shadow-2xl" alt='' />
                    <img src={image2} className="max-w-sm absolute w-3/5 right-5 top-1/2 border-white border-t-8 border-l-8 rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='w-1/2 mb-10'>
                    <h1 className="mb-3 text-xl font-bold text-orange-600">About Us</h1>
                    <h1 className="text-4xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className='mt-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='mt-5'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-error mt-4">Get More Info</button>

                </div>
            </div>
        </div>


    );
};

export default About;