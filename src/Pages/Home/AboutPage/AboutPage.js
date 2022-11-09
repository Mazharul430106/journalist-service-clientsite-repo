import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <div className='title'>
                <h1 className='text-5xl text-center my-10'>About</h1>
            </div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-full'>
                        <img src="https://immigrationimpact.com/wp-content/uploads/2019/06/tory_johnson.jpg" alt='' className="max-w-sm w-full rounded-lg shadow-2xl" />

                    </div>
                    <div className='w-full'>
                        <h1 className="text-5xl font-bold"> Elena Curse</h1>
                        <p className="py-6">Hay I am a Journalist of Usa . and i am working in BBC News, Here we will discuss: who journalists are and what they do; why people become journalists; and what qualities you need to be a good journalist.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutPage;