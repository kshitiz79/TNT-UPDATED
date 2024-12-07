"use client";
import "./Courses.scss";
import { getCourses, getTrendingCourses } from "@/data/api/Api";
import { rightArrow, leftArrow } from "../common/Icons";
import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import Slider from "react-slick";
import Link from "next/link";

const Courses = (props) => {
  const { title, isHomePage } = props;
  const [trainings, setTrainings] = useState([]);

  const getCoursesArr = async () => {
    let arr = [];
    if (isHomePage) {
      arr = await getTrendingCourses();
    } else {
      arr = await getCourses();
    }
    setTrainings(arr);
    // console.log("Courses array", arr)
  };

  useEffect(() => {
    getCoursesArr();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    fade: false,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="  items-center  flex justify-center w-full p-6 course-section-wrapper">
      <div className="  container ">
        <div className="flex justify-center items-center flex-col mb-6 ml-6">
          {title && <h2>{title}</h2>}
         
           <div className='text-gray-600 w-[35%] text-center'>Problems trying to resolve the conflict between 
           the two major realms of Classical physics: Newtonian mechanics  </div>
        </div>

        {isHomePage && trainings && trainings.length > 0 ? (
          <Slider {...settings} className="pb-6">
            {trainings &&
              trainings.map((item, index) => (
                <CourseCard key={index} item={item} isHomePage={isHomePage} />
              ))}
          </Slider>
        ) : (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${
              !isHomePage ? "mb-6" : ""
            }`}
          >
            {trainings &&
              trainings.map((item, index) => (
                <CourseCard key={index} item={item} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`left-arrow ${className}`} onClick={onClick}>
      {rightArrow}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      {leftArrow}
    </div>
  );
}
