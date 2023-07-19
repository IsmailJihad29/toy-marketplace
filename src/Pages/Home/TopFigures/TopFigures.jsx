import React, { useEffect, useState } from "react";
import TopFiguresCard from "./TopFiguresCard";

const TopFigures = () => {
  const [topToys, setTopToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setTopToys(data);
      });
  }, []);

  const sortedToys = topToys.sort((a, b) => b.rating - a.rating).slice(0, 6);
  

  return (
    <div className="grid lg:grid-cols-3">
      {
        sortedToys.map(data => <TopFiguresCard key={data._id} data={data}></TopFiguresCard>)
      }
    </div>
  );
};

export default TopFigures;
