import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#031B34" }} className="">
      <div className="gp3-container">
        <div className="flex justify-center flex-col items-center py-16">
          <h1
            className="8xl:text-6xl text-5xl Manropebold text-gradient tracking-tighter md:w-4/5 lg:px-20  8xl:w-2/3 8xl:px-20 text-center mx-auto py-12"
            style={{ lineHeight: 1.1 }}
          >
            Do you want to step in to the future before others
          </h1>
          <button className="text-lg border mx-auto border-white px-6 py-3 hover:bg-white hover:text-black transition-colors">
            Request Early Access
          </button>
        </div>
        <div className="md:mt-8 flex justify-between items-start md:py-12 lg:px-16 max-md:flex-col-reverse max-md:items-center">
          <div className="md:px-6 max-md:my-12 max-md:text-center ">
            <h2 className="text-5xl Manropebold">GPT-3</h2>
            <p className="text-sm font-light w-52 mt-3 leading-relaxed opacity-80">
              Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
            </p>
          </div>
          <div className="md:px-6 max-md:my-12 max-md:text-center">
            <h4 className="text-lg Manropebold">Links</h4>
            <nav className="flex mt-2 justify-between max-md:items-center items-start flex-col">
              <Link className="mt-7" href={"/"}>
                Overons
              </Link>
              <Link className="mt-7" href={"/"}>
                Social Media
              </Link>
              <Link className="mt-7" href={"/"}>
                Counters
              </Link>
              <Link className="mt-7" href={"/"}>
                Contact
              </Link>
            </nav>
          </div>
          <div className="md:px-6 max-md:my-12 max-md:text-center">
            <h4 className="text-lg Manropebold">Company</h4>
            <nav className="flex mt-2 justify-between max-md:items-center items-start flex-col">
              <Link className="mt-7" href={"/"}>
                Terms & Conditions
              </Link>
              <Link className="mt-7" href={"/"}>
                Privacy Policy
              </Link>
              <Link className="mt-7" href={"/"}>
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
