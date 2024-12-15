"use client";
import React, { useState, useEffect } from "react";
import { Label, Select } from "flowbite-react";
import axios from "axios";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function CoursesForm() {
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
    const url = "https://talentlink-emailservice-production.up.railway.app/api/sendEmail";
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
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>New Enrollment</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  color: #333;
                  margin: 0;
                  padding: 20px;
                }
                .container {
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #fff;
                  padding: 20px;
                  border-radius: 10px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .header {
                  text-align: center;
                  padding-bottom: 20px;
                  border-bottom: 1px solid #ddd;
                }
                .header h2 {
                  margin: 0;
                  color: #007bff;
                }
                .content {
                  padding: 20px 0;
                }
                .content p {
                  margin: 10px 0;
                  line-height: 1.6;
                }
                .content strong {
                  color: #007bff;
                }
                .footer {
                  text-align: center;
                  padding-top: 20px;
                  border-top: 1px solid #ddd;
                  font-size: 14px;
                  color: #888;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>New Enrollment Request</h2>
                </div>
                <div class="content">
                  <p><strong>Name:</strong> ${formData.name}</p>
                  <p><strong>Email:</strong> ${formData.email}</p>
                  <p><strong>Phone:</strong> ${formData.phone}</p>
                  <p><strong>Best Date to Call:</strong> ${formData.bestDateToCall}</p>
                  <p><strong>Preferred Time:</strong> ${formData.preferredTime} (${formData.timeZone})</p>
                  <p><strong>Preferred Course:</strong> ${formData.course}</p>
                </div>
                <div class="footer">
                  <p>Thank you for your interest in our courses. We will get back to you shortly.</p>
                </div>
              </div>
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
            "Successfully Submitted Your Request , We will get back to you in your selected date & time"
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
<div className="p-4 w-full container flex justify-center items-center">
  <form
    className="p-4 lg:p-6 rounded-lg w-full sm:w-3/4 md:w-full lg:w-[100%] bg-white lg:h-auto border border-black mt-10 md:mt-20"
    onSubmit={handleSubmit}
  >
    <h2 className="text-2xl font-bold mb-5 uppercase text-center text-black">
      Contact US
    </h2>
    
    {/* Grid Layout with Responsive Columns */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Column 1: Name, Email */}
      <div className="space-y-4 ">
        <div>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full border-b-2 border-x-0 border-t-0 rounded-md ${
              errors.name ? "border-red-500" : "border-gray-500"
            } focus:border-blue-500 outline-none py-2`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border-b-2 border-x-0 border-t-0 rounded-md ${
              errors.email ? "border-red-500" : "border-gray-500 mr-5"
            } focus:border-blue-500 outline-none py-2`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Column 2: Phone */}
      <div className="space-y-2">
        <div>
          <PhoneInput
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(phone) => setFormData({ ...formData, phone })}
            className="w-full border border-gray-500 rounded-md focus:border-blue-500 outline-none py-2 px-3"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <input
            id="bestDateToCall"
            name="bestDateToCall"
            type="date"
            min={today}
            value={formData.bestDateToCall}
            onChange={handleChange}
            className={`w-full border-b-2 border-x-0 border-t-0 rounded-md text-black ${
              errors.bestDateToCall ? "border-red-500" : "border-gray-500"
            } focus:border-blue-500 outline-none py-2`}
          />
          <Label htmlFor="bestDateToCall" className="text-black" />
          {errors.bestDateToCall && (
            <p className="text-red-500 text-sm mt-1">{errors.bestDateToCall}</p>
          )}
        </div>
      </div>

      {/* Column 3: Date, Time, Course */}
      <div className="space-y-4">
        <div>
          <input
            id="preferredTime"
            name="preferredTime"
            type="time"
            value={formData.preferredTime}
            onChange={handleChange}
            className={`w-full border-b-2 border-x-0 border-t-0 rounded-md ${
              errors.preferredTime ? "border-red-500" : "border-gray-500"
            } focus:border-blue-500 outline-none py-2`}
          />
          <Label htmlFor="preferredTime" className="text-black" />
          {errors.preferredTime && (
            <p className="text-red-500 text-sm">{errors.preferredTime}</p>
          )}
        </div>

        <div>
          <Select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className={`w-full border-none rounded-md ${
              errors.course ? "border-red-500" : "border-gray-500"
            } focus:border-blue-500 py-2`}
          >
            <option value="" disabled>
              Select a course
            </option>
            <option value=" Comprehensive Advanced SecOps Training">
              Comprehensive Advanced SecOps Training
            </option>
            <option value="Automation Engineer">Automation Engineer</option>
            <option value="Infra Automation">Infra Automation</option>
            <option value=" Azure Devops Architect">Azure Devops Architect</option>
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
          {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
        </div>
      </div>
    </div>

    {/* Submit Button */}
    <div className="lg:mt-6 mt-4 flex justify-center">
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
    </div>
  </form>
</div>

  );
}
