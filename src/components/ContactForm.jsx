"use client";

import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { fetchDataPost } from "@/utils.js/fetchData";
import endpoints from "@/config/endpoints";
import { showToastError, showToastSuccess } from "@/config/toast";

const ContactForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    message: "",
  });

  // State for form status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State for feedback messages
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  // Handle input changes dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (isSubmitting) return;

    setIsSubmitting(true);
    setFeedbackMessage(null); // Clear previous messages

    try {
      // Send form data to the API endpoint
      const response = await fetchDataPost(endpoints.sendInquiry, formData);

      // Check if the response is successful
      if (response?.message) {
        // Show success message
        setFeedbackMessage({
          type: "success",
          text: "Your message has been sent successfully!",
        });

        // Reset form fields
        setFormData({
          name: "",
          email: "",
          mobile_number: "",
          message: "",
        });

        showToastSuccess(response.message);

        // Clear feedback message after 8 seconds
        setTimeout(() => setFeedbackMessage(null), 8000);
      } else {
        debugger;
        // Handle failed response
        const errorMsg = response?.message || "Failed to send the message.";
        setFeedbackMessage({ type: "error", text: errorMsg });
        showToastError(errorMsg);
      }
    } catch (error) {
      // Handle unexpected errors
      const errorMsg =
        error?.message || "An unexpected error occurred. Please try again.";
      setFeedbackMessage({ type: "error", text: errorMsg });
      showToastError(errorMsg);
    } finally {
      // Stop submitting state
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white px-10 py-8 rounded-lg shadow-md max-w-md mx-auto lg:max-w-xl">
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <h1 className="text-[#221C42] font-workSansMedium font-medium text-3xl sm:text-4xl md:text-5xl mb-6 mt-5">
          Contact Us
        </h1>

        {/* Form Fields */}
        <div className="w-full">
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
          <Input
            type="text"
            name="mobile_number"
            value={formData.mobile_number}
            onChange={handleInputChange}
            placeholder="Phone"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="5"
            placeholder="Message"
            className="w-full pl-7 py-6 rounded-xl border-2 mb-8 resize-none focus:outline-none focus:ring-2 focus:ring-[#221C42]"
            required
          />
        </div>

        {/* Feedback Message */}
        {feedbackMessage && (
          <p
            className={`${
              feedbackMessage.type === "success"
                ? "text-green-600"
                : "text-red-600"
            } transition-opacity duration-500 mb-4`}
          >
            {feedbackMessage.text}
          </p>
        )}

        {/* Submit Button */}
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
