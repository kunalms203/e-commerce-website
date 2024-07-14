import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/Axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  console.log(category);
  const [filteredProducts, setfilteredProducts] = useState(null);
  const getproductcategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      console.log(data);
      setfilteredProducts(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (category != "undefined") {
      getproductcategory();
    }else{
      setfilteredProducts(products);
    }
  }, [category, products]);
  console.log(filteredProducts);
  return products ? (
    <>
      <Nav />
      <div className="box w-[85%] p-[3%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((p, i) => (
            <Link
              key={p.id}
              to={`/details/${p.id}`}
              className="card h-[30vh] w-[18%]  border-2 shadow p-2 flex justify-center flex-col items-center "
            >
              <div
                className="image bg-contain h-[75%] w-[90%] bg-no-repeat bg-center hover:scale-105  "
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="mt-2 font-semibold hover:scale-105 hover:text-blue-500 text-center">
                {p.title}
              </h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <>
      <Loading />
    </>
  );
};

export default Home;
