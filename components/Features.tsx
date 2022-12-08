import Image from "next/image";
import React from "react";
import featureImage from "../public/img/Feature Image.png";

const Features = () => {
  return (
    <section className="gp3-container">
      <div className="flex first-letter:justify-between items-center pb-12 max-lg:flex-col">
        <div className="md:w-1/2 flex justify-center items-center max-lg:pt-16">
          <Image
            src={featureImage}
            quality={100}
            className="8xl:w-3/4 w-full"
            width={400}
            height={300}
            alt="feature"
          />
        </div>
        <div className="md:w-2/3 lg:w-2/5 lg:mt-32 8xl:pr-16 lg:ml-16 max-md:text-center 8xl:ml-0">
          <p className="mt-12 text-base" style={{ color: "#71E5FF" }}>
            Request Early Access to Get Started
          </p>
          <h1
            className="text-gradiant 8xl:text-4xl text-3xl mt-8 Manropebold leading-tight"
            style={{ lineHeight: 1.2 }}
          >
            The possibilities are beyond your imagination
          </h1>
          <p className="mt-6 text-base text-brand-textBlue ">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p className="mt-6 text-base text-brand-orange">
            Request Early Access to Get Started
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
