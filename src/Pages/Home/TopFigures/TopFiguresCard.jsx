import React from 'react';

const TopFiguresCard = ({ data }) => {
    const { _id, name, price, pictureURL, rating, description } = data;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure>
                <img
                    className='max-w-sm'
            src={pictureURL}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    );
};

export default TopFiguresCard;