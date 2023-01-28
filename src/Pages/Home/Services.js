import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://genius-car-server-sigma-five.vercel.app/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mb-12'>
            <div className='text-center'>
                <p className='font-bold text-xl text-orange-600'>Services</p>
                <h1 className='text-4xl font-bold'>Our Service Area</h1>
                <p className='w-1/2 mx-auto mt-3'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto my-10'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}>
                    </ServicesCard>)
                }
            </div>
            <div className='text-center'>
                <Link to='/services'><button className="btn btn-outline btn-error">More Services</button></Link>
            </div>

        </div>
    );
};

export default Services;