import React from 'react';
import image1 from '../../assets/images/banner/1.jpg';
import image2 from '../../assets/images/banner/2.jpg';
import image3 from '../../assets/images/banner/3.jpg';
import image4 from '../../assets/images/banner/4.jpg';
import BannerItem from './BannerItem';

const bannerData = [
    {
        img: image1,
        prev: 4,
        id: 1,
        next: 2
    },
    {
        img: image2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        img: image3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        img: image4,
        prev: 3,
        id: 4,
        next: 1
    },
]

const Banner = () => {
    return (
        <div>
            <div className="carousel max-w-5xl mx-auto my-5" style={{ height: '530px' }}>
                {
                    bannerData.map(slide => <BannerItem
                        key={slide.id}
                        slide={slide}
                    ></BannerItem>)
                }

            </div>
        </div>
    );
};

export default Banner;