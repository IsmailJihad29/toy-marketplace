import React from "react";
import Rating from "react-rating";

const TopFiguresCard = ({ data }) => {
  const {  name,  pictureURL, rating, } = data;
  return (
    <div className="card card-side bg-base-100 shadow-xl px-5 lg:px-0">
      <figure>
        <img className="max-w-sm lg:w-72 rounded-xl" src={pictureURL}  />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold font-primary uppercase text-rose-400">{ name}</h2>
        <p><Rating initialRating={rating} readonly /></p>
        
      </div>
    </div>
  );
};

export default TopFiguresCard;
