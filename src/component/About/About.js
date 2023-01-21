import React from 'react';

const About = () => {
    return (
        <div className='font-poppins'>
            <h3 className='text-4xl font-poppins mt-10 font-bold'>See Our Team</h3>
            <div className='grid sm:grid-cols-3 gap-7 mx-12 mt-10 mb-20'>
                <div className="flex flex-col max-w-md p-6 dark:bg-gray-900 dark:text-gray-100">
                    <img src="https://images.unsplash.com/photo-1567894340315-735d7c361db0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80" alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
                    <div>
                        <h2 className="text-xl mt-4 mb-4 font-semibold">Lee Chan</h2>
                        <h3 className='text-2xl font-semibold mb-2'>Hair Color Specialist</h3>
                        <p className='text-xl font-semibold'>1 Year of Experience</p>
                    </div>
                </div>
                <div className="flex flex-col max-w-md p-6 bg-black text-yellow-400">
                    <img src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
                    <div>
                        <h2 className="text-xl mt-4 mb-4 font-semibold">Mitchel Ryan</h2>
                        <h3 className='text-2xl font-semibold mb-2'>Hair Cut Specialist</h3>
                        <p className='text-xl font-semibold'>3 Years of Experience</p>
                    </div>
                </div>
                <div className="flex flex-col max-w-md p-6 dark:bg-gray-900 dark:text-gray-100">
                    <img src="https://images.unsplash.com/photo-1582893561942-d61adcb2e534?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80" alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
                    <div>
                    <h2 className="text-xl mt-4 mb-4 font-semibold">Zyan Huk</h2>
                        <h3 className='text-2xl font-semibold mb-2'>Beard Specialist</h3>
                        <p className='text-xl font-semibold'>2 Year of Experience</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;