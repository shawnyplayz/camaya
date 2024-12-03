import { useState } from "react";

export default function VideoModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to Open Modal */}
      <button
        onClick={toggleModal}
        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Open Video
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-11/12 max-w-3xl bg-white rounded shadow-lg">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-black"
            >
              ×
            </button>

            {/* Video Container */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
