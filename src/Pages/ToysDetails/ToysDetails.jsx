import React from "react";
import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";

const ToysDetails = () => {
  const data = useLoaderData();

  const {
    _id,
    name,
    price,
    pictureURL,
    rating,
    description,
    sellerEmail,
    sellerName,
    availableQuantity,
  } = data;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={pictureURL} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="ml-5">
          <h1 className="text-5xl font-bold font-primary uppercase">{name}</h1>
          <h1 className="text-xl font-semibold"> <span className="text-pink-500">Seller:</span> {sellerName}</h1>
          <h1 className="text-xl font-semibold"><span className="text-pink-500">Email:</span> {sellerEmail}</h1>
                  <p className="font-semibold mb-3">
                      
            {" "}
            <span className="text-pink-500">Available Quantity:</span> {availableQuantity}
          </p>
          <p>
            <Rating initialRating={rating} readonly />
                  </p>
                  <p className="text-2xl font-bold font-sans text-purple-400 uppercase  animate-pulse">
                      Price: { price}
                  </p>

          <p className="py-6">{description}</p>
          <button className="btn button-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ToysDetails;
