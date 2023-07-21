import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({data, index}) => {
    const {
        name,
        _id,
        price,
        pictureURL,
        sellerEmail,
        sellerName,
        availableQuantity,
        subCategory,
      } = data;
    
    return (
       
        <tr>
            <td>
                {index + 1}
            </td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="w-24 rounded-xl">
                    <img
                      src={pictureURL}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                        <div className="font-bold">{ name}</div>
                        <div className="text-sm opacity-50">{ subCategory}</div>
                </div>
              </div>
            </td>
            <td>
              {sellerName}
              <br />
              <span className="badge badge-ghost badge-sm">
               {sellerEmail}
              </span>
            </td>
            <td>${price} <br /> Quantity: { availableQuantity}</td>
            <th>
              <Link to={`/toysDetail/${_id}`}><button className="btn button-primary btn-sm">Details</button></Link>
            </th>
          </tr>
    );
};

export default AllToysRow;