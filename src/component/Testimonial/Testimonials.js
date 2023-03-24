import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Testimonials = ({ testimonial }) => {
    const { user } = useContext(AuthContext);
    const { name, reviews } = testimonial
    console.log(testimonial);
    return (

        <section>
            <div className={`container font-poppins mt-10 text-center flex flex-col  w-full max-w-lg p-6 mx-auto divide-y rounded-md  bg-black mb-10`}>
                <div className="flex space-x-4">
                    <div>
                        <img src={user?.photoURL} defaultValue={user?.photoURL} alt="" className="object-cover mb-5  w-12 h-12 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className={`font-xl text-white`}><span className={`text-yellow-400 `}>Username</span > - {name}</h4>
                    </div>
                </div>
                <div className={`p-4 space-y-2 text-sm `}>
                    <p className='font-xl text-xl text-white'><span className='text-yellow-400'>Customer Reviews </span>- {reviews}</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;