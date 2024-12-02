"use client";

import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { fetchDataPost } from "@/utils.js/fetchData";
import endpoints from "@/config/endpoints";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      console.log("Sending data:", formData);

      const response = await fetchDataPost(endpoints.sendInquiry, formData);

      if (response.success) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", mobile_number: "", message: "" });
      } else {
        throw new Error(response.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending inquiry:", error);
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white px-10 py-8 rounded-lg shadow-md max-w-md mx-auto lg:max-w-xl">
      <form onSubmit={handleSubmit}>
        <h1 className="text-[#221C42] font-workSansMedium font-medium text-3xl sm:text-4xl md:text-5xl mb-6 mt-5">
          Contact Us
        </h1>
        <div className="w-full">
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <Input
            type="text"
            name="mobile_number"
            value={formData.mobile_number}
            onChange={handleInputChange}
            placeholder="Phone"
          />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="5"
            placeholder="Message"
            className="w-full pl-7 py-6 rounded-xl border-2 mb-8 resize-none focus:outline-none focus:ring-2 focus:ring-[#221C42]"
            required
          />
        </div>
        {successMessage && <p className="text-green-600">{successMessage}</p>}
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        <div className="flex items-center justify-center pb-8">
          <Button className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
