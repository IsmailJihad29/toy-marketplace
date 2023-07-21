import React from "react";
import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const allToys = useLoaderData();
 
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Seller</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            allToys.map(( data, index) => <AllToysRow key={data._id} data={data} index={index}></AllToysRow>)
         }
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
