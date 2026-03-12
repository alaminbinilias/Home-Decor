import React from "react";
import { useParams } from "react-router";
import ProductDeatilPage from "../ProductDeatilPage/ProductDeatilPage";
import useProduct from "../../UseProduct/UseProduct";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useProduct();
  //console.log(products);
  //console.log(id)
  const convrtId = parseInt(id);
  //console.log(convrtId)

  const specificData = products.filter((product) => product.id === convrtId);

  //console.log(specificData)

  return (
    <div>
      <div className="border-2 border-gray-400 rounded-xl">
        {
          specificData.map(data=><ProductDeatilPage key={id} data={data} ></ProductDeatilPage>)
        }
      </div>
    </div>
  );
};

export default ProductDetails;
