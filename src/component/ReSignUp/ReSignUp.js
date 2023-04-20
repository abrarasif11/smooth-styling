import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';
import useTitle from '../../useHooks/useTitle';

const ReSignUp = () => {
    useTitle('Register')
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        const user = { name, email };
        console.log(user);
        fetch('https://smooth-styling-server.vercel.app/usersList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, email, password);

                handleEmailVerification();
                toast.warning("Please verify your email before login", { autoClose: 800 });
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
        // saveUser();
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }
    // const saveUser = (name, email) => {
    //     const user = { name, email };
    //     console.log(user);
    //     fetch('https://smooth-styling-server.vercel.app/usersList', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    // }
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
                                Register! <br className="hidden md:block" />
                                For New Account {' '}

                            </h2>
                        </div>
                        <div className="w-full font-poppins max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-gray-700 text-white rounded shadow-2xl p-7 sm:p-10">

                                <form onSubmit={handleSubmit}>
                                    <h3 className='text-4xl font-semibold mb-5'>Register Here</h3>
                                    <div className="mb-1  sm:mb-2">
                                        <label
                                            htmlFor="firstName"
                                            className="inline-block mr-[315px] mb-2 font-medium"
                                        >
                                            Name
                                        </label>
                                        <input type="text" id='name' class="block w-full py-3  text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Name" />
                                    </div>
                                    <div className="mb-1  sm:mb-2">
                                        <label
                                            htmlFor="firstName"
                                            className="inline-block mr-[315px] mb-2 font-medium"
                                        >
                                            PhotoURL
                                        </label>
                                        <input type="text" id='photoURL' class="block w-full py-3  text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Image Link" />
                                    </div>
                                    <div className="mb-1  sm:mb-2">
                                        <label
                                            htmlFor="firstName"
                                            className="inline-block mr-[315px] mb-2 font-medium"
                                        >
                                            Email
                                        </label>
                                        <input type="email" id='email' class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                                    </div>

                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mr-[290px] mb-2 font-medium"
                                        >
                                            Password
                                        </label>
                                        <input type="password" id='password' class="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                                    </div>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-yellow-400 transition duration-200 rounded shadow-md hover:bg-yellow-400 hover:text-black bg-black  focus:shadow-outline focus:outline-none"
                                        >
                                            Register
                                        </button>
                                        <p className='text-[#DC0000] mt-7 mb-7'> {error}</p>
                                        <br />

                                    </div>
                                    <div class="mt-6 text-center ">

                                        Already have an account? <Link to='/login' className='hover:underline'> <span className='text-yellow-400'> Log In</span></Link>

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