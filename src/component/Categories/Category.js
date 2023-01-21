import React from 'react';

const Category = ({ category }) => {
    const { picture, name, price } = category;
    console.log(category);
    return (
        <div>
            <div className="card font-poppins mb-10 w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Price : {price}Tk</p>
                    <div className="card-actions">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;