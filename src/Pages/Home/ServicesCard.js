import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServicesCard = ({ service }) => {
    const { _id, img, title, price } = service
    return (
        <div className="card w-80 mx-auto bg-base-100 border-2 border-gray-100">
            <PhotoProvider
                speed={() => 800}
                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
            >
                <PhotoView src={img}>
                    <figure className='px-6 pt-6'><img className='rounded-xl' src={img} style={{ objectFit: 'cover' }} alt="" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex content-between items-center text-orange-600'>
                    <p className='text-xl font-semibold'>Price: ${price}</p>
                    <Link to={`/checkOut/${_id}`}><button><FaArrowRight></FaArrowRight></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;