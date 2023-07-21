import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import ToysCard from './ToysCard';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const toys = useLoaderData()

    const filterToys = toys.filter((toys) => user?.email === toys.sellerEmail)
    const [myToys , setMytoys] = useState(filterToys)


    return (
        <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Cetagory</th>
            <th>Seller</th>
            <th>Price</th>
            <th>Quantity</th>
            <th> Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            myToys.map(( data, index) => <ToysCard key={data._id} data={data} index={index}></ToysCard>)
         }
        </tbody>
      </table>
    </div>
    );
};

export default MyToys;