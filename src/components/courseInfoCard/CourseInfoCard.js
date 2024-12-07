import React from 'react';
import "./CourseInfoCard.scss"

const CourseInfoCard = ({programHighLights}) => {
    // console.log("highlights here", programHighLights)
    if(!programHighLights)return <></>
    return (
        <div className='course-info-card p-3 mb-3'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {programHighLights && programHighLights.map((item, index)=>(
                    <div className={`course-info-card__item ${item.isHighLighted ? 'active-item':''}`} key={index}>
                        <p className='subText'>{item.subText}</p>
                        <p className='title'>{item.mainText}</p>
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default CourseInfoCard;