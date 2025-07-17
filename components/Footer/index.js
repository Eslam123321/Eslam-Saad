import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <Button type="primary">Schedule a call</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-base text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With <span className="text-red-500">♥</span> by
        <span className="text-blue-500 ml-1">Eslam Saad</span>
      </h1>
      <div className="text-sm mt-2 text-center">
        <span className="block">Phone: <a href="tel:01095412229" className="hover:underline">01095412229</a></span>
        <span className="block">Email: <a href="mailto:esaad6098@gmail.com" className="hover:underline">esaad6098@gmail.com</a></span>
      </div>
    </>
  );
};

export default Footer;
