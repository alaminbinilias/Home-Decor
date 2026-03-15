import React from "react";
import { useNavigate } from "react-router";
import setData from "../../Utility/Utility";

const ProductDeatilPage = ({ data }) => {
  //console.log(data.id);
  const navigate = useNavigate();
  const BackHandle = () => {
    //console.log("Clicked");
    navigate(-1);
  };

  //WishList Handle

  const HandleWish = () => {
    setData(data);
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:flex p-3">
        <div>
          <img
            className=" h-100 w-full lg:w-200 rounded-xl"
            src={data.image}
          ></img>
        </div>
        <div className="p-5 w-full">
          <p className="font-bold font-mono text-3xl mb-2">{data.name}</p>
          <p className="font-medium font-mono border-b-2 text-xl w-full pb-2 border-gray-400">
            Catagory: {data.category}
          </p>
          <div>
            <p className="text-justify ">
              <span className="mt-4 text-[1.1rem] font-medium mr-1">
                {" "}
                Description:
              </span>{" "}
              {data.description}
            </p>
          </div>

          <div className="flex gap-2 justify-start items-center">
            <button onClick={HandleWish} className="btn px-7 btn-primary mt-4">
              WishList
            </button>
            <button
              onClick={BackHandle}
              className="btn px-7 btn-success btn-outline mt-4"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeatilPage;
