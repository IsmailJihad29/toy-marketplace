import React, { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "./Card";

const CategoryShop = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const avengers = toys.filter((data) => data.subCategory == "Avengers");
  const starwar = toys.filter((data) => data.subCategory == "Star Wars");
  const tranformer = toys.filter((data) => data.subCategory == "Transformers");
  return (
    <div className="w-4/6 mx-auto mt-28">
      <div className="text-center mb-5">
        <h3 className="text-lg font-semibold uppercase font-primary">
          Grap Your Toys Based On
        </h3>
        <h1 className="text-3xl font-primary font-bold uppercase text-purple-500">
          Category
        </h1>
      </div>
      <Tabs>
        <TabList>
          <div className="tabs tabs-boxed text-fuchsia-500 font-bold uppercase">
            <Tab>Avengers</Tab>
            <Tab>Star Wars</Tab>
            <Tab>Tranformers</Tab>
          </div>
        </TabList>

        <TabPanel>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="grid gird-cols-1 lg:grid-cols-2 mx-auto gap-10 mb-10 mt-5 w-5/6  "
          >
            {avengers.map((data) => (
              <Card key={data._id} data={data}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="grid gird-cols-1 lg:grid-cols-2 mx-auto gap-10 mb-10 mt-5 w-5/6"
          >
            {starwar.map((data) => (
              <Card key={data._id} data={data}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="grid gird-cols-1 lg:grid-cols-2 mx-auto gap-10 mb-10 mt-5 w-5/6"
          >
            {tranformer.map((data) => (
              <Card key={data._id} data={data}></Card>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryShop;
