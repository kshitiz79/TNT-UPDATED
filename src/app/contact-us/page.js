import React from 'react';
import HeroBanner from '@/components/herobanner/HeroBanner';

import descriptionImageUrl from '../../../public/assets/about-desc-image.png';
import { email, location, phone } from '@/components/common/Icons';

export const metadata = {
    title: 'TNT Techies Guide - Contact Us',
    description: 'Contact TNT Techies Guide for more info',
};

const page = () => {
    const descriptionImageBlockOneData = {
        imgUrl: descriptionImageUrl,
        title: "What we do?",
        subTitle: "Who we are and what we do",
        description:
            "TnT Techies Guide is a leading training and consulting firm dedicated to empowering individuals and organizations in the dynamic fields of technology. Specializing in comprehensive guides, hands-on training, and expert consulting services, we cater to a diverse range of tech enthusiasts, professionals, and businesses seeking to stay at the forefront of innovation. Our tailored programs cover a spectrum of technology domains, ensuring that clients receive cutting-edge insights and practical skills to navigate and excel in today's fast-paced digital landscape. With a commitment to excellence, TnT Techies Guide strives to be the go-to destination for those seeking top-notch training and strategic consulting solutions to unlock their full potential in the ever-evolving world of technology."
    };

    return (
        <>
            {/* Hero Section */}
            <HeroBanner customClass="common-hero flex items-end pb-5 flex justify-center items-center " title="Contact Us" />






            <div className =" py-10 mb-6">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">



   
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mr-6">
      {/* Box 1: Main Office */}
      <div className="bg-gray-200 p-6 rounded-lg text-center">
        <div className="text-blue-600 text-3xl mb-2">📍</div>
        <h3 className="font-bold text-lg mb-2">OUR MAIN OFFICE</h3>
        <p className="text-gray-600">
          SoHo 94 Broadway St<br />
          New York, NY 1001
        </p>
      </div>

      {/* Box 2: Phone Number */}
      <div className="bg-gray-200 p-6 rounded-lg text-center">
        <div className="text-blue-600 text-3xl mb-2">📞</div>
        <h3 className="font-bold text-lg mb-2">PHONE NUMBER</h3>
        <p className="text-gray-600">
          234-9876-5400<br />
          888-0123-4567 (Toll Free)
        </p>
      </div>

      {/* Box 3: Fax */}
      <div className="bg-gray-200 p-6 rounded-lg text-center">
        <div className="text-blue-600 text-3xl mb-2">📠</div>
        <h3 className="font-bold text-lg mb-2">FAX</h3>
        <p className="text-gray-600">1-234-567-8900</p>
      </div>

      {/* Box 4: Email */}
      <div className="bg-gray-200 p-6 rounded-lg text-center">
        <div className="text-blue-600 text-3xl mb-2">✉️</div>
        <h3 className="font-bold text-lg mb-2">EMAIL</h3>
        <p className="text-gray-600">
          <a href="mailto:hello@theme.com" className="text-blue-500 underline">
            hello@theme.com
          </a>
        </p>
      </div>
    </div>

    {/* Right Side: Contact Form */}
    <div className="bg-gray-200 p-8 rounded-lg shadow-lg ">
      <h2 className="text-3xl font-bold mb-6 text-black text-center">Contact Us</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Enter your Name"
          className="w-full p-3 border-b-2 border-gray-300  outline-none bg-transparent text-black"
        />
        <input
          type="email"
          placeholder="Enter a valid email address"
          className="w-full p-3 border-b-2 border-gray-300  outline-none bg-transparent text-black"
        />
        <textarea
          rows="5"
          placeholder="Enter your message"
          className="w-full p-3 border-b-2 border-gray-300  outline-none bg-transparent text-black"
        ></textarea>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  </div>
</div>




















           
            {/* Contact Details Section */}
            <div className="py-10 bg-gray-50 mb-10 py-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Google Map */}
                        <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
    <iframe
        src="https://maps.app.goo.gl/5SaQ76Hq58PfrSZSA"
        title="Google Map Location"
        className="absolute top-0 left-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
</div>




                        {/* Contact Information */}
                        <div className="p-5 text-gray-800 bg-white rounded ">
                            <h3 className="text-2xl font-bold mb-4">For More Details, Contact Us!</h3>
                            <p className="flex items-center gap-3 mt-4">
                                {phone} <span>+(1) 513 2000 529 , +(91) 84998 93456</span>
                            </p>
                            <p className="flex items-center gap-3 mt-4">
                                {email} <span>info@tnttechiesguide.com</span>
                            </p>
                            <p className="flex items-start gap-3 mt-4">
                                {location}
                                <span>
                                    2971 Deckebach Avenue Apt 65,<br />
                                    45220 Cincinnati,<br />
                                    Ohio
                                </span>
                            </p>
                            <p className="flex items-start gap-3 mt-4">
                                {location}
                                <span>
                                    Unit No: 335, #10-11,<br />
                                    Dinesh Auric Building,<br />
                                    Bachupally, 500090
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
