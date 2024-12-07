import React from 'react';
import "./ProjectCards.scss"
import { phone, rightArrow, leftArrow, email,briefcase } from '../common/Icons';

const ProjectCards = ({projectCardList}) => {
    if(!projectCardList || projectCardList.length == 0) return <></>
    const getIcon = (iconName) =>{
        switch (iconName){
            case "Phone":
                return briefcase
            default: 
                return null
        }
            
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5'>
            {projectCardList && projectCardList.map((item, index)=>(
                <div className='project-card p-3' key={index}>
                    <div className='project-card__title flex gap-4'>{getIcon(item.icon)}<span>{item.title}</span></div>
                    <div className='project-card__sub-title'>{item.subTitle}</div>
                    <div className='project-card__description my-3'>{item.description}</div>
                </div>
            ))}
        </div>
    );
};

export default ProjectCards;