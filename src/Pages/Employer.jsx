import React, { useState, useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Employer = () => {
  const [selected, setSelected] = useState(""); // default radio
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    resume: null,
  });

  const fileInputRef = useRef(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      resume: file || null,
    }));
  };

  // Open hidden file input
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("userType", selected);
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("company", formData.company);
    if (formData.resume) {
      data.append("resume", formData.resume);
    }

    console.log("Form Submitted:", { ...formData, selected });
    alert("Form submitted!");
  };

  return (
    <div className="Container w-[95%] ml-10 bg-cover bg-center">
      <div className="topContainer flex flex-col w-full h-auto">
        {/* Top Background Image */}
        <div
          className="w-full h-[30vw]"
          style={{
            backgroundImage: "url('/Images/EmployerBackground.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Form Box */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-5xl mx-auto p-10 bg-white rounded-2xl shadow-xl -mt-30 h-[40vw]"
        >
          {/* Radio Buttons */}
          <div className="flex flex-col gap-25 md:flex-row justify-center md:space-x-10 space-y-4 md:space-y-0 mb-10">
            {/* Job Seeker */}
            <div
              onClick={() => setSelected("jobseeker")}
              className={`flex items-center justify-center w-64 min-h-[80px] p-6 rounded-xl cursor-pointer border-2 transition-all duration-300 ${
                selected === "jobseeker"
                  ? "bg-red-600 text-white border-red-600 shadow-lg scale-105"
                  : "bg-white text-gray-700 border-gray-300 hover:shadow-md"
              }`}
            >
              <label className="flex items-center space-x-3 cursor-pointer w-full">
                <input
                  type="radio"
                  name="userType"
                  value="jobseeker"
                  checked={selected === "jobseeker"}
                  onChange={() => setSelected("jobseeker")}
                  className="w-5 h-5 accent-red-600"
                />
                <span className="text-xl font-semibold">Job Seeker</span>
              </label>
            </div>

            {/* Employer */}
            <div
              onClick={() => setSelected("employer")}
              className={`flex items-center justify-center w-64 min-h-[80px] p-6 rounded-xl cursor-pointer border-2 transition-all duration-300 ${
                selected === "employer"
                  ? "bg-red-600 text-white border-red-600 shadow-lg scale-105"
                  : "bg-white text-gray-700 border-gray-300 hover:shadow-md"
              }`}
            >
              <label className="flex items-center space-x-3 cursor-pointer w-full">
                <input
                  type="radio"
                  name="userType"
                  value="employer"
                  checked={selected === "employer"}
                  onChange={() => setSelected("employer")}
                  className="w-5 h-5 accent-red-600"
                />
                <span className="text-xl font-semibold">Employer</span>
              </label>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Left Inputs */}
            <div className="flex-1 space-y-5 md:pr-6 md:border-r md:border-gray-300">
              <div>
                <label className="text-gray-500 text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border px-3 py-3 rounded-md mt-1 text-base"
                />
              </div>
              <div>
                <label className="text-gray-500 text-sm">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your Contact number"
                  className="w-full border px-3 py-3 rounded-md mt-1 text-base"
                />
              </div>
              <div>
                <label className="text-gray-500 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your mail I’d"
                  className="w-full border px-3 py-3 rounded-md mt-1 text-base"
                />
              </div>
              <div>
                <label className="text-gray-500 text-sm">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your Company name"
                  className="w-full border px-3 py-3 rounded-md mt-1 text-base"
                />
              </div>
            </div>

            {/* Right Submit Section */}
            <div className="flex-1 flex flex-col justify-center items-start mt-6 md:mt-0 md:pl-6">
              <span className="mb-2 text-base mt-30 ml-20 font-bold">
                Submit your resume
              </span>

              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx"
              />

              {/* Trigger button */}
              <button
                type="button"
                onClick={triggerFileInput}
                className="bg-green-500 text-black px-5 py-3 cursor-pointer ml-20 font-bold"
              >
                + Add Document
              </button>

              {/* Show uploaded file name */}
              {formData.resume && (
                <p className="text-gray-600 text-sm mb-4">
                  Uploaded: {formData.resume.name}
                </p>
              )}

              <button
                type="submit"
                className="bg-red-500 text-white px-7 py-3 rounded-2xl cursor-pointer mt-50 ml-80 font-bold"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Contact Info */}
      <div className="ContactBox w-full flex flex-col md:flex-row justify-around items-center p-6 mt-14 space-y-4 md:space-y-0">
        {/* Phone */}
        <div className="flex items-center space-x-6">
          <div
            className="h-20 w-20 rounded-2xl flex items-center justify-center"
            style={{
              background:
                "linear-gradient(155.27deg, #0C49A9 10.91%, #083454 89.75%), linear-gradient(124.6deg, #033EA4 2.9%, #84DCF0 95.09%)",
            }}
          >
            <FaPhoneAlt className="text-white text-3xl" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-xl">Phone</span>
            <span className="text-gray-500 text-lg">+91 7498440676</span>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-6">
          <div
            className="h-20 w-20 rounded-2xl flex items-center justify-center"
            style={{
              background:
                "linear-gradient(155.27deg, #0C49A9 10.91%, #083454 89.75%), linear-gradient(124.6deg, #033EA4 2.9%, #84DCF0 95.09%)",
            }}
          >
            <FaEnvelope className="text-white text-3xl" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-xl">Email</span>
            <span className="text-gray-500 text-lg">contact@recruitlogy.com</span>
          </div>
        </div>

        {/* Office */}
        <div className="flex items-center space-x-6">
          <div
            className="h-20 w-20 rounded-2xl flex items-center justify-center"
            style={{
              background:
                "linear-gradient(155.27deg, #0C49A9 10.91%, #083454 89.75%), linear-gradient(124.6deg, #033EA4 2.9%, #84DCF0 95.09%)",
            }}
          >
            <FaMapMarkerAlt className="text-white text-3xl" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-xl">Office</span>
            <span className="text-gray-500 text-lg">Omkar Nagar,</span>
            <span className="text-gray-500 text-lg">Nagpur, Maharashtra</span>
          </div>
        </div>
      </div>

      {/* Google map */}
      <div className="w-full h-[450px] mt-8 mb-8  rounded-xl overflow-hidden">
        <iframe
          title="Jai Umiya Plaza Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.1579013285004!2d79.09323967477121!3d21.105116185152536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf45cd8c1eb7%3A0x7b03c47451d79ead!2sJai%20Umiya%20Plaza!5e1!3m2!1sen!2sin!4v1759467553808!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Employer;
