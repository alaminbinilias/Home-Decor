import React, { useState } from 'react';
import useProduct from '../../UseProduct/UseProduct';
import ProductCard from '../ProductCard';
import SearchNotFound from '../SearchNotFound/SearchNotFound';

const AllProducts = () => {

    const products = useProduct();
    //console.log(products);

    const [searchValue,setsearchValue]=useState('');

    const HandleSearch=(event)=>{
        setsearchValue(event.target.value);
    }

    //console.log(searchValue);

    const purifiedSearchData=searchValue.trim().split(' ').join('').toLowerCase();
    //console.log(purifiedSearchData);

    const FilteredData=products.filter(product=>product.name.toLowerCase().includes(purifiedSearchData));

    //console.log(FilteredData);

    return (
        <div>

            <div className='flex items-center justify-between mb-5'>
                <div className='flex gap-2 items-end font-mono'>
                    <p className='font-bold text-2xl font-mono'>All Products</p>
                    <p className='hidden md:block lg:block'>(Found {FilteredData.length} items)</p>
                </div>
                <div>
                    <label className="input w-40 lg:w-65 ">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input defaultValue={searchValue} onChange={HandleSearch} className=' font-semibold' type="input" required placeholder="Search" />
                    </label>
                </div>
            </div>




            <div className='grid mx-2 md:mx-0 lg:mx-0 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5'>
                {
                    FilteredData.length===0 ? <SearchNotFound></SearchNotFound>
                    : FilteredData.map((product,index) => <ProductCard key={index} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;