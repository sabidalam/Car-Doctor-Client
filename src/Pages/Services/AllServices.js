import React, { useState } from 'react';
import { useEffect } from 'react';
import ServicesCard from '../Home/ServicesCard';
import './AllServices.css';

const AllServices = () => {
    const [services, setServices] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    useEffect(() => {
        const url = `https://genius-car-server-sigma-five.vercel.app/services?page=${page}&size=${size}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setServices(data.services);
            })
    }, [page, size])



    const pages = Math.ceil(count / size);
    return (
        <div className='my-8'>
            <div className='text-center'>
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
            <div className='text-center pagination'>
                {
                    [...Array(pages).keys()].map(number => <button
                        className={(page === number) && 'btn btn-error text-xl'}
                        key={number}
                        onClick={() => setPage(number)}>
                        {number + 1}
                    </button>)
                }
                <select onChange={event => setSize(event.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>

        </div>
    );
};

export default AllServices;