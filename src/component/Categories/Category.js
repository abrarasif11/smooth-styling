import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { picture, name, price } = category;
    console.log(category);
    return (
        <div class="max-w-xs overflow-hidden font-poppins hover:scale-105 transition-all duration-700 rounded-lg shadow-lg bg-white">
            <div class="px-4 py-2">
                <h1 class="text-3xl font-bold text-black uppercase dark:text-white">{name}</h1>

            </div>

            <img class="object-cover w-[80]px h-48 mt-2" src={picture} alt="NIKE AIR" />

            <div class="flex items-center justify-between px-4 py-2 bg-black">
                <h1 class="text-lg font-bold text-white">Price : {price}TK</h1>
                <Link to='/appointment'>
                    <button class="px-2 py-1 text-xs font-semibold text-black uppercase transition-colors duration-300 transform bg-white rounded hover:bg-black hover:text-yellow-400 focus:outline-none">Appoint Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Category;