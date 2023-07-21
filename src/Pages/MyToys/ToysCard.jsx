import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { FaTrash } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";

const ToysCard = ({data, index}) => {
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
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-20 rounded">
              <img src={pictureURL} />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
          </td>
          <td>
              {subCategory}
          </td>
      <td>
        {sellerName}
        <br />
        <span className="badge badge-ghost badge-sm">{sellerEmail}</span>
      </td>
      <td>
        ${price}  
      </td>
      <td>
      {availableQuantity}
      </td>
      <th>
        <Link to={`/toysDetail/${_id}`}>
                  <button className="btn button-primary"><TbListDetails/></button>
        </Link> <br />
        <Link to={`/toysDetail/${_id}`}>
          <button className="btn button-primary "><RxUpdate/></button>
        </Link> <br />
        <Link to={`/toysDetail/${_id}`}>
          <button className="btn bg-red-600 text-white hover:bg-red-800 hover:animate-pulse "><FaTrash/></button>
        </Link>
      </th>
    </tr>
  );
};

export default ToysCard;
