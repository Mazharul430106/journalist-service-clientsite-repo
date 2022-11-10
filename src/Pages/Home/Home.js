import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Footer from '../Shared/Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import Contact from './Contact/Contact';
import Services from './Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
    useTitle('Home');

    return (
        <div className='mb-10'>
           <Slider></Slider>
           <Services></Services>
           <AboutPage></AboutPage>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;