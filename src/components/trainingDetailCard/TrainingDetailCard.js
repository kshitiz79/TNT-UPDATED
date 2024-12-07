import React from 'react';
import './TrainingDetailCard.scss'

const TrainingDetailCard = ({item}) => {
    const infoArray = [
        {title:"Date", data: item && item.date},
        {title:"Duration", data: item && item.duration},
        {title:"Mode", data: item && item.modeOfTraining}
    ]
    return (
        <div className='container mx-auto mb-6 flex justify-center training-detail-card'>
            <div className="w-full lg:w-2/3 p-6 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 training-detail-card__body">
                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{item && item.title}</h5>
                <p>{item && item.description}</p>
                <div className='grid grid-cols-1 sm:grid-cols-3'>
                    {infoArray && infoArray.map((item, index)=>(
                        <div className='mt-5' key={index}>
                            <div className='text-2xl font-bold'>{item.title}</div>
                            <p className='text-xl'>{item.data}</p>
                        </div>
                    ))}
                </div>
                {/* <a className="btn btn-primary mt-5" href='https://www.youtube.com/watch?v=r4YIdn2eTm4' target='_blank'>Watch on Youtube</a> */}
            </div>
        </div>
    );
};

export default TrainingDetailCard;  