import React, { useState } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router';
import ProductCard from '../Component/ProductCard';
import arrow from '../Images/right-arrow.png';
import SearchNotFound from '../Component/SearchNotFound/SearchNotFound';
import useProduct from '../UseProduct/UseProduct';

const Home = () => {
    //const data = useLoaderData();
    const Data = useProduct();
    const parialData = Data.slice(0, 6);

    //search Data;
    const [searchData, setsearchData] = useState('');
    const HandleClick = (e) => {
        //console.log(e.target.value);
        setsearchData(e.target.value);
    }

    //const purifiedData = searchData.split(' ').join('').toLowerCase();
    //console.log(purifiedData);
    //const searchdata = Data.filter(product => product.name.toLowerCase().includes(purifiedData));

    //console.log(searchdata);

    return (
        <div>
            
            <div>
                <div className='mb-7 -mt-6'>
                    <p className='font-bold text-3xl font-mono text-gray-700'>Featured Products</p>
                </div>
            </div>

            <div className='grid  grid-cols-1 px-0  md:grid-cols-2 lg:grid-cols-3 lg:gap-5 w-full'>
                {
                    parialData.map((product, index) => <ProductCard key={index} product={product} ></ProductCard>)
                }
            </div>

            <div className='mt-3 flex justify-end items-center gap-2 cursor-pointer'>
                <div>
                    <NavLink to='./products' className='text-xl font-semibold underline'>See All</NavLink>
                </div>
                <div>
                    <img width='20px' src={arrow} alt="" />
                </div>
            </div>
        </div>

    );
};

export default Home;