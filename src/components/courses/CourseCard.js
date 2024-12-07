import Link from "next/link";
import Image from "next/image";
import React from "react";


const CourseCard = (props) => {
  const { item, isHomePage } = props;

  const ratingStars = parseInt(item?.rating?.stars || 0);

  if (item?.training?.isTrending === "true" && isHomePage) {
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
    <div className="border border-gray-200 rounded-sm shadow-lg hover:scale-105 transition-all duration-300 p-2 mx-3 mt-3 mb-4">
      <div className="px-2 py-3">
        <Link href={`/courses/${item.id}`} passHref>
          <h2 className="uppercase mb-3 font-bold text-black text-lg line-clamp-2">
            {item?.training?.name}
          </h2>
          <h6 className="mb-3 line-clamp-3 text-gray-600 text-base">
            {item?.description}
          </h6>

          {/* Course Image */}
          {item?.thumbnailImage && (
            <div className="flex justify-center">
              <Image
                src={item?.thumbnailImage}
                alt={item?.training?.name || "Course Thumbnail"}
                width={120}
                height={120}
                className="rounded-lg"
              />
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};
