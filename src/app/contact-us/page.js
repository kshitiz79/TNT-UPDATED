"use client";

import React, { useState } from "react";
import axios from "axios";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import HeroBanner from "@/components/herobanner/HeroBanner";
import Image from "next/image";
import HeroBannerForm from "@/components/heroBannerForm/HeroBannerForm";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          "https://your-api-endpoint.com/api/sendData",
          { name: formData.name, phone: formData.phone }
        );
        alert("Data sent successfully!");
        setFormData({ name: "", phone: "" });
      } catch (error) {
        console.error("Error sending data:", error);
        alert("Failed to send data.");
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <HeroBanner
        customClass="common-hero flex items-end pb-5 justify-center"
        title="Contact Us"
      />

      <div className="   mb-6  ">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2   ">
          {/* Contact Information Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mx-auto gap-6 max-w-6xl px-6  mt-[70px]">
  {/* Main Office */}
  <div className="group relative bg-gradient-to-br from-blue-50  to-blue-100 shadow-lg p-1 py-4 rounded-3xl text-center flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl  ">
    <div className="text-blue-600 text-4xl mb-4 group-hover:animate-bounce">📍</div>
    <h3 className="font-extrabold text-xl text-gray-800 mb-2">OUR MAIN OFFICE</h3>
    <p className="text-gray-600 leading-relaxed">
      2971 Deckebach Avenue Apt <br /> 65, 45220 Cincinnati, Ohio
    </p>
  </div>

  {/* Phone Numbers */}
  <div className="group relative bg-gradient-to-br from-green-50 to-green-100 shadow-lg p-1 py-4 rounded-3xl text-center flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="text-yellow-600 text-4xl mb-4 group-hover:animate-bounce">📞</div>
    <h3 className="font-extrabold text-xl text-gray-800 mb-2">PHONE NUMBER</h3>
    <p className="text-gray-600 leading-relaxed">
      <a href="tel:+15132000529" className="hover:text-blue-600 font-medium">
        +(1) 513 2000 529
      </a>
      <br />
      <a href="tel:+918499893456" className="hover:text-blue-600 font-medium">
        +(91) 84998 93456
      </a>
    </p>
  </div>

  {/* Second Office */}
  <div className="group relative bg-gradient-to-br from-green-50 py-4 to-green-100 shadow-lg p-1 rounded-3xl text-center flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="text-green-600 text-4xl mb-4 group-hover:animate-bounce">📍</div>
    <h3 className="font-extrabold text-xl text-gray-800 mb-2">2ND OFFICE</h3>
    <p className="text-gray-600 leading-relaxed">
      <a
        href="https://www.google.com/maps/search/?api=1&query=Dinesh+Auric+Building,+Bachupally,+500090"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 font-medium underline"
      >
        Unit No: 335, #10-11, Dinesh Auric Building, Bachupally, 500090
      </a>
    </p>
  </div>

  {/* Email */}
  <div className="group relative bg-gradient-to-br  from-blue-50  to-blue-100 shadow-lg p-1 py-4 rounded-3xl text-center flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="text-pink-600 text-4xl mb-4 group-hover:animate-bounce">✉️</div>
    <h3 className="font-extrabold text-xl text-gray-800 mb-2">EMAIL</h3>
    <p className="text-gray-600 leading-relaxed">
      <a
        href="mailto:info@tnttechiesguide.com"
        className="hover:text-blue-600 font-medium underline"
      >
        info@tnttechiesguide.com
      </a>
    </p>
  </div>
</div>


       
            <HeroBannerForm/>
        
        </div>
      </div>

      {/* Google Map */}
      <div className="bg-gray-50 py-6 mt-5">
        <div className="container mx-auto">
          <div
            className="relative w-full rounded-lg overflow-hidden shadow-lg"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509774!2d144.95373531531584!3d-37.81627944202171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f29e96b4d2b!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
              title="Google Map Location"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;