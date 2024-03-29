/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useLoaderData } from "react-router-dom";
import { formatPrice, customFetch, getAmountOptions } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params: { id } }) => {
  try {
    const response = await customFetch(`/products/${id}`);
    return { product: response.data.data };
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error; // Re-throw the error to propagate it further
  }
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  console.log(product);
  const { image, title, price, description, colors, company } =
    product.attributes;
  const nairaAmount = formatPrice(price);
  const [productsColor, setProductsColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  return (
    <section>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCTS */}
      <div className=" mt-6 grid grid-cols-2 gap-4 gap-y-8 lg:grid-cols-2 lg:gap-x16">
        {/* IMAGE */}
        <div>
          <img
            src={image}
            alt={title}
            className="w-96 h-96 object-cover rounded-lg lg:w-full"
          />
        </div>
        {/* INFO */}
        <div className="ml-3">
          <h1 className="text-3xl capitalize font-bold">{title}</h1>
          <h4 className="text-xl text neutral-content font-bold mt-4">
            {company}
          </h4>
          <p className="text-xl mt-3">{nairaAmount}</p>
          <p className="text-xl mt-6 leading-8">{description}</p>

          {/* Color Selection Logic */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              {" "}
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productsColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      setProductsColor(color);
                    }}
                  ></button>
                );
              })}
            </div>
          </div>
          <div>
            {/* AMOUNT */}
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="amount">
                <h4 className="capitalize text-md tracking-wider font-medium text-md">
                  amount
                </h4>
              </label>
              <select
                className="select select-secondary select-bordered select-md"
                id="amount"
                value={amount}
                onChange={handleAmount}
              >
                {getAmountOptions(5)}
              </select>
            </div>
            {/* CART */}
            <div className="mt-10">
              <button
                className="btn btn-secondary btn-md"
                onClick={() => console.log("add to cart")}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
