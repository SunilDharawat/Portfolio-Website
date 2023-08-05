import React from 'react'
import './testimonials.css';
import Avt1 from '../../assets/boy1.png';

// import Swiper core and required modules
import {  Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

const data = [
  {
    avatar: Avt1,
    name: "My Strenghts",
    review:
      "I am a quick learner, good listener, team player, confident and hard working person.",
  },
  {
    avatar: Avt1,
    name: "My Hobbies",
    review:
      "Watching Poadcasts, Video Editing, Playing Cricket and doing something creative.",
  },
  {
    avatar: Avt1,
    name: "My Shorterm Goals",
    review:
      "My Shorterm goal is to utilize my skills and ability in the Information industry that offer professional growth.",
  },
  {
    avatar: Avt1,
    name: "My Weakness",
    review:
      "I am comfirtable in doing indivisually work as well as team work.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Get to know me better</h5>
      <h2>Personal Details</h2>

      <Swiper
        className="container testimonials-container" // install Swiper modules
        modules={[ Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client-avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client-name">{name}</h5>
              <small className="client-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials