import React from 'react';
import { getDataLS } from './../Utility/Utility';
import WishListCard from './../Component/WishListCard/WishListCard';

const WishList = () => {
    const data=getDataLS();
    //console.log(data);
    return (
        <div>


            {/* wishlist Section */}
            <div>
                {
                    data.map(item=><WishListCard item={item}></WishListCard>)
                }
            </div>
        </div>
    );
};

export default WishList;