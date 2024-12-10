import Link from "next/link";
import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";

const Video = () => {
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
        <div className="pt-[40px] ml-[60px] font-workSansMedium text-5xl mb-[33px] text-left font-medium text-[#221C42]">
          <h1>Discover Camaya Coast</h1>
        </div>
        <div className="w-full flex items-center justify-center py-12 md:py-0 px-16">
          <iframe
            className="w-full h-[450px] md:h-[450px] max-w-4xl"
            src="https://drive.google.com/file/d/1Kk3vFfI2IL1vZrWOo2qN9F4v4Z5BWQvG/preview"
            width="100%"
            height="100%"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="CC Community Update FINAL HR_110824"
          />
          <div className="max-w-[600px] px-12 text-[#9C9C9C] font-workSansMedium font-medium text-base">
            <h1>{data.description}</h1>
            <div className="border-b border-[#ECA34C] border mt-7" />
            <h1 className="text-[#373737] mt-9 font-workSansMedium font-medium text-2xl">
              #LifeAtCamayaCoast
            </h1>
          </div>
        </div>
        <div className="info mt-4 font-workSansRegular font-normal text-lg px-16">
          Follow us On
        </div>
        <div className="border-b border-[#ECA34C] border mt-2 max-w-[130px] ml-16" />
        <div className="flex gap-3 mt-4 px-16">
          <Link href={"https://www.instagram.com/camaya_prestige"}>
            <div
              className="rounded-full border p-4 border-[#FEA439] hover:bg-[#FEA439]"
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
          <Link href={"https://www.facebook.com/OfficialCamayaCoast"}>
            <div
              className="border p-4 rounded-full border-[#FEA439] hover:bg-[#FEA439]"
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
          <Link href={"https://www.youtube.com/@camayacoast.realestateph"}>
            <div
              className="border p-4 rounded-full border-[#FEA439] hover:bg-[#FEA439]"
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
