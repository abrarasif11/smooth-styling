import React from 'react';

const Gallery = () => {
    return (
        <div>
            <h1 className='mx-auto text-black text-5xl mt-20 font-poppins
               font-bold'>Our Gallery </h1>
            <section className="py-6  dark:bg-gray-800 dark:text-gray-50">
                <div className="container  grid grid-cols-1 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img alt="" className="w-full hover:scale-105 transition-all duration-700 h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                    <img alt="" className="w-full hover:scale-105 transition-all duration-700 h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1514336937476-a5b961020a5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                    <img alt="" className="w-full hover:scale-105 transition-all duration-700 h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
                    <img alt="" className="w-full hover:scale-105 transition-all duration-700 h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1568339434343-2a640a1a9946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                    <img alt="" className="w-full hover:scale-105 transition-all duration-700 h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1634480787543-3da33a8918c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxhSURUTWNyOU9fRXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                    <img alt="" className="w-full hover:scale-105 transition-all duration-700 h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8YUlEVE1jcjlPX0V8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
                    <img alt="" className="w-full hover:scale-105 transition-all duration-700 h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1618049049816-43a00d5b0c3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXxhSURUTWNyOU9fRXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                    <img alt="" className="w-full hover:scale-105 transition-all duration-700 h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://images.unsplash.com/photo-1622296089780-1aba6f53dbb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
            </section>
        </div>
    );
};

export default Gallery;