import React from 'react';

const Slide = ({ sliderItem }) => {
    const { image, id, prev, next } = sliderItem;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full my-5  ">
            <img src={image} alt='picture not found' className="w-full h-full rounded-none" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default Slide;