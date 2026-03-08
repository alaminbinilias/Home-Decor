import axios from "axios"
import { useEffect, useState } from "react"


const useProduct =()=>{

    const [products,setproducts]=useState([]);

    useEffect(()=>{
        axios('../Data/data.json').then(data=>setproducts(data.data));
    },[])

    return products;
}

export default useProduct;