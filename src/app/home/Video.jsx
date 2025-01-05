import { AOS } from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";

const Video = () => {
  useEffect(() => {
    // Initialize AOS
    AOS?.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const data = {
    description:
      "Just a three-hour drive from Manila to the southernmost tip of Bataan Peninsula, you will reach Camaya Coast Beach Resort & Properties. A once secluded cove, accessible to local fishermen, is now transformed into a prime leisure beach resort and residential development. We welcome you with lush mountains, endless sunsets, and pristine beaches. We offer you kilometer stretch of fine sand and clear blue waters, priceless view of the cove and the majestic Mt. Mariveles. We take the best of nature and make it even better for a perfect getaway from the busy metropolis.",
  };

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div
      className="px-4 flex flex-col"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 196, 71, 0.18) 22.97%, rgba(255, 244, 221, 0) 76.05%)",
      }}
    >
      <div className="mx-auto container">
        <div className="pt-5 sm:pt-10 ml-5 sm:ml-[60px] font-workSansMedium text-3xl sm:text-5xl mb-6 sm:mb-[33px] text-left font-medium text-universalHeadingTextColor">
          <h1>Discover Camaya Coast</h1>
        </div>
        <div
          className="w-full flex flex-col md:flex-row items-center justify-center py-6 md:py-0 px-4 sm:px-16"
          data-aos="zoom-in"
        >
          <iframe
            className="w-full h-[250px] sm:h-[450px] max-w-4xl"
            src="https://player.vimeo.com/video/1037350824?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            // src="https://drive.google.com/file/d/1Kk3vFfI2IL1vZrWOo2qN9F4v4Z5BWQvG/preview"
            width="100%"
            height="100%"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="CC Community Update FINAL HR_110824"
          />
          {/* <iframe
            src="https://player.vimeo.com/video/1037350824?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="1280"
            height="720"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="CC Community Update FINAL HR_110824"
          ></iframe> */}

          <div className="mt-6 md:mt-0 max-w-full md:max-w-[600px] px-4 md:px-12 text-universalContentTextColor font-workSansMedium font-medium text-sm sm:text-base">
            <h1>{data.description}</h1>
            <div className="border-b border-[#ECA34C] mt-5 sm:mt-7" />
            <h1 className="text-universalContentTextColor mt-6 sm:mt-9 font-workSansMedium font-medium text-lg sm:text-2xl">
              #LifeAtCamayaCoast
            </h1>
          </div>
        </div>
        <div className="info mt-4 font-workSansMedium text-universalContentTextColor font-normal text-base sm:text-lg px-4 sm:px-16">
          Follow us On
        </div>
        <div className="border-b border-[#ECA34C] mt-2 max-w-[130px] ml-4 sm:ml-16" />
        <div className="flex gap-3 mt-4 px-4 sm:px-16">
          <Link href={"https://www.instagram.com/camaya_prestige"}>
            <div
              className="rounded-full border p-2 sm:p-4 border-[#FEA439] hover:bg-[#FEA439] transition-all duration-300 ease-in-out"
              onMouseEnter={() => handleMouseEnter("instagram")}
              onMouseLeave={handleMouseLeave}
            >
              <BiLogoInstagram
                style={{
                  fill: hoveredIcon === "instagram" ? "#FFFFFF" : "#FEA439",
                }}
                size={20}
              />
            </div>
          </Link>
          <Link href={"https://www.facebook.com/camayaresort"}>
            <div
              className="border p-2 sm:p-4 rounded-full border-[#FEA439] hover:bg-[#FEA439] transition-all duration-300 ease-in-out"
              onMouseEnter={() => handleMouseEnter("facebook")}
              onMouseLeave={handleMouseLeave}
            >
              <BiLogoFacebookCircle
                style={{
                  fill: hoveredIcon === "facebook" ? "#FFFFFF" : "#FEA439",
                }}
                size={20}
              />
            </div>
          </Link>
          <Link
            href={
              "https://www.youtube.com/@camayacoastrealestateprope3388/featured"
            }
          >
            <div
              className="border p-2 sm:p-4 rounded-full border-[#FEA439] hover:bg-[#FEA439] transition-all duration-300 ease-in-out"
              onMouseEnter={() => handleMouseEnter("youtube")}
              onMouseLeave={handleMouseLeave}
            >
              <BiLogoYoutube
                style={{
                  fill: hoveredIcon === "youtube" ? "#FFFFFF" : "#FEA439",
                }}
                size={20}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
