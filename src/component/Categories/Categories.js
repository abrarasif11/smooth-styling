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
            <div className='grid sm:grid-cols-3 gap-7 mx-12 mt-10
        '>
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