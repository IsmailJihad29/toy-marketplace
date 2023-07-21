import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { _id, name, price, pictureURL, rating,  } = data;
  return (
    <div className="card w-full lg:w-96  bg-base-100 shadow-xl image-full">
      <figure>
        <img src={pictureURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold font-primary uppercase text-white">
          {name}
        </h2>
        <p className="text-purple-500 font-semibold">Price: ${price}</p>
        <p>
          <Rating initialRating={rating} readonly />
        </p>
        <div className="card-actions ">
          <Link to={`/toysDetail/${_id}`} >
            <button className="btn button-primary">See Details </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
