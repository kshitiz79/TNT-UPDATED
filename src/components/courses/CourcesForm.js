"use client";
import React, { useState } from "react";
import { Button, Label, Select, Modal } from "flowbite-react";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bestDateToCall: "",
    preferredTime: "",
    course: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  // For date "min" attribute
  const today = new Date().toISOString().split("T")[0];

  // Handle input changes
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

  // Validation
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

  // 1. Sends form data to enrollNow endpoint
  const sendEnrollmentData = async (payload) => {
    const url = "https://tntbackend-production.up.railway.app/api/enrollNow";
    console.log("Enrollment payload:", payload); 
    try {
      const response = await axios.post(url, payload, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      console.error("Failed to send data:", error);
    }
  };

  // 2. Sends an email
  const sendEmail = async (payload) => {
    const url = "https://talentlink-emailservice-production.up.railway.app/api/sendEmail";
    console.log("Email payload:", payload); 
    try {
      const emailResponse = await axios.post(url, payload);
      console.log("Email sent successfully:", emailResponse.data);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Build the JSON payload for the tntbackend endpoint
      const enrollmentPayload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.bestDateToCall,
        course: formData.course,
        time: formData.preferredTime,
        timezone: "Asia/Kolkata", // or "Asia/Calcutta"
      };

      // Call the function to send data to your tntbackend API
      sendEnrollmentData(enrollmentPayload);

      // (Optional) Build the email body HTML
      const emailBody = `
        <html>
          <body>
            <h1>New Enrollment Request</h1>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Preferred Date:</strong> ${formData.bestDateToCall}</p>
            <p><strong>Preferred Time:</strong> ${formData.preferredTime}</p>
            <p><strong>Course:</strong> ${formData.course}</p>
          </body>
        </html>
      `;

      // Call the function to send the email (uncomment if you want to actually send email)
      sendEmail({
        subject: "New Enrollment Request",
        emailbody: emailBody,
        bodyType: "html",
        toEmail: "YOUR_TARGET_EMAIL@gmail.com", // replace with your actual email
      });

      // Reset form and show modal
      setFormData({
        name: "",
        email: "",
        phone: "",
        bestDateToCall: "",
        preferredTime: "",
        course: "",
      });
      setShowModal(true);
    } else {
      console.log("Validation failed:", errors);
    }
  };
  return (
    <div className="p-4 w-full container flex justify-center items-center">
      <form
  className="p-6 lg:p-8 rounded-lg w-full sm:w-3/4 md:w-full lg:w-[100%] bg-blue-50/60 lg:h-auto lg:border lg:border-blue-50  backdrop-blur-lg mt-10 md:mt-20"
  onSubmit={handleSubmit}
>
        <h2 className="text-2xl font-bold mb-5 uppercase text-center text-black">
          Contact US
        </h2>
        
        {/* Grid Layout with Responsive Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Name, Email */}
          <div className="space-y-6 ">
            <div>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border-b-2  rounded-md ${
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
                className={`w-full border-b-2  rounded-md ${
                  errors.email ? "border-red-500" : "border-gray-500 mr-5"
                } focus:border-blue-500 outline-none py-2`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Column 2: Phone */}
          <div className="space-y-5">
            <div>
              <PhoneInput
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
                className="w-full border border-gray-500 text-black rounded-md focus:border-blue-500 outline-none py-2 px-3"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1 ">{errors.phone}</p>}
            </div>

            <div>
              <input
                id="bestDateToCall"
                name="bestDateToCall"
                type="date"
                min={today}
                value={formData.bestDateToCall}
                onChange={handleChange}
                className={`w-full border-b-2  rounded-md text-black ${
                  errors.bestDateToCall ? "border-red-500" : "border-gray-500"
                } focus:border-blue-500 outline-none py-2`}
              />
              <Label htmlFor="bestDateToCall" value="Best Date to Call" className='text-black'/>
              {errors.bestDateToCall && (
                <p className="text-red-500 text-sm ">{errors.bestDateToCall}</p>
              )}
            </div>
          </div>

          {/* Column 3: Time, Course */}
          <div className="space-y-4">
            <div>
              <input
                id="preferredTime"
                name="preferredTime"
                type="time"
                value={formData.preferredTime}
                onChange={handleChange}
                className={`w-full border-b-2  rounded-md ${
                  errors.preferredTime ? "border-red-500"  : "border-gray-500 text-black" 
                } focus:border-blue-500 outline-none py-2`}
              />
              <Label htmlFor="preferredTime" value="Preferred Time"  className='text-black'/>
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
                <option value="GCP DevOps & Cloud Computing">GCP DevOps & Cloud Computing</option>
                <option value="Azure Data Factory">Azure Data Factory
                </option>
                <option value="iOS Training">
                iOS Training
                </option>
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
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-green-400 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Modal for Submission Confirmation */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Submission Successful</Modal.Header>
        <Modal.Body>
          <p>Your request has been submitted successfully. We will get back to you in your selected date & time.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
