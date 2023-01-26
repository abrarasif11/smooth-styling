import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
              <h3 className='mx-auto text-4xl mt-10 font-poppins
               font-bold'>Our Categories</h3>
            <div className='grid mt-10 mb-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 lg:ml-20 sm:ml-10'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    >
                    </Category>)
                }
            </div>
        </div>
    );
};

export default Categories;