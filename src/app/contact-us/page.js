"use client";

import React, { useState } from "react";
import axios from "axios";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import HeroBanner from "@/components/herobanner/HeroBanner";
import Image from "next/image";

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

      <div className="py-10 mb-6 px-2 ">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          {/* Contact Information Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto max-w-6xl px-6 ">
            {/* Main Office */}
            <div className="bg-gray-200 p-6 rounded-lg text-center h-[200px] flex flex-col items-center justify-center text-sm">
              <div className="text-blue-600 text-3xl mb-2">📍</div>
              <h3 className="font-bold text-lg mb-2">OUR MAIN OFFICE</h3>
              <p className="text-gray-600">
                2971 Deckebach Avenue Apt <br /> 65, 45220 Cincinnati, Ohio
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="bg-gray-200 p-6 rounded-lg text-center h-[200px] flex flex-col items-center justify-center">
              <div className="text-blue-600 text-3xl mb-2">📞</div>
              <h3 className="font-bold text-lg mb-2">PHONE NUMBER</h3>
              <p className="text-gray-600">
                <a href="tel:+15132000529" className="hover:underline text-sm">
                  +(1) 513 2000 529
                </a>
                <br />
                <a href="tel:+918499893456" className="hover:underline text-sm">
                  +(91) 84998 93456
                </a>
              </p>
            </div>

            {/* Second Office */}
            <div className="bg-gray-200 p-6 rounded-lg text-center h-[200px] flex flex-col items-center justify-center">
              <div className="text-blue-600 text-3xl mb-2">📍</div>
              <h3 className="font-bold text-lg mb-2">2ND OFFICE</h3>
              <p className="text-gray-600">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Dinesh+Auric+Building,+Bachupally,+500090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Unit No: 335, #10-11, Dinesh Auric Building, Bachupally, 500090
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="bg-gray-200 p-6 rounded-lg text-center h-[200px] flex flex-col items-center justify-center">
              <div className="text-blue-600 text-3xl mb-2">✉️</div>
              <h3 className="font-bold text-lg mb-2">EMAIL</h3>
              <p className="text-gray-600">
                <a
                  href="mailto:info@tnttechiesguide.com"
                  className="text-blue-500 underline"
                >
                  info@tnttechiesguide.com
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg lg:ml-6 ">
            <h2 className="text-3xl font-bold mb-6 text-center  mt-3">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6 px-6 ">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="mb-6">
  <PhoneInput
    country={"us"}
    placeholder="Enter your phone number"
    value={formData.phone}
    onChange={(phone) => setFormData({ ...formData, phone })}
    className="w-full px-6"
  />
  {errors.phone && (
    <p className="text-red-500 text-sm mt-1 mr-6 ">{errors.phone}</p>
  )}
</div>

              <div className="px-6">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border-b-2  border-gray-300  rounded-md  ${
              errors.email ? "border-red-500 " : "border-gray-500 mr-5 "
            } focus:border-blue-500 outline-none py-2`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>


              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 mt-6 mb-6 rounded-lg shadow-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="bg-gray-50 py-6">
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
