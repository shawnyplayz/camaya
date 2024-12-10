import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";

const Video = () => {
  const data = {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  return (
    <div className="px-4flex flex-col mb-[200px]"
    style={{
      background:
      "linear-gradient(180deg, rgba(255, 196, 71, 0.18) 22.97%, rgba(255, 244, 221, 0) 76.05%)",

    }}
    >
      <div className="mx-auto container">
        <div className="mt-[117px] font-workSansMedium text-[64px] mb-[63px] text-left font-medium text-[#221C42]">
          <h1>Lorem ipsum dolor sit amet, consectetur</h1>
        </div>
        <div className="w-full flex items-center justify-center py-12 md:py-0 px-16">
          <iframe
            className="w-full h-[500px] md:h-[600px] max-w-4xl"
            src="https://player.vimeo.com/video/1037350824?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="CC Community Update FINAL HR_110824"
          ></iframe>
          <div className="max-w-[600px] px-12 text-[#9C9C9C] font-workSansMedium font-medium text-base">
            <h1>{data.description}</h1>
            <div className="border-b border-[#ECA34C] border mt-7" />
            <h1 className="text-[#373737] mt-9 font-workSansMedium font-medium text-2xl">
              West Philippine Sea
            </h1>
          </div>
        </div>
        <div className="info mt-4 font-workSansRegular font-normal text-lg px-16">
          Follow us On
        </div>
        <div className="border-b border-[#ECA34C] border mt-2 max-w-[130px] ml-16" />
        <div className="flex gap-3 mt-4 px-16">
          <div className="rounded-full border p-4 border-[#FEA439]">
            <BiLogoInstagram color="#FEA439" size={30} />
          </div>
          <div className="border p-4 rounded-full border-[#FEA439]">
            <BiLogoFacebookCircle color="#FEA439" size={30} />
          </div>
          <div className="border p-4 rounded-full border-[#FEA439]">
            <BiLogoYoutube color="#FEA439" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
