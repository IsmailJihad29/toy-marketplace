import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { BiSolidCategory } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../providers/AuthProvider";

const ToysDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const toaster = () => toast("Successfully added to your cart!!");

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
    subCategory,
  } = data;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={pictureURL} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="ml-5">
            <div className="badge badge-warning gap-2">
              <BiSolidCategory />
              {subCategory}
            </div>

            <h1 className="text-5xl font-bold font-primary uppercase">
              {name}
            </h1>
            <h1 className="text-xl font-semibold">
              {" "}
              <span className="text-pink-500">Seller:</span> {sellerName}
            </h1>
            <h1 className="text-xl font-semibold">
              <span className="text-pink-500">Email:</span> {sellerEmail}
            </h1>
            <p className="font-semibold mb-3">
              {" "}
              <span className="text-pink-500">Available Quantity:</span>{" "}
              {availableQuantity}
            </p>
            <p>
              <Rating initialRating={rating} readonly />
            </p>
            <p className="text-2xl font-bold font-sans text-purple-400 uppercase  animate-pulse">
              Price: {price}
            </p>

            <p className="py-6">{description}</p>

            {user?.email !== sellerEmail ? (
               <button onClick={toaster} className="btn button-primary">
               Buy Now
             </button> 
            ) : (
              <Link to={`/update/${_id}`}>
                <button  className="btn button-primary">
              Update Toy Info
            </button> 
                </Link>
            )}
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ToysDetails;
