"use client"
import React, { useState } from 'react';
import { Button, Label, Select, Modal } from 'flowbite-react';
import "./EnrollNow.scss"
import axios from 'axios';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

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
    <>
      <div className="flex justify-center items-center min-h-screen p-4 get-started-banner gap-6 flex-col ">
        <h2>Enroll Now</h2>
        <form
          className="p-6 shadow-lg rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-5 text-black">Contact Form</h2>
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
            {errors.email && <p className="text-red-500 text-sm mt-1 ">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <PhoneInput
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(phone) => setFormData({ ...formData, phone })}
              className="text-sm w-full border text-zinc-950 border-gray-500 rounded-md focus:border-blue-500 outline-none py-2 px-3"
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

      {/* Modal for Submission Confirmation */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Submission Successful</Modal.Header>
        <Modal.Body>
          <p>Your request has been submitted successfully. We will get back to you shortly.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
