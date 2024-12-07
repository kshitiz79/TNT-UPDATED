import React from 'react';
import './CareerPaths.scss'

const CareerPaths = ({careerPaths}) => {
    return (
        <div className='w-full md:w-1/2 p-5 career-pathways border rounded-lg'>
            <h3>Career Pathways</h3>
            <ul style={{'listStyleType':'square'}}  className="pl-3">
                {careerPaths && careerPaths.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CareerPaths;