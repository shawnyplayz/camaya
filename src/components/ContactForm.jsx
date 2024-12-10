"use client";

import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { fetchDataPost } from "@/utils.js/fetchData";
import endpoints from "@/config/endpoints";
import { showToastError, showToastSuccess } from "@/config/toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState({
    type: "",
    text: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent duplicate submissions
    setIsSubmitting(true);
    setFeedbackMessage({ type: "", text: "" });

    try {
      console.log("Sending data:", formData);

      const response = await fetchDataPost(endpoints.sendInquiry, formData);

      if (response.success) {
        setFeedbackMessage({
          type: "success",
          text: "Your message has been sent successfully!",
        });
        setFormData({ name: "", email: "", mobile_number: "", message: "" });
        showToastSuccess(response.message);
        // Clear the message after 8 seconds
        setTimeout(
          () =>
            setFeedbackMessage({
              name: "",
              email: "",
              mobile_number: "",
              message: "",
            }),
          8000
        );
      } else {
        const errorMsg = response.message || "Failed to send message.";
        setFeedbackMessage({ type: "error", text: errorMsg });
        showToastError(errorMsg);
      }
    } catch (error) {
      const errorMsg = error.message || "An unexpected error occurred.";
      setFeedbackMessage({ type: "error", text: errorMsg });
      showToastError(errorMsg);
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
        {feedbackMessage.text && (
          <p
            className={`${
              feedbackMessage.type === "success"
                ? "text-green-600"
                : "text-red-600"
            } transition-opacity duration-500`}
          >
            {feedbackMessage.text}
          </p>
        )}
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
