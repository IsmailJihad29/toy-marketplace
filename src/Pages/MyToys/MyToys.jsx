import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import ToysCard from './ToysCard';
import Swal from 'sweetalert2';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const alltoys = useLoaderData()

    const myToys = alltoys.filter((toys) => user?.email === toys.sellerEmail)
    const [toys, setToys] = useState([myToys])
  
    
    const handleDelete = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/toys/${id}`, {
              method: "DELETE"
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
                const remainig = toys.filter((toy) => toy._id !== id)
                setToys(remainig)
              }
          })
        }
      })
    }

    return (
        <div>
            <div>
                <h1 className='uppercase font-bold font-primary text-3xl text-red-500  text-center mt-5'>My Toys</h1>
            </div>
             <div className="overflow-x-auto mx-auto">
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
            myToys.map(( data, index) => <ToysCard key={data._id} data={data} index={index} handleDelete={handleDelete} ></ToysCard>)
         }
        </tbody>
      </table>
    </div>
       </div>
    );
};

export default MyToys;