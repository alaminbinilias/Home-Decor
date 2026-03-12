import React from "react";

import deleteIcon from "../../Images/delete.png"
const WishListCard = ({ item }) => {
  return (
    <div>
      <div className="flex justify-between items-center border-gray-400 rounded-2xl border-2 px-2 mb-5">
        {/* Left Section */}
        <div className="p-2 flex items-center gap-3">
          <div className="">
            <img className="w-40 h-30 rounded-md" src={item.image}></img>
          </div>
          <div>
            <p className="font-bold text-xl">{item.name}</p>
            <p className="font-mono font-medium text-[1.2rem]">
              {item.category}
            </p>
            <p className="font-mono font-medium text-[1.2rem]">
              {item.material}
            </p>
            <p className="font-mono font-medium text-[1.2rem]">{item.color}</p>
          </div>
        </div>

        {/* Right Section */}
        <div>
            <img className="w-7  mr-5 cursor-pointer" src={deleteIcon}></img>
        </div>

      </div>
    </div>
  );
};

export default WishListCard;
