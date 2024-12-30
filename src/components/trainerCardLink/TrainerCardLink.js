import React from 'react';
import HTMLReactParser from "html-react-parser";
import "./trainercardlink.scss";

const TrainerCardLink = ({ trainerInfo }) => {
  // Ensure trainerInfo is valid before rendering
  if (!trainerInfo) return null;

  return (
    <div className="container mx-auto mb-5 flex items-center flex-col lg:flex-row trainer-card">
      {/* Video Section */}
      <div className="w-full lg:w-1/2">
        <iframe
          src={`https://www.youtube.com/embed/${trainerInfo.youtubeVideoId || ""}`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={trainerInfo.youtubeVideoId ? "Trainer Video" : "No Video Available"}
          width="100%"
          height="400"
        />
      </div>

      {/* Trainer Info Section */}
      <div className="w-full lg:w-1/2 p-4">
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center p-4">
            {/* Trainer Image */}
            <img
              className="mb-3 rounded-full shadow-lg trainer-card__img"
              src={trainerInfo.imgUrl || "/assets/default-avatar.png"}
              alt={trainerInfo.name || "Trainer Image"}
            />

            {/* Trainer Name */}
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {trainerInfo.name || "Trainer Name Not Available"}
            </h5>

            {/* Trainer Designation */}
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {trainerInfo.designation || "No Designation Provided"}
            </span>

            {/* Trainer Description */}
            <p className="text-center mt-3">
              {trainerInfo.description
                ? HTMLReactParser(trainerInfo.description)
                : "No description available."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerCardLink;
