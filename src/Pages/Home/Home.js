import React from 'react';
import useTitle from '../../Hooks/useTitle';
import AboutPage from './AboutPage/AboutPage';
import Contact from './Contact/Contact';
import Services from './Services/Services';
import Slider from './Slider/Slider';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    useTitle('Home');

    return (
        <div className='mb-10'>
           <Slider></Slider>
           <Services></Services>
           <AboutPage></AboutPage>
           <Newsletter></Newsletter>
           <Contact></Contact>
        </div>
    );
};

export default Home;