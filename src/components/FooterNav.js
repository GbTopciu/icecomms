import React from "react";
import { Link } from "react-router-dom";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { SocialMediaIconsReact } from "social-media-icons-react";

const FooterNav = () => {
  return (
    <div className="flex flex-col md:flex md:flex-row justify-center items-center md:justify-evenly h-full md:h-72 bg-black">
      <div className="flex flex-col md:flex md:flex-row">
        <div className="flex flex-col md:flex md:flex-col md:items-center justify-center md:pr-10 md:pt-5">
          <img
            className="order-1 mb-11 py-9"
            src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/logo-white.svg"
            alt="whitelogo"
          ></img>
          <div className="flex flex-row mb-11 order-2 space-x-2 md:flex md:flex-row md:mb-0 ">
            <SocialMediaIconsReact
              icon="facebook"
              borderColor="rgba(0,0,0,0)"
              iconColor="rgba(0, 0, 0, 0, 0)"
              backgroundColor="rgba(255,255,255, 1)"
              url="https://facebook.com"
            />
            <SocialMediaIconsReact
              icon="youtube-play"
              borderColor="rgba(0,0,0,0)"
              iconColor="rgba(0, 0, 0, 0, 0)"
              backgroundColor="rgba(255,255,255, 1)"
              url="https://youtube.com"
            />
            <SocialMediaIconsReact
              icon="twitter"
              borderColor="rgba(0,0,0,0)"
              iconColor="rgba(0, 0, 0, 0, 0)"
              backgroundColor="rgba(255,255,255, 1)"
              url="https://twitter.com"
            />
            <SocialMediaIconsReact
              icon="pinterest"
              borderColor="rgba(0,0,0,0)"
              iconColor="rgba(0, 0, 0, 0, 0)"
              backgroundColor="rgba(255,255,255, 1)"
              url="https://pinterest.com"
            />
            <SocialMediaIconsReact
              icon="instagram"
              borderColor="rgba(0,0,0,0)"
              iconColor="rgba(0, 0, 0, 0, 0)"
              backgroundColor="rgba(255,255,255, 1)"
              url="https://pinterest.com"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center order-3 md:items-baseline ">
          <Link
            to="Stories"
            className="uppercase mx-5 font-medium text-white text-sm"
          >
            Home
          </Link>
          <Link
            to="Stories"
            className="uppercase mx-5 font-medium text-white text-sm"
          >
            Stories
          </Link>
          <Link
            to="Features"
            className="uppercase mx-5 font-medium text-white text-sm"
          >
            Features
          </Link>
          <Link
            to="Pricing"
            className="uppercase mx-5 font-medium  text-white text-sm"
          >
            Pricing
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:justify-evenly md:items-end py-9">
        <button className="order-4 text-white uppercase flex justify-center items-center md:mb-10">
          Get An Invite
          <ArrowNarrowRightIcon className="h-6 pl-2" />
        </button>
        <p className="order-5 text-white">
          Copyright 2019. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default FooterNav;
