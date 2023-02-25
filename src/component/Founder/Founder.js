import React from 'react';

const Founder = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://shorebeautyschool.edu/wp-content/uploads/2018/05/Barber-Beard-Slider-5-2.png" alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-poppins text-black font-bold">Message From Our Founder</h1>
                        <p className="text-black font-poppins py-6">Welcome to our barber shop! As the founder, I'm proud to say that our goal is to provide exceptional haircuts and grooming services that not only make you look good, but also make you feel good. Come in and experience the difference for yourself!</p>
                        <button className="px-3 py-3 rounded font-poppins text-yellow-400 bg-black">Give FeedBack</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Founder;