"use client"
import React, { useState, useEffect } from 'react';
import { getMediumData, getTrendingCourses } from '@/data/api/Api';
import Link from 'next/link';
import { facebook, youtube, linkedIn, email, phone } from '../common/Icons';
import TikTok from '/public/assets/tik-tok.png';
import Instagram from '/public/assets/instagram.png';
import Threads from '/public/assets/threads.png';

const Footer = () => {
    const [trendingCourses, setTrendingCourses] = useState([]);

    const retrieveTrendingCourses = async () => {
        const arr = await getTrendingCourses();
        setTrendingCourses(arr);
    };

    useEffect(() => {
        retrieveTrendingCourses();
        getMediumData();
    }, []);

    // Distribute trending courses into 4 roughly equal arrays
    const chunkedCourses = [[], [], [], []];
    trendingCourses.forEach((course, i) => {
        chunkedCourses[i % 3].push(course);
    });

    return (
        <>
            <footer className="w-full bg-blue-950 text-white py-6">
                <div className="container mx-auto py-10 px-4">
                    {/* 6-column grid: 4 for Trending Courses, 1 for Company, 1 for Follow Us */}
                    <div className="grid grid-cols-6 gap-8">
                        {/* 4 Columns for Trending Courses */}
                        {chunkedCourses.map((col, colIndex) => (
                            <div key={colIndex}>
                                {/* Add the header only in the first column */}
                                {colIndex === 0 && (
                                    <h2 className=" text-lg uppercase font-bold text-white">
                                        Trending Courses
                                    </h2>
                                )}
                                <ul className="space-y-3">
                                    {col.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                className="hover:underline mt-auto space-x-5"
                                                href={`/courses/${item.id}`}
                                            >
                                                {item.training.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Company Column */}
                        <div>
                            <h2 className="mb-5 text-lg font-bold text-white uppercase">
                                Company
                            </h2>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/courses" className="hover:underline">
                                        Courses
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/upcoming-trainings" className="hover:underline">
                                        Upcoming Classes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blogs" className="hover:underline">
                                        Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-us" className="hover:underline">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact-us" className="hover:underline">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Follow Us Column */}
                        <div>
                            <h2 className="mb-5 text-lg font-bold text-white uppercase">
                                Follow Us
                            </h2>
                            <p className="flex items-center mb-3 break-all">
                                <span className="mr-2">{email}</span>
                                <span>tttechiesguide@gmail.com</span>
                            </p>
                            <p className="flex items-center mb-6">
                                <span className="mr-2">{phone}</span>
                                <span>+ (1) 513 2000 529</span>
                            </p>
                            <div className="flex items-center space-x-4">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.facebook.com/tttechiesguide/"
                                    className="text-white hover:text-gray-300"
                                >
                                    {facebook}
                                    <span className="sr-only">Facebook</span>
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.youtube.com/@ttcloudtechies3267"
                                    className="text-white hover:text-gray-300"
                                >
                                    {youtube}
                                    <span className="sr-only">YouTube</span>
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.linkedin.com/in/tnt-techies-guide-74a07229b"
                                    className="text-white hover:text-gray-300"
                                >
                                    {linkedIn}
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.tiktok.com/@tttechiesguide"
                                    className="text-white hover:text-gray-300"
                                >
                                    <img className="w-4 h-4 inline-block" src={TikTok.src} alt="TikTok" />
                                    <span className="sr-only">TikTok</span>
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.threads.net/@tttechiesguide"
                                    className="text-white hover:text-gray-300"
                                >
                                    <img className="w-4 h-4 inline-block" src={Threads.src} alt="Threads" />
                                    <span className="sr-only">Threads</span>
                                </a>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.instagram.com/tttechiesguide/"
                                    className="text-white hover:text-gray-300"
                                >
                                    <img className="w-4 h-4 inline-block" src={Instagram.src} alt="Instagram" />
                                    <span className="sr-only">Instagram</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Bottom Footer */}
            <footer className="w-full bg-white">
                <div className="container mx-auto py-4 px-4 flex flex-col sm:flex-row items-center justify-between text-gray-600">
                    <div className="text-center sm:text-left mb-4 sm:mb-0">
                        © 2017 TNT Techies Guide. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
