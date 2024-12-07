import "./trainercardlink.scss"
import React from 'react';
import HTMLReactParser from "html-react-parser";

const TrainerCardLink = ({trainerInfo}) => {
    if(!trainerInfo) return <></>
    return (
        <div className='container mx-auto mb-5 flex items-center flex-col lg:flex-row trainer-card'>
            <div className='w-full lg:w-1/2'>
                {/* <iframe width="100%" height="400" src="https://www.youtube.com/embed/r4YIdn2eTm4?si=whPqxJ8-Jzqo0Mqw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                <iframe src={`https://www.youtube.com/embed/${trainerInfo.youtubeVideoId}`}
                    // frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                    width="100%"
                    height="400"
                />
            </div>
            <div className='w-full lg:w-1/2 p-4'>
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center p-4">
                        <img className="mb-3 rounded-full shadow-lg trainer-card__img" src={trainerInfo.imgUrl} alt={trainerInfo.name} />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{trainerInfo.name}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{trainerInfo.designation}</span>
                        <p className='text-center mt-3'>{HTMLReactParser(trainerInfo.description)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerCardLink;