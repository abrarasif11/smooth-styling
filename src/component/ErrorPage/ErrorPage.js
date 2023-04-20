import React from 'react';
import error from '../../assests/Lovepik_com-401803270-404-page-error.png'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div>
            <img className='mx-auto h-[600px]' src={error} alt="" />

            <Link to='/'>
                <button type='button' className=' bg-black hover:bg-yellow-400 font-poppins font-medium hover:text-black text-yellow-400 px-2 py-2 rounded-lg'>Back To Home Page</button>
            </Link>

        </div>

    );
};

export default ErrorPage;