import React, { Component } from "react";
import Slider from "react-slick";
import ImgOne from '../assets/gallery/one.jpg';
import ImgTwo from '../assets/gallery/800by800-3.jpg';
import ImgThree from '../assets/gallery/800by800-4.jpg';
import ImgFour from '../assets/gallery/seven.jpg';
import ImgFive from "../assets/gallery/eight.jpg";
import ImgSix from "../assets/gallery/800by800-9.jpg";
import ImgSeven from "../assets/gallery/3-scaled.jpg";

import ImgEight from "../assets/gallery/secOne.jpg";
import ImgNine from "../assets/gallery/sectTwo.jpg";
import ImgTen from "../assets/gallery/727-by.jpg";





function Sliders() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className=" overflow-hidden">
      <Slider {...settings}>
        <div className="h-[300px]">
          <img  src={ImgOne} alt="" />
        </div>
        <div className="h-[300px]">
          <img src={ImgTwo} alt="" />
        </div>
        <div className="h-[300px]">
          <img src= {ImgThree} alt="" />
        </div>
        <div className="h-[300px]">
        <img src= {ImgFour} alt="" />
        </div>
        <div className="h-[300px]">
         <img src={ImgFive} alt="" />
        </div>
        <div className="h-[300px]">
         <img src={ImgSix} alt="" />
        </div>
        <div className="h-[300px]">
         <img src={ImgSeven} alt="" />
        </div>
        <div className="h-[300px]">
         <img src={ImgEight} alt="" />
        </div>
        <div className="h-[300px]">
         <img src={ImgNine} alt="" />
        </div>
        <div className="h-[300px]">
         <img src={ImgTen} alt="" />
        </div>
      </Slider>
      <div className="flex justify-around pt-[100px] pb-[100px]">
        <div>
         <h1 className="text-[3rem] text-[#977349]">
            Get In Touch With Us Today
         </h1>
        </div>
        <div>
           <h1 className="text-[3rem] text-[#977349]">
            +23455433222
           </h1>
        </div>
      </div>
    </div>
  );
}

export default Sliders;