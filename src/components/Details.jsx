import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/Axios";
import Loading from "./Loading";

const Details = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  console.log(id);
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  return  (
    product ?
    <div className="m-auto p-[10%] h-[100%] w-[70%] flex justify-between items-center">
      <div className="w-[50%] h-4/5 object-scale-down object-center flex justify-center items-center">
        <img
        className="pr-6"
        src={`${product.image}`}
        alt="Product"
      />
      </div>
      <div className="w-[40%] ">
        <h1 className="text-2xl font-semibold mb-4">
          {product.title}
        </h1>
        <a href="/" className="text-sm text-zinc-500 hover:text-zinc-700 mb-4">
          {product.category}
        </a>
        <h6 className="text-sm text-zinc-500 mb-4 mt-1"> {`$ ${product.price}`}</h6>
        <p className="text-sm  text-black-600 mb-5 font-medium">
          {product.description}
        </p>
        <Link className="border-2 border-blue-300 rounded p-1 mt-3 mb-3 px-3 text-blue-400 mr-4">
          edit
        </Link>
        <Link className="border-2 border-red-300 rounded p-1 mt-3 mb-3 text-red-400 ">
          delete
        </Link>
      </div>
    </div> : 
    <Loading />
  )
};

export default Details;
