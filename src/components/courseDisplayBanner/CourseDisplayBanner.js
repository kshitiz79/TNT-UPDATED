import React from 'react';
import "./CourseDisplayBanner.scss"

const CourseDisplayBanner = ({bannerText}) => {
    if (!bannerText) return <></>
    return (
        <div className='container mx-auto'>
            <div className='course-banner '>
                {bannerText}
            </div>
        </div>
        
    );
};

export default CourseDisplayBanner;