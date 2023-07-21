import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import reviewPhoto from "../../../../public/Images/reviews/review.gif";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="mt-36">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="lg:w-2/6 mx-auto text-center border-0 border-b-4 border-rose-600 rounded-xl"
      >
        <h1 className="text-xl font-bold">See What Our Customers Says </h1>
        <h1 className="font-bold text-2xl uppercase font-primary text-rose-600">
          Testimonials
        </h1>
      </div>

      <div className="lg:flex gap-5 items-center px-10 mx-auto">
        <div data-aos="zoom-in-left">
          <img className="" src={reviewPhoto} alt="" />
        </div>
        <div data-aos="zoom-in-right" className="my-20 lg:w-1/2 mx-auto">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="flex flex-col items-center m-24 ">
                  <div className="avatar">
                    <div className="w-24 mask mask-squircle">
                      <img src={review.photoURL} />
                    </div>
                  </div>
                  <p className="py-8">{review.testimonial}</p>
                  <h3 className="text-2xl text-orange-400">{review.name}</h3>
                  <Rating initialRating={review.rating} readonly />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
