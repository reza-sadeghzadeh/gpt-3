import Image from "next/image";
import React from "react";
import atlassian from "../public/img/brands/atlassian.png";
import dropbox from "../public/img/brands/dropbox.png";
import google from "../public/img/brands/google.png";
import shopify from "../public/img/brands/shopify.png";
import slack from "../public/img/brands/slack.png";

const Brands = () => {
  return (
    <section className="gp3-container py-12">
      <div className="flex justify-around mx-auto lg:w-2/3 items-center max-md:flex-col max-md:h-80">
        <Image
          src={google}
          width={100}
          height={50}
          alt="google"
          className="opacity-75"
        />{" "}
        <Image
          src={dropbox}
          width={100}
          height={50}
          alt="dropbox"
          className="opacity-75"
        />{" "}
        <Image
          src={atlassian}
          width={100}
          height={50}
          alt="atlassian"
          className="opacity-75"
        />
        <Image
          src={shopify}
          width={100}
          height={50}
          alt="shopify"
          className="opacity-75"
        />
        <Image
          src={slack}
          width={100}
          height={50}
          alt="slack"
          className="opacity-75"
        />
      </div>
    </section>
  );
};

export default Brands;
