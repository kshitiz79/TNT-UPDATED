"use client";
import React, { useState, useEffect } from "react";
import { Label, Select } from "flowbite-react";
import axios from "axios";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function HeroBannerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bestDateToCall: "",
    preferredTime: "",
    course: "",
    timeZone: "",
  });

  const [errors, setErrors] = useState({});
  const today = new Date().toISOString().split("T")[0];

  // Get the user's timezone when the component mounts
  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setFormData((prevData) => ({
      ...prevData,
      timeZone: timeZone,
    }));
  }, []);

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

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else {
      // Strip out non-digit characters
      const numericPhone = formData.phone.replace(/\D/g, "");
      if (numericPhone.length < 10 || numericPhone.length > 15) {
        newErrors.phone = "Phone number must be between 10 and 15 digits";
      }
    }
    if (!formData.bestDateToCall) {
      newErrors.bestDateToCall = "Best date to call is required";
    }
    if (!formData.preferredTime) {
      newErrors.preferredTime = "Preferred time is required";
    }
    if (!formData.course) {
      newErrors.course = "Preferred course is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (payload) => {
    const url =
      "https://talentlink-emailservice-production.up.railway.app/api/sendEmail";
    try {
      const emailResponse = await axios.post(url, payload);
      console.log("Email sent successfully:", emailResponse.data);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      // Prepare the payload as per the API requirements
      const updatedFormData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.bestDateToCall,
        course: formData.course,
        time: formData.preferredTime,
        timezone: formData.timeZone,
      };

      const url = "https://tntbackend-production.up.railway.app/api/enrollNow";
      try {
        console.log("payload", updatedFormData);
        const response = await axios.post(url, updatedFormData);
        if (response.data.success === true) {
          const emailBody = `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              ...
            </head>
            <body>
              ...
            </body>
            </html>`;

          const payload = {
            subject: "New Enrollment Request",
            emailbody: emailBody,
            bodyType: "html",
            toEmail: "hr@tnttechiesguide.com",
          };

          await sendEmail(payload);
          toast.success(
            "Successfully Submitted Your Request, We will get back to you at your selected date & time."
          );
          setFormData({
            name: "",
            email: "",
            phone: "",
            bestDateToCall: "",
            preferredTime: "",
            course: "",
            timeZone: "",
          });
        }
      } catch (error) {
        toast.error("Something went wrong");
        console.error("Failed to submit enrollment form:", error);
      }
    } else {
      console.log("Validation failed:", errors);
    }
  };

  return (
    <div className="flex justify-center items-center p-4 w-full">
    <form
      className="p-4 sm:p-6 rounded-lg w-full bg-white border border-black mt-4 sm:mt-10 md:mt-20 max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 uppercase text-center text-black">
        Connect With Us
      </h2>
  
      <div className="mb-4 mt-4">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className={`text-sm w-full border-b-2 border-x-0 border-t-0 rounded-md ${
            errors.name ? "border-red-500" : "border-gray-500"
          } focus:border-blue-500 outline-none py-2`}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>
  
      <div className="mb-4">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className={`text-sm w-full border-b-2 border-x-0 border-t-0 rounded-md ${
            errors.email ? "border-red-500" : "border-gray-500"
          } focus:border-blue-500 outline-none py-2`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>
  
      <div className="mb-4">
        <PhoneInput
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={(phone) => setFormData({ ...formData, phone })}
          className="text-sm w-full border border-gray-500 rounded-md focus:border-blue-500 outline-none py-2 px-3"
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
        )}
      </div>
  
      <div className="mb-4">
        <input
          id="bestDateToCall"
          name="bestDateToCall"
          type="date"
          min={today}
          placeholder="Best Date To Call"
          value={formData.bestDateToCall}
          onChange={handleChange}
          className={`text-sm w-full border-b-2 border-x-0 border-t-0 rounded-md ${
            errors.bestDateToCall ? "border-red-500" : "border-gray-500"
          } focus:border-blue-500 outline-none py-2`}
        />
        <Label
          htmlFor="bestDateToCall"
          value="Best Date to Call"
          className="text-sm text-black mt-1"
        />
        {errors.bestDateToCall && (
          <p className="text-red-500 text-xs mt-1">{errors.bestDateToCall}</p>
        )}
      </div>
  
      <div className="mb-4">
        <input
          id="preferredTime"
          name="preferredTime"
          type="time"
          placeholder="Preferred Time"
          value={formData.preferredTime}
          onChange={handleChange}
          className={`text-sm w-full border-b-2 border-x-0 border-t-0 rounded-md ${
            errors.preferredTime ? "border-red-500" : "border-gray-500"
          } focus:border-blue-500 outline-none py-2`}
        />
        <Label
          htmlFor="preferredTime"
          value="Preferred Time"
          className="text-sm text-black mt-1"
        />
        {errors.preferredTime && (
          <p className="text-red-500 text-xs mt-1">{errors.preferredTime}</p>
        )}
      </div>
  
      <div className="mb-4">
        <Select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className={`text-sm w-full border-none rounded-md ${
            errors.course ? "border-red-500" : "border-gray-500"
          } focus:border-blue-500 py-2`}
        >
          <option value="" disabled className="border-none">
            Select a course
          </option>
          <option value="Comprehensive Advanced SecOps Training">
            Comprehensive Advanced SecOps Training
          </option>
          <option value="Automation Engineer">Automation Engineer</option>
          <option value="Infra Automation">Infra Automation</option>
          <option value="Azure Devops Architect">Azure Devops Architect</option>
          <option value="Spirngboot java with Multi Cloud Devops">
            Spirngboot java with Multi Cloud Devops
          </option>
          <option value="Docker Kubernetes">Docker Kubernetes</option>
          <option value="Site Reliability Engineering">
            Site Reliability Engineering
          </option>
          <option value="GCP DevSecOps">GCP DevSecOps</option>
          <option value="azure-data-engineering">Azure Data Engineering</option>
          <option value="Azure Data Factory">Azure Data Factory</option>
        </Select>
        {errors.course && (
          <p className="text-red-500 text-xs mt-1">{errors.course}</p>
        )}
      </div>
  
      <div className="mt-4 flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full text-sm"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  
  );
}
