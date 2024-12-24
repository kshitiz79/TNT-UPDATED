'use client';

import React, { useEffect, useState } from 'react';
import "./HeroBanner.scss";

import { usePathname } from 'next/navigation';

import CoursesForm from '../courses/CourcesForm';
const HeroBanner = ({ customClass, title, buttonText, buttonLink, mt='0' }) => {
    const [isHomePage, setIsHomePage] = useState(false);
    const pathname = usePathname();

    // Ensure hydration consistency
    useEffect(() => {
        setIsHomePage(pathname === '/');
    }, [pathname]);

    const marginTopClass = `mt-${mt}`;

    return (
        <div className=" flex flex-col justify-center ">
        <div className={`hero-bg-image ${customClass} ${marginTopClass} p-4 sm:p-6 md:p-8  `}>
            <div className="container mx-auto">
                <div className='flex flex-col md:flex-row justify-between items-start gap-8'>
                    <div className='w-full md:w-2/3 space-y-6 mt-5'>
                        {/* Title */}
                        {title && (
                            <h1
                                className={`text-4xl sm:text-3xl md:text-6xl font-bold text-black mb-4`}
                                style={{ marginTop: `${mt}rem` }}
                            >
                                {title}
                            </h1>
                        )}

                        {buttonLink && (
                            <a href={buttonLink} className="text-blue-500 underline mb-4 block">
                                {buttonText}
                            </a>
                        )}

                        {isHomePage && (
                            <>
                                <p className='font-semibold text-black max-w-[90%] md:max-w-[70%] leading-relaxed text-[0.8rem] md:text-[1rem] '  style={{ marginBottom: '7rem' }}>
                                    Our purpose on this planet is to assist you in extracting maximum value from your career journey. 
                                    We believe that every individual has untapped potential waiting to be unlocked, and we are committed 
                                    to guiding you through every step of this transformative process.
                                </p>

                                {/* Info Cards */}
                                <div className='banner-info-card flex flex-col sm:flex-row gap-4 '>
                                    <div className='bg-green-400 px-4 py-3 rounded-2xl border-2 bg-primary-color text-white hover:text-green-400 hover:bg-transparent hover:text-primary-color hover:border-primary-color transition-colors'>
                                        For Students
                                    </div>
                                    <div className='bg-blue-500 px-4 py-3 rounded-2xl border-2 bg-primary-color text-white hover:text-blue-400 hover:bg-white  hover:text-primary-color hover:border-primary-color transition-colors'>
                                        For IT & non-IT Employees
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                  
                </div>

                {/* Environmental Consulting Cards: Only Visible on Home Page */}
               
            </div>
        
        </div>
        {isHomePage && (
                        <div className=' flex justify-center items-center lg:bg-blue-50 bg-white'>
                            <CoursesForm />
                        </div>
                    )}
      
            </div>
    );
};

export default HeroBanner;
