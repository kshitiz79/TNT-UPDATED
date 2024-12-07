import React from 'react';
import Image from 'next/image';
import './CourseImageCard.scss';

const CourseImageCard = ({ cssClass, heading, subHeading, bodyText, imgUrl }) => {
    if (!heading) return null;

    return (
        <div className={`course-image-card ${cssClass}`}>
            {/* Text Content */}
            <div className="text-wrp">
                <div className="title text-center">{heading}</div>
                {subHeading && <p className="sub-title text-center">{subHeading}</p>}
            </div>

            {/* Optimized Image */}
            {imgUrl && (
                <div className="image-container">
                    <Image
                        src={imgUrl}
                        alt={heading}
                        width={400} // Set the width of the image
                        height={300} // Set the height of the image
                        className="rounded-lg"
                        priority // Improves LCP if needed
                    />
                </div>
            )}
        </div>
    );
};

export default CourseImageCard;
