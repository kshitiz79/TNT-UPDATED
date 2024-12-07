import React from 'react';
import "./CourseImageCard.scss"

const CourseImageCard = ({cssClass, heading, subHeading, bodyText, imgUrl}) => {
    // if (!heading) return <></>
    return (
        <div className={`course-image-card ${cssClass} `}>
            <div className='text-wrp'>
                <div className='title text-center'>{heading}</div>
                <p className="sub-title text-center">{subHeading}</p>
            </div>
            <img src={imgUrl} alt={heading} />
        </div>
    );
};

export default CourseImageCard;