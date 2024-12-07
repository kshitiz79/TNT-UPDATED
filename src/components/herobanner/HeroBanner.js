'use client';

import React, { useEffect, useState } from 'react';
import "./HeroBanner.scss";
import HeroBannerForm from '../heroBannerForm/HeroBannerForm';
import heroImage from '../../../public/assets/common-page-banner-new.png';
import { usePathname } from 'next/navigation';

const HeroBanner = ({ customClass, title, buttonText, buttonLink,mt='6' }) => {
    const [isHomePage, setIsHomePage] = useState(false);
    const pathname = usePathname();

    // Ensure hydration consistency
    useEffect(() => {
        setIsHomePage(pathname === '/');
    }, [pathname]);
    const marginTopClass = `mt-${mt}`;
    return (
        <div className={`hero-bg-image ${customClass} ${marginTopClass}`}>
            <div className="container">
                {/* Top Section: Title and Form */}
                <div className='flex flex-col md:flex-row justify-between items-start gap-8 '>
                    {/* Left Content: Title, Paragraph, and Info Cards */}
                    <div className='w-full md:w-[70%] space-y-6'>
                        {/* Title */}
                        {title && (
                <h1
                    className={`text-6xl w-4/6 font-bold text-black mb-4`}
                    style={{ marginTop: `${mt}rem` }}
                >
                    {title}
                </h1>
            )}

                        {/* Button */}
                        {buttonLink && (
                            <a href={buttonLink} className="text-blue-500 underline mb-4 block">
                                {buttonText}
                            </a>
                        )}

                        {/* Paragraph and Info Cards: Only Visible on Home Page */}
                        {isHomePage && (
                            <>
                                <p className='w-4/6 font-[600] text-black '>
                                    Our purpose on this planet is to assist you in extracting maximum value from your career journey. 
                                    We believe that every individual has untapped potential waiting to be unlocked, and we are committed 
                                    to guiding you through every step of this transformative process.
                                </p>

                                {/* Info Cards */}
                                <div className='banner-info-card flex flex-col md:flex-row gap-4'>
                                    <div className='banner-info-card__item bg-gray-100 p-4 rounded shadow-md'>
                                        For Students
                                    </div>
                                    <div className='banner-info-card__item bg-gray-100 p-4 rounded shadow-md'>
                                        For IT & non-IT Employees
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Right Content: Form */}
                    {isHomePage && (
                        <div className='w-full md:w-[45%] mt-4'>
                            <HeroBannerForm />
                        </div>
                    )}
                </div>

                {/* Environmental Consulting Cards: Only Visible on Home Page */}
                {isHomePage && (
                    <div className='lg:flex justify-between w-full mt-6 gap-4'>
                        <div className='lg:w-[28%] w-full bg-white px-4 py-5 shadow-lg rounded'>
                            <img src='assets/carbon_tool.png' alt='Logo' className='mb-2' />
                            <h3 className='font-semibold text-black'>Environmental Consulting</h3>
                            <h4 className='text-gray-600'>
                                We focus on ergonomics and meeting you where you work.
                            </h4>
                        </div>
                        <div className='lg:w-[28%] w-full bg-white px-4 py-5 shadow-lg rounded'>
                            <img src='assets/shop_twotone.png' alt='Logo' className='mb-2' />
                            <h3 className='font-semibold text-black'>Environmental Consulting</h3>
                            <h4 className='text-gray-600'>
                                We focus on ergonomics and meeting you where you work.
                            </h4>
                        </div>
                        <div className='lg:w-[28%] w-full px-4 py-5 bg-teal-700 text-white shadow-lg rounded'>
                            <img src='assets/carbon_notebook.png' alt='Logo' className='mb-2' />
                            <h3 className='font-semibold text-white'>Environmental Consulting</h3>
                            <h4>
                                We focus on ergonomics and meeting you where you work.
                            </h4>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeroBanner;
