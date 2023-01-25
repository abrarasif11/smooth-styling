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
            <div className='mt-10 mb-10 grid mx-10 sm:grid-cols-3 gap-3 ml-10 sm:ml-3'>
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