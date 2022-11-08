import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Footer from '../Shared/Footer/Footer';

const Login = () => {
    useTitle('Login')

    return (
        <div>
            <Footer></Footer>
        </div>
    );
};

export default Login;