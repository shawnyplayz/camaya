import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    // Close the modal if clicked outside the modal content
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains("modal-overlay")) {
        onClose();
      }
    };

    // Add event listener for click outside
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    // Cleanup the event listener when the modal is closed
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 modal-overlay"
      onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from triggering close
    >
      <div className="relative w-full max-w-3xl h-[70vh] p-4 bg-white rounded shadow-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-black text-xl"
        >
          ×
        </button>

        {/* Modal Content */}
        <div className="w-full h-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
