import React, { useEffect, useState } from "react";
import TopFiguresCard from "./TopFiguresCard";

const TopFigures = () => {
  const [topToys, setTopToys] = useState([]);

  useEffect(() => {
    fetch("https://figlandia-server-ismailjihad29.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setTopToys(data);
      });
  }, []);

  const sortedToys = topToys.sort((a, b) => b.rating - a.rating).slice(0, 6);
  

  return (
    <div className="mt-40">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="lg:w-2/6 mx-auto mb-10 text-center border-0 border-b-4 border-rose-600 rounded-xl"
      >
        <h1 className="text-xl font-bold">Our Top Rated Figue </h1>
        <h1 className="font-bold text-2xl uppercase font-primary text-rose-600">
          Grab Yours!!
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 w-full lg:w-3/4 mx-auto">
      {
        sortedToys.map(data => <TopFiguresCard key={data._id} data={data}></TopFiguresCard>)
      }
    </div>
    </div>
  );
};

export default TopFigures;
