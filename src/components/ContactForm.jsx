import React from "react";
import Input from "./Input";
import Button from "./Button";

const ContactForm = () => {
  return (
    <div className="bg-white px-10 py-8 rounded-lg shadow-md max-w-md mx-auto lg:max-w-xl">
      <form>
        <h1 className="text-[#221C42] font-workSansMedium font-medium text-3xl sm:text-4xl md:text-5xl mb-6 mt-5">
          Contact Us
        </h1>
        <div className="w-full">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Phone" />
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Message"
            className="w-full pl-7 py-6 rounded-xl border-2 mb-8 resize-none focus:outline-none focus:ring-2 focus:ring-[#221C42]"
          />
        </div>
        <div className="flex items-center justify-center pb-8">
          <Button className="w-full">Send Message</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
