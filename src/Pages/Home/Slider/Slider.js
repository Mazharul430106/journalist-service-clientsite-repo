import React from 'react';
import image1 from '../../../assets/img1.jpg';
import image2 from '../../../assets/img2.jpg';
import image3 from '../../../assets/img3.jpg';
import image4 from '../../../assets/img4.jpg';
import image5 from '../../../assets/img5.jpg';
import Slide from './Slide';


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
            next: 5
        },
        {
            image: image5,
            prev: 4,
            id: 5,
            next: 1
        }
    ]

    return (
        <div className='carousel w-full'>
            {
                sliderItems.map(sliderItem=> <Slide key={sliderItem.id} sliderItem={sliderItem} ></Slide>)
            }
        </div>

 
    );
};

export default Slider;