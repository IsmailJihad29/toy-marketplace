import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const pictureURL = form.pictureURL.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;

    const toys = {
      name,
      pictureURL,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      availableQuantity,
      description,
    };

    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toys),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Added Toy Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => console.error(error.massage));
  };

  return (
    <div className="md:w-6/12 w-10/12 mx-auto my-16">
      <h1 className="mb-12 font-primary uppercase text-4xl font-extrabold  tr text-rose-500 lg:text-5xl  text-center border-0 border-b-4 border-rose-500 rounded-lg w-1/2 mx-auto  ">
        Add Your Toy
      </h1>
      <form id="myform" onSubmit={handleSubmit}>
        {/* email */}
        <div className="form-control mb-5 ">
          <label className="input-group-lg">
            <span className="">Seller Email</span>
            <input
              type="text"
              name="sellerEmail"
              required
              defaultValue={user?.email}
              disabled
              placeholder="Seller Email"
              className=" block py-2.5 px-4 w-full  bg-transparent border-0 border-b-2 border-rose-500 rounded-lg peer"
              // className="input input-bordered border-b-4 border-0 rounded-lg border-rose-500 focus:outline-none w-full"
            />
          </label>
        </div>
        {/* seller name */}
        <div className="form-control mb-5">
          <label className="input-group-lg">
            <span className="">Seller Name</span>
            <input
              required
              type="text"
              name="sellerName"
              defaultValue={user?.displayName}
              placeholder="Seller Name"
              disabled
              className="block py-2.5 px-4 w-full  bg-transparent border-0 border-b-2 border-rose-500 rounded-lg peer"
            />
          </label>
        </div>
        {/* toy name */}
        <div className="form-control mb-5">
          <label className="input-group-lg">
            <span className="">Toy Name</span>
            <input
              required
              type="text"
              name="name"
              placeholder="Seller Name"
              className="input input-bordered border-b-2 border-0 rounded-lg border-rose-500 focus:outline-none w-full"
            />
          </label>
        </div>
        {/* toy URL */}
        <div className="form-control mb-5">
          <label className="input-group-lg">
            <span className="">Toy URL</span>
            <input
              required
              type="url"
              name="pictureURL"
              placeholder="Seller Name"
              className="input input-bordered border-b-2 border-0 rounded-lg border-rose-500 focus:outline-none w-full"
            />
          </label>
        </div>
        {/* Sub Category */}
        <div className="my-3 form-control w-full text-black max-w-xs">
          <label className="label">
            <span className="label-text text-black ml-2">Category </span>
          </label>
          <select
            required
            id="subCategory"
            name="subCategory"
            className="select select-bordered"
          >
            <option disabled selected>
              select cetagory
            </option>

            <option value={"Avengers"}>Avenger</option>
            <option value={"Star Wars"}>Star Wars</option>
            <option value={"Transformers"}>Transformers</option>
          </select>
        </div>
        <div className="grid md:grid-cols-3 md:gap-6">
          {/* price */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              required
              type="number"
              name="price"
              id="price"
              className="block py-2.5 px-o w-full   bg-transparent border-0 border-b-2 border-rose-300 rounded-lg   focus:outline-none focus:ring-0  peer"
              placeholder=" "
            />
            <label
              htmlFor="price"
              className="peer-focus:font-medium absolute px-4  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              price
            </label>
          </div>
          {/* rating */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              required
              type="number"
              name="rating"
              id="rating"
              min="1"
              max="5"
              // value={value}
              //   onChange={handleInputChange}
              className="block py-2.5 px-0 w-full   bg-transparent border-0 border-b-2 border-rose-300 rounded-lg   focus:outline-none focus:ring-0  peer"
              placeholder=" "
            />
            <label
              htmlFor="rating"
              className="peer-focus:font-medium absolute px-4  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Rating
            </label>
          </div>
          {/* availableQuantity */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              required
              type="number"
              name="availableQuantity"
              id="availableQuantity"
              className="block py-2.5 px-0 w-full   bg-transparent border-0 border-b-2 border-rose-300 rounded-lg    focus:outline-none focus:ring-0  peer"
              placeholder=" "
            />
            <label
              htmlFor="availableQuantity"
              className="peer-focus:font-medium absolute  px-4  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Available Quantity
            </label>
          </div>
        </div>
        {/* description */}
        <div className="form-control mb-5">
          <label className="input-group-lg">
            <span className="">Description</span>
            <input
              required
              type="textarea"
              name="description"
              placeholder="Description"
              className="input input-bordered border-b-2 border-0 rounded-lg border-rose-500 focus:outline-none w-full"
            />
          </label>
        </div>
        <button type="submit" className="button-primary  ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddToys;
