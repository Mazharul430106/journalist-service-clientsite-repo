import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Footer from '../Shared/Footer/Footer';
import Services from './Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
    useTitle('Home');

    return (
        <div>
           <Slider></Slider>
           <Services></Services>
           <Footer></Footer>
        </div>
    );
};

export default Home;