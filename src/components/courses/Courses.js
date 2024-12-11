"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import "./Courses.scss";

import { getCourses, getTrendingCourses } from "@/data/api/Api";
import { rightArrow, leftArrow } from "../common/Icons";
import CourseCard from "./CourseCard";

const Courses = (props) => {
  const { title = "Our Courses", isHomePage = false } = props;
  const [trainings, setTrainings] = useState([]);

  // Fetch the course data
  const getCoursesArr = async () => {
    let arr = [];
    if (isHomePage) {
      arr = await getTrendingCourses();
    } else {
      arr = await getCourses();
    }
    setTrainings(arr || []); // Ensure it is always an array
  };

  useEffect(() => {
    getCoursesArr();
  }, []);

  // Slider Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    fade: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <div className="course-section-wrapper items-center flex justify-center w-full p-6">
      <div className="container">
        {/* Section Title */}
        <div className="flex justify-center items-center flex-col mb-6">
          <h2 className="text-3xl font-bold text-black mb-4">{title}</h2>
          <p className="text-gray-600 lg:w-[35%] w-auto text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>

        {/* Slider or Grid */}
        {isHomePage && trainings.length > 0 ? (
          <Slider {...settings} className="pb-6">
            {trainings.map((item, index) => (
              <CourseCard key={index} item={item} isHomePage={isHomePage} />
            ))}
          </Slider>
        ) : (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${
              !isHomePage ? "mb-6" : ""
            }`}
          >
            {trainings.map((item, index) => (
              <CourseCard key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;

// Custom Slider Arrows
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`next-arrow ${className}`}
      onClick={onClick}
      style={{ fontSize: "24px", cursor: "pointer" }}
    >
      {rightArrow}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`prev-arrow ${className}`}
      onClick={onClick}
      style={{ fontSize: "24px", cursor: "pointer" }}
    >
      {leftArrow}
    </div>
  );
}
