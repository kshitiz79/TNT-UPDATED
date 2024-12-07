import React from 'react';
import parse  from 'html-react-parser';

const TestimonialCard = (props) => {
    const {item} = props;
    const ratingStars = parseInt(item.rating);
    return (
        drawCard(item, ratingStars)
    );
};

export default TestimonialCard;

const starIcon =(
    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
);

const drawCard = (item,ratingStars) =>{
return(
    <div className="testimonial-card bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-3">
        <div className="flex px-5 mt-5">
            <img className="rounded-full shadow-lg w-6 h-6" src={item.imgUrl} alt="" />
            <div className='flex flex-col justify-center px-3'>
                <p className="font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</p>
                <p>{item.designation}</p>
            </div>
        </div>
        <div className='pb-4'>
            <div className='flex mb-3   justify-center'>{[...Array(ratingStars)].map((e, i) => <span key={i}>{starIcon}</span>)}</div>
            <div className='px-3 testimonial-description'>{parse(item.description)}</div>
        </div>
    </div>
)
}