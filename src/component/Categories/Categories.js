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
              <h3 className='mx-auto text-black text-5xl mt-10 font-poppins
               font-bold mb-20'>Our Categories</h3>
            <div className='grid mt-10 mx-20 mb-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8  '>
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