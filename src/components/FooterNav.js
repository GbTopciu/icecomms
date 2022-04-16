import React from "react";
import { Link } from "react-router-dom";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import {SocialMediaIconsReact} from 'social-media-icons-react';

const FooterNav = () => {
  return (
    <div className="flex justify-evenly h-72 bg-black">
      <img
      className="h-4"
        src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/logo-white.svg"
        alt="whitelogo"
      ></img>
      <div className="flex flex-col">
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
        <Link
          to="Stories"
          className="uppercase mx-5 font-medium text-white text-sm"
        >
          Stories
        </Link>
      </div>
      <button className="text-white uppercase flex justify-center items-center">Get An Invite
            <ArrowNarrowRightIcon className="h-6" />
          </button>
          <p className="text-white">Copyright 2019. All Rights Reserved</p>
          <div>
          <SocialMediaIconsReact icon="facebook" borderColor="rgba(0,0,0,0)" iconColor="rgba(0, 0, 0, 0, 0)" backgroundColor="rgba(255,255,255, 1)" url="https://facebook.com"/>
          <SocialMediaIconsReact icon="youtube-play" borderColor="rgba(0,0,0,0)" iconColor="rgba(0, 0, 0, 0, 0)" backgroundColor="rgba(255,255,255, 1)" url="https://youtube.com"/>
          <SocialMediaIconsReact icon="twitter" borderColor="rgba(0,0,0,0)" iconColor="rgba(0, 0, 0, 0, 0)" backgroundColor="rgba(255,255,255, 1)" url="https://twitter.com"/>
          <SocialMediaIconsReact icon="pinterest" borderColor="rgba(0,0,0,0)" iconColor="rgba(0, 0, 0, 0, 0)" backgroundColor="rgba(255,255,255, 1)" url="https://pinterest.com"/>
          <SocialMediaIconsReact icon="instagram" borderColor="rgba(0,0,0,0)" iconColor="rgba(0, 0, 0, 0, 0)" backgroundColor="rgba(255,255,255, 1)" url="https://pinterest.com"/>
          </div>
    </div>
  );
};

export default FooterNav;
