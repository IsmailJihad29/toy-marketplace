import React from "react";

import img1 from "../../../../public/Images/gallery/img1.jpg";
import img2 from "../../../../public/Images/gallery/img3.jpeg";
import img3 from "../../../../public/Images/gallery/img2.jpg";
import img4 from "../../../../public/Images/gallery/image4.jpg";
import img5 from "../../../../public/Images/gallery/img5.jpg";
import img6 from "../../../../public/Images/gallery/img-6.jpg";
import img7 from "../../../../public/Images/gallery/img-7.jpg";
import img8 from "../../../../public/Images/gallery/img-8.jpg";

const Gallery = () => {
  return (
      <div className="mt-20 mx-auto">
          <h1 className="text-center mb-10 text-4xl font-bold font-primary uppercase text-purple-500  animate-pulse">Our Populer Toys Gallery</h1>
      <div className="grid grid-cols-1">
        <div className="grid  mx-auto grid-col-2 lg:grid-cols-4 grid-rows-3 gap-5 mb-10 md:w-5/6">
          <div data-aos="fade-right" className="row-span-2  rounded-xl hover:scale-105 transform transition-transform duration-300">
            <img className="rounded-xl h-full " src={img1} alt="" />
          </div>
          <div data-aos="fade-down" className="rounded-xl h-38  hover:scale-105 transform transition-transform duration-300">
            <img className="h-full rounded-xl" src={img2} alt="" />
          </div>
          <div data-aos="fade-up" className="row-span-2 rounded-xl hover:scale-105 transform transition-transform duration-300">
            <img className="rounded-xl h-full" src={img3} alt="" />
          </div>
          <div  data-aos="fade-left" className="rounded-xl h-38 hover:scale-105 transform transition-transform duration-300">
          <img className="rounded-xl h-full " src={img4} alt="" />
          </div>
          <div data-aos="fade-up" className="row-span-2 rounded-xl hover:scale-105 transform transition-transform duration-300">
          <img className="rounded-xl h-full " src={img5} alt="" />
          </div>
          <div data-aos="fade-up" className="row-span-2 rounded-xl hover:scale-105 transform transition-transform duration-300">
          <img className="rounded-xl h-full" src={img6} alt="" />
          </div>
          <div data-aos="fade-right" className="rounded-xl h-38 hover:scale-105 transform transition-transform duration-300">
          <img className="rounded-xl h-full" src={img7} alt="" />
          </div>
          <div data-aos="fade-left" className="rounded-xl h-38 hover:scale-105 transform transition-transform duration-300">
          <img className="rounded-xl h-full" src={img8} alt="" />
          </div>
        </div>
          </div>
          
    </div>
  );
};

export default Gallery;
