import React from 'react';
import { NavLink } from 'react-router';

const ProductCard = ({ product }) => {
    const { image, name, category, price } = product;
    return (
        <div>
            <div className=''>

                <div className="card bg-base-100 mb-5 lg:mb-0 shadow-sm hover:scale-105 transition ease-in-out border p-2">
                    <figure className='h-62 overflow-hidden'>
                        <img className='w-full object-cover' src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title text-2xl">{name}</h2>
                        <p className='font-medium text-[1.2rem]'>catagory: <span className='font-mono'>{category}</span></p>
                        <p className='font-medium text-[1.2rem]'>Price: <span className='font-mono'>${price}</span></p>
                        <div className="card-actions justify-end">
                            <div>
                                <NavLink className="btn border-[#778ca3] bg-[#b8e994] text-black font-semibold">View Details</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;