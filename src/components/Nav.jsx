import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContext);
  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center ">
      <a
        href="/create"
        className="border-2 border-blue-400 mx-3 rounded p-1 mt-3 mb-3 text-blue-400 font-medium"
      >
        {" "}
        Add New Product{" "}
      </a>
      <hr className="w-[80%]" />
      <h1 className="text-xl w-[80%] font-semibold my-2 text-center">CATEGORY</h1>
      <div className="w-4/5 pt-2 flex flex-col justify-center">
          {distinct_category.map((cat,i) => (
            <Link key={i} to={`/?category=${cat}`} className="mb-2 flex items-center font-medium">
              <span className="w-[15px] h-[15px] bg-zinc-300 rounded-full mr-2"></span>{" "}
              {cat}
            </Link>))}
      </div>
      ;
    </nav>
  );
};

export default Nav;
