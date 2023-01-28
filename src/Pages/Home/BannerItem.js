import React from 'react';
import './Banner.css';
const BannerItem = ({ slide }) => {
    const { img, prev, next, id } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative max-w-5xl" style={{ height: '520px' }}>
            <div className='carousel-img'>
                <img src={img} className="rounded-xl" alt="" style={{ height: '520px', width: '1080px' }} />
            </div>
            <div className="absolute transform -translate-y-1/2 left-24 top-1/3">
                <h1 className='text-4xl font-bold text-white mb-12'>Affordable <br />
                    Price For Car <br />
                    Servicing</h1>
            </div>
            <div className="absolute  transform -translate-y-1/2 left-24 top-1/2">
                <p className='text-white w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-around transform -translate-y-1/2 left-24 top-2/3">
                <button className="btn btn-error mr-5">Discover More</button>
                <button className="btn btn-outline btn-error">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;