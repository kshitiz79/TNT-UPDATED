"use client"
import React, { useState } from 'react';
import { Button, Label, Select } from 'flowbite-react';
import "./EnrollNow.scss"
import axios from 'axios';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bestDateToCall: '',
    preferredTime: '',
    course: '',
  });

  const [errors, setErrors] = useState({});
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else {
      // Strip out non-digit characters
      const numericPhone = formData.phone.replace(/\D/g, '');
      if (numericPhone.length < 10 || numericPhone.length > 15) {
        newErrors.phone = 'Phone number must be between 10 and 15 digits';
      }
    }
    if (!formData.bestDateToCall) {
      newErrors.bestDateToCall = 'Best date to call is required';
    }
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required';
    }
    if (!formData.course) {
      newErrors.course = 'Preferred course is required';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {

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
            <p><strong>Preferred Time:</strong> ${formData.preferredTime}</p>
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
        toEmail: "riyabasak26@gmail.com",
      };

      sendEmail(payload);
      // Reset the form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        bestDateToCall: '',
        preferredTime: '',
        course: '',
      });
    } else {
      console.log('Validation failed:', errors);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 get-started-banner">
      <form
        className="p-6 shadow-lg rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-5">Contact Form</h2>
        <div className="mb-4 mt-4">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full border-b-2 border-x-0 border-t-0 rounded-md ${errors.name ? 'border-red-500' : 'border-gray-500'} focus:border-blue-500 outline-none py-2 `}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border-b-2 border-x-0 border-t-0 rounded-md ${errors.email ? 'border-red-500' : 'border-gray-500'} focus:border-blue-500 outline-none py-2`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
            placeholder='Bast Date To Call'
            value={formData.bestDateToCall}
            onChange={handleChange}
            className={`w-full border-b-2 border-x-0 border-t-0 rounded-md ${errors.bestDateToCall ? 'border-red-500' : 'border-gray-500'} focus:border-blue-500 outline-none py-2`}
          />
          <Label htmlFor="bestDateToCall" value="Best Date to Call" className='text-white'/>
          {errors.bestDateToCall && <p className="text-red-500 text-sm mt-1">{errors.bestDateToCall}</p>}
        </div>
        <div className="mb-4">
          <input
            id="preferredTime"
            name="preferredTime"
            type="time"
            placeholder='Preferred Time'
            value={formData.preferredTime}
            onChange={handleChange}
            className={`w-full border-b-2 border-x-0 border-t-0 rounded-md ${errors.preferredTime ? 'border-red-500' : 'border-gray-500'} focus:border-blue-500 outline-none py-2`}
          />
          <Label htmlFor="preferredTime" value="Preferred Time"  className='text-white'/>
          {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
        </div>
        <div className="mb-4">
          <Select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className={`w-full border-none rounded-md  ${errors.course ? 'border-red-500' : 'border-gray-500'} focus:border-blue-500 py-2`}
          >
            <option value="" disabled className='border-none'>Select a course</option>
            <option value="automation-engineer">Automation Engineer</option>
            <option value="infra-automation">Infra Automation</option>
            <option value="azure-devops-architect">Azure Devops Architect</option>
            <option value="spirngboot-java-with-multi-cloud-devops">Spirngboot java with Multi Cloud Devops</option>
            <option value="docker-kubernetes">Docker Kubernetes</option>
            <option value="site-reliability-engineering">Site Reliability Engineering</option>
            <option value="gcp-devSecOps">GCP DevSecOps</option>
            <option value="azure-data-engineering">Azure Data Engineering</option>
            <option value="azure-data-factory">Azure Data Factory</option>

          </Select>
          {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
        </div>
        <div className="mt-4">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
