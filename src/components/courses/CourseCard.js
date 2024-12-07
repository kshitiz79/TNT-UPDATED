import Link from "next/link";
import React, { useEffect } from "react";

const CourseCard = (props) => {
  const { item, isHomePage } = props;
  const ratingStars = parseInt(item.rating.stars);
  // console.log("rating", ratingStars)
  if (item.training.isTrending == "true" && isHomePage) {
    // console.log("is home page")
    return drawCard(item, ratingStars);
  } else {
    return drawCard(item, ratingStars);
  }
};

export default CourseCard;

const starIcon = (
  <svg
    className="w-4 h-4 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 20"
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  </svg>
);

const drawCard = (item, ratingStars) => {
  return (
    <div className=" from-black via-blue-900 to-blue-700 border border-gray-200 rounded-sm shadow-lg dark:bg-gradient-to-r mx-3 mt-3 mb-4 relative z-0 transition-all duration-300 hover:scale-105 p-2">
    
      <div className="px-2 py-3">
        <Link href={"courses/" + item.id}>
          <h2 className="uppercase mb-3 font-bold text-black text-lg line-clamp-2">
          {item.training.name}

          </h2>
          <h6 className="mb-3 line-clamp-3 overflow-hidden text-gray-600 text-base">
          {item.description}
          </h6>
          {/* <div className="lg:flex justify-between items-center">
            <div className="flex mt-1 w-[40%]">
              {[...Array(ratingStars)].map((e, i) => (
                <span className="lg:w-[20%]" key={i}>
                  {starIcon}
                </span>
              ))}
            </div>
            <p className=" text-black text-sm mt-2">{item.rating.ratingDesc}</p>
          </div> */}
            <img
        className=" w-28 h-28 mx-auto"
        src={item.thumbnailImage}
        alt={item.training.name}
      />
        </Link>
      </div>
    </div>
  );
};
