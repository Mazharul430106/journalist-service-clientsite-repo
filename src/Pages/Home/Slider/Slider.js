import React from 'react';
import image1 from '../../../assets/img1.jpg';
import image2 from '../../../assets/img2.jpg';
import image3 from '../../../assets/img3.jpg';
import image4 from '../../../assets/img4.jpg';
import Slide from './Slide';
import './Slider.css';

const Slider = () => {

    const sliderItems = [
        {
            image: image1,
            prev: 5,
            id: 1,
            next: 2
        },
        {
            image: image2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: image3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: image4,
            prev: 3,
            id: 4,
            next: 1
        },
       
    ]

    return (
        <div className='carousel slider_hight w-full'>
            {
                sliderItems.map(sliderItem=> <Slide key={sliderItem.id} sliderItem={sliderItem} ></Slide>)
            }
        </div>

 
    );
};

export default Slider;