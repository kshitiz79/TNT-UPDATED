'use client';

import React, { useEffect, useState } from 'react';
import "./HeroBanner.scss";
import HeroBannerForm from '../heroBannerForm/HeroBannerForm';
import { usePathname } from 'next/navigation';
import CourcesForm from '../courses/CourcesForm';
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
        <div>
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
                                <p className='font-semibold text-black max-w-[90%] md:max-w-[70%] leading-relaxed text-[0.8rem] md:text-[1rem]'>
                                    Our purpose on this planet is to assist you in extracting maximum value from your career journey. 
                                    We believe that every individual has untapped potential waiting to be unlocked, and we are committed 
                                    to guiding you through every step of this transformative process.
                                </p>

                                {/* Info Cards */}
                                <div className='banner-info-card flex flex-col sm:flex-row gap-4'>
                                    <div className='banner-info-card__item px-4 py-3 rounded-2xl border-2 bg-primary-color text-white hover:bg-transparent hover:text-primary-color hover:border-primary-color transition-colors'>
                                        For Students
                                    </div>
                                    <div className='banner-info-card__item px-4 py-3 rounded-2xl border-2 bg-primary-color text-white hover:bg-transparent hover:text-primary-color hover:border-primary-color transition-colors'>
                                        For IT & non-IT Employees
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                  
                </div>

                {/* Environmental Consulting Cards: Only Visible on Home Page */}
                {isHomePage && (
                    <div className='flex flex-col lg:flex-row justify-between w-full mt-6 gap-4'>
                        <div className='lg:w-[28%] w-full bg-white px-4 py-5 shadow-lg rounded flex flex-col items-start'>
                            <img src='assets/carbon_tool.png' alt='Logo' className='mb-2 w-10 h-10 object-contain' />
                            <h3 className='font-semibold text-black text-lg mb-1'>Environmental Consulting</h3>
                            <h4 className='text-gray-600 text-sm'>
                                We focus on ergonomics and meeting you where you work.
                            </h4>
                        </div>
                        <div className='lg:w-[28%] w-full bg-white px-4 py-5 shadow-lg rounded flex flex-col items-start'>
                            <img src='assets/shop_twotone.png' alt='Logo' className='mb-2 w-10 h-10 object-contain' />
                            <h3 className='font-semibold text-black text-lg mb-1'>Environmental Consulting</h3>
                            <h4 className='text-gray-600 text-sm'>
                                We focus on ergonomics and meeting you where you work.
                            </h4>
                        </div>
                        <div className='lg:w-[28%] w-full px-4 py-5 bg-teal-700 text-white shadow-lg rounded flex flex-col items-start'>
                            <img src='assets/carbon_notebook.png' alt='Logo' className='mb-2 w-10 h-10 object-contain' />
                            <h3 className='font-semibold text-white text-lg mb-1'>Environmental Consulting</h3>
                            <h4 className='text-white text-sm'>
                                We focus on ergonomics and meeting you where you work.
                            </h4>
                        </div>


                    </div>

                
                )}
            </div>
        
        </div>
        {isHomePage && (
                        <div className='w-full flex justify-center items-center '>
                            <CoursesForm />
                        </div>
                    )}
      
            </div>
    );
};

export default HeroBanner;
