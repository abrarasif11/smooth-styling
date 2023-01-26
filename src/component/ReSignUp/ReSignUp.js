import React from 'react';
import { Link } from 'react-router-dom';

const ReSignUp = () => {
    return (
        <div className="relative">
            <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-poppins text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                <span className='text-yellow-400'> Smooth Styling</span>
                                <br />
                                Sign Up! <br className="hidden md:block" />
                                For New Account {' '}

                            </h2>


                        </div>
                        <div className="w-full font-poppins max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">

                                <form>
                                    <h3 className='text-4xl font-semibold mb-5'>Sign Up Here</h3>
                                    <div className="mb-1  sm:mb-2">
                                        <label
                                            htmlFor="firstName"
                                            className="inline-block mr-[315px] mb-1 font-medium"
                                        >
                                            Name
                                        </label>
                                        <input
                                            placeholder="Enter your username"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            name="firstName"
                                        />
                                    </div>
                                    <div className="mb-1  sm:mb-2">
                                        <label
                                            htmlFor="firstName"
                                            className="inline-block mr-[315px] mb-1 font-medium"
                                        >
                                            PhotoURL
                                        </label>
                                        <input
                                            placeholder="Enter your Image Link"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            name="firstName"
                                        />
                                    </div>
                                    <div className="mb-1  sm:mb-2">
                                        <label
                                            htmlFor="firstName"
                                            className="inline-block mr-[315px] mb-1 font-medium"
                                        >
                                            Email
                                        </label>
                                        <input
                                            placeholder="Enter your email"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            name="firstName"
                                        />
                                    </div>

                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mr-[290px] mb-1 font-medium"
                                        >
                                            Password
                                        </label>
                                        <input
                                            placeholder="Enter your password"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                        />
                                    </div>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-yellow-400 transition duration-200 rounded shadow-md hover:bg-yellow-400 hover:text-black bg-black  focus:shadow-outline focus:outline-none"
                                        >
                                            Sign In
                                        </button>
                                        <br />

                                    </div>
                                    <div class="mt-6 text-center ">

                                        Already have an account? <Link to='/login' className='hover:underline'> <span className='text-blue-600'> Log In</span></Link>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReSignUp;