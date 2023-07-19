import React from "react";

import banner1 from "../../../../public/Images/banner/banner1.jpg"
import banner2 from "../../../../public/Images/banner/banner2.jpg"
import banner3 from "../../../../public/Images/banner/banner3.png"
import banner4 from "../../../../public/Images/banner/banner4.jpg"
import banner5 from "../../../../public/Images/banner/banner5.jpg"
import banner6 from "../../../../public/Images/banner/banner6.jpg"

const Banner = () => {
  const bannerContent = (
    <>
      <div className="absolute flex items-center  left-0 top-0 h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
        <div className="text-white space-y-8 px-20 lg:w-7/12 w-full">
          <h1 className="text-3xl font-bold mb-2 font-primary uppercase">
            Unleash Your <br /> Action Figure Fantasy at <br />{" "}
            <span className="text-5xl text-purple-500 font-primary uppercase">
              Figlandia!
            </span>
          </h1>
          <h3 className="mb-5 font-semibold">
            Discover a world of action-packed adventures with our action figure
            toy website. Explore a vast collection of figures, unleash your
            imagination, and bring your favorite characters to life
          </h3>
          <div>
            <button className="button-primary">Discover More</button>
            <button className="button-primary">
             About Us
            </button>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="carousel  w-full h-[600px]   mb-20">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" />

        {bannerContent}

        <div className="absolute flex justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide6" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative  w-full">
        <img src={banner2} className="w-full" />
        {bannerContent}
        <div className="absolute flex justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        {bannerContent}
        <div className="absolute flex justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full" />
        {bannerContent}
        <div className="absolute flex justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={banner5} className="w-full" />
        {bannerContent}
        <div className="absolute flex justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={banner6} className="w-full" />
        {bannerContent}
        <div className="absolute flex justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
