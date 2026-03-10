import React from "react";

const ProductDeatilPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="flex-row gap-5 lg:flex p-3">
        <div className="w-full">
          <img className=" h-100 w-full rounded-xl" src={data.image}></img>
        </div>
        <div className="p-5 w-full">
          <p className="font-bold font-mono text-3xl mb-2">{data.name}</p>
          <p className="font-medium font-mono text-xl border-b-2 w-full lg:w-200 pb-2 border-gray-400">
            Catagory: {data.category}
          </p>

          <p className="text-justify">
            <span className="mt-4 text-[1.1rem] font-medium">
              {" "}
              Description:
            </span>{" "}
            {data.description}
          </p>

          <div className="flex justify-end items-center">
            <button className="btn px-7 btn-primary mt-4">WishList</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeatilPage;
