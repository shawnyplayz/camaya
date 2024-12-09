import React from "react";

const Video = () => {
  return (
    <div className="px-4 md:h-screen flex items-center justify-center bg-gradient-to-b from-[#ffffff] via-[#F9E3C8] to-[#ffffff]">
      <div className="w-full max-w-4xl flex items-center justify-center py-12 md:py-0">
        <iframe
          className="md:w-full w-fit h-fit md:h-[500px] lg:h-[600px]"
          src="https://www.youtube.com/embed/qEQdZcZYB50?si=iqVe_FmqRwZ1a7XU"
          title="Consultation Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
