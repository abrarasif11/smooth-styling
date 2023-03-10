import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Testimonials from './Testimonials';

const Testimonial = () => {
    const testimonials = useLoaderData()
    return (
        <div>
        <div>
         <h3 className='mx-auto text-black text-4xl font-semibold mt-10 font-poppins'>See Our Customer Reviews</h3>
      </div>
      {
         testimonials.map(testimonial => <Testimonials
         key={testimonial._id}
         testimonial={testimonial}
         ></Testimonials>)
      }
  </div>
    );
};

export default Testimonial;