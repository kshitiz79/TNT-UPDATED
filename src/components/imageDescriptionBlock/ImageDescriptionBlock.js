import React from 'react';
import Image from 'next/image';
import "./ImageDescriptionBlock.scss";
import HTMLReactParser from 'html-react-parser';

const ImageDescriptionBlock = ({ imgUrl, title, description, cssClass, isCourse }) => {
  return (
    <div className={`description-image-section pb-3 ${cssClass || ""}`}>
      <div className="container mx-auto pt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
          {/* Image Section */}
          <div className="img-wrapper w-full pr-5 lg:py-4">
            {console.log("Image URL:", imgUrl)}
            <Image
              className="m-auto"
              alt={title || "Default Image Title"}
              src={imgUrl || "/assets/default-placeholder.png"}
              fill={isCourse || false}
            />
          </div>

          {/* Text Section */}
          <div className="text-wrapper flex flex-col justify-center p-3">
            {console.log("Title:", title)}
            {title && <h2 className="text-black">{title}</h2>}
            {console.log("Description:", description)}
            {description && (
              <div className="description">
                {HTMLReactParser(description)}
              </div>
            )}
          </div>
        </div>

        {/* Logos Section */}
        <div className="md:flex lg:flex justify-between mb-6 space-y-6 md:space-y-0">
          <img
            src="/assets/fa-brands_hooli.png"
            alt="hooli"
            className="md:m-3 m-auto object-contain"
          />
          <img
            src="/assets/fa-brands_lyft.png"
            alt="lyft"
            className="md:m-3 m-auto object-contain"
          />
          <img
            src="/assets/fa-brands_pied-piper-hat.png"
            alt="pied-piper-logo"
            className="md:m-3 m-auto object-contain"
          />
          <img
            src="/assets/fa-brands_stripe.png"
            alt="stripe-logo"
            className="md:m-3 m-auto object-contain"
          />
          <img
            src="/assets/fa-brands_aws.png"
            alt="aws-logo"
            className="md:m-3 m-auto object-contain"
          />
          <img
            src="/assets/fa-brands_reddit-alien.png"
            alt="reddit-alien-logo"
            className="md:m-3 m-auto py-3 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageDescriptionBlock;
