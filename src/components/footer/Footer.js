"use client"
import React, { useState, useEffect } from 'react';
import { getMediumData, getTrendingCourses } from '@/data/api/Api';
import Link from 'next/link';
import Logo from '/public/assets/tntlogo.svg'
import { facebook, youtube, linkedIn } from '../common/Icons';
import TikTok from '/public/assets/tik-tok.png'
import Instagram from '/public/assets/instagram.png'
import Threads from '/public/assets/threads.png'
import { email, phone } from '../common/Icons';


const Footer = () => {
    const [trendingCourses, setTrendingCourses] = useState([])

    const retrieveTrendingCourses = async () => {
        const arr = await getTrendingCourses();
        setTrendingCourses(arr)
    }

    useEffect(() => {
        retrieveTrendingCourses()
        getMediumData()
    }, [])

    return (
        <>
   <footer className="footer-section w-full border-t border-solid bg-blue-950">
    <div className="mx-auto text-white container py-6 lg:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
            {/* Dynamically fetch Trending Courses spanning 4 columns */}
            <div className="col-span-3">
                <h2 className="mb-5 text-lg uppercase text-white font-bold">Trending Courses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 ">
                    {trendingCourses && trendingCourses.map((item, index) => (
                        <div key={index} className="hover:text-blue-300 mb-4" >
                            <Link href={`/courses/${item.id}`} className="block hover:underline">
                                {item.training.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>




            <div className="flex flex-col md:flex-row gap-10 text-white">
  {/* Company Section */}
  <div className="flex-1">
    <h2 className="mb-5 text-lg font-bold text-white uppercase">Company</h2>
    <ul className="space-y-3">
      <li>
        <Link href="/courses" className="hover:underline">Courses</Link>
      </li>
      <li>
        <Link href="/upcoming-trainings" className="hover:underline">Upcoming Classes</Link>
      </li>
      <li>
        <Link href="/blogs" className="hover:underline">Blogs</Link>
      </li>
      <li>
        <Link href="/about-us" className="hover:underline">About Us</Link>
      </li>
      <li>
        <Link href="/contact-us" className="hover:underline">Contact Us</Link>
      </li>
    </ul>
  </div>

  {/* Follow Us Section */}
  <div className="flex-1 mt-6">
    <h2 className=" text-lg font-bold uppercase text-white">Follow Us</h2>

    {/* Email */}
    <div className="flex items-center mb-4">
      <i className="fas fa-envelope mr-2"></i>
      <a href="mailto:tttechiesguide@gmail.com" className="hover:underline">
        tttechiesguide@gmail.com
      </a>
    </div>

    {/* Phone */}
    <div className="flex items-center">
      <i className="fas fa-phone mr-2"></i>
      <a href="tel:+15132000529" className="hover:underline">
        +(1) 513 2000 529
      </a>
    </div>
  </div>
</div>

        </div>
    </div>
</footer>
















        
        <footer className=" w-full">
            <div className='container mx-auto text-white  py-4 lg:py-8 sm:flex sm:items-center sm:justify-between '>
                
                    <div className="text-lg bg-white sm:text-center text-gray-400">© 2014 TNT Techies Guide. All Rights Reserved.
                    </div>
                    <div className="flex mt-4 sm:mt-0 flex-wrap">
                                <a target="_blank" href="https://www.facebook.com/tttechiesguide/" className="me-5 mt-3 text-black">
                                    {facebook}
                                    <span className="sr-only">Facebook page</span>
                                </a>
                                <a target="_blank" href="https://www.youtube.com/@ttcloudtechies3267" className="me-5 mt-3 text-black">
                                    {youtube}
                                    <span className="sr-only">Youtube</span>
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/tnt-techies-guide-74a07229b" className=" me-5 mt-3 text-black">
                                    {linkedIn}
                                    <span className="sr-only">linkedIn page</span>
                                </a>
                                <a target="_blank" href="https://www.tiktok.com/@tttechiesguide" className=" me-5 mt-3 text-black">
                                    <img className="w-4 h-4" src={TikTok.src} alt="tiktok-icon" />
                                    <span className="sr-only">TikTok page</span>
                                </a>
                                <a target="_blank" href="https://www.threads.net/@tttechiesguide" className=" me-5 mt-3 text-black">
                                    <img className="w-4 h-4" src={Threads.src} alt="threads-icon" />
                                    <span className="sr-only">Threads page</span>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/tttechiesguide/" className=" me-5 mt-3 text-black">
                                    <img className="w-4 h-4" src={Instagram.src} alt="instagram-icon" />
                                    <span className="sr-only">Instagram page</span>
                                </a>

                            </div>
            </div>
                </footer>
        </>
    );
};

export default Footer;