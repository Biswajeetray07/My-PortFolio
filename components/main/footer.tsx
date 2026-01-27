import Link from "next/link";

import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[20] relative">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-center flex-wrap gap-5">
          <Link
            href="https://github.com/Biswajeetray07"
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-row items-center my-[15px] cursor-pointer"
          >
            <RxGithubLogo width={24} height={24} />
            <span className="text-[15px] ml-[6px]">Github</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/biswajeet-ray"
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-row items-center my-[15px] cursor-pointer"
          >
            <RxLinkedinLogo width={24} height={24} />
            <span className="text-[15px] ml-[6px]">Linkedin</span>
          </Link>
          <Link
            href="https://www.instagram.com/biswajeet_ray111/"
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-row items-center my-[15px] cursor-pointer"
          >
            <RxInstagramLogo width={24} height={24} />
            <span className="text-[15px] ml-[6px]">Instagram</span>
          </Link>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Biswajeet Ray {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
