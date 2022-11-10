import React from 'react';

const AboutPage = () => {
    return (
        <div className='text-center'>
            <div className='title'>
                <h1 className='text-5xl text-center mb-10 my-10'>About Me</h1>
            </div>
            <div className="hero rounded-lg">
                <div className="hero-content  p-0 flex-col lg:flex-row">
                    <div className='w-full'>
                        <img src="https://immigrationimpact.com/wp-content/uploads/2019/06/tory_johnson.jpg" alt='' className="max-w-sm w-full m-auto rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-full'>
                        <h1 className="text-5xl font-bold"> Elean Cruse</h1>
                        <h2 className='text-2xl font-semibold'>Journalist</h2>
                        <p className="py-6">Hay I am a Journalist of Usa . and i am working in BBC News, Here we will discuss: who journalists are and what they do; why people become journalists; and what qualities you need to be a good journalist.</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutPage;