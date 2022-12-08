import Link from "next/link";
import React from "react";
import GradLine from "./atoms/GradLine";

const About = () => {
  return (
    <section className="gp3-container my-16">
      <div className="relative lg:p-16 p-12  bg-brand-lightBlue/75 overflow-hidden">
        <div
          style={{
            boxShadow: "rgb(27 120 222 / 60%) 0px 0px 100px 60px",
          }}
          className="absolute pointer-events-none rounded-full opacity-50 h-96 w-96 -left-48 -top-80  bg-brand-blueShadow/50"
        />
        <div
          style={{
            boxShadow: "rgb(27 120 222 / 60%) 0px 0px 100px 60px",
          }}
          className="absolute  rounded-full opacity-30 h-96 w-96 -right-40 -bottom-48 pointer-events-none bg-brand-blueShadow/50"
        />
        <GradLine />

        <div className="flex justify-between items-start mt-4 max-md:flex-col">
          <h3 className="text-2xl font-bold max-md:mb-6">What is GPT-3</h3>
          <p className="text-base md:w-2/3  text-brand-textBlue">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
        <div className="mt-20 flex justify-between items-start max-md:flex-col max-md:text-center max-md:items-center">
          <h2 className="text-3xl lg:text-4xl w-full max-md:mb-4 md:w-2/3 8xl:w-2/5 text-gradiant Manropebold leading-snug tracking-tight ">
            The possibilities are beyond your imagination
          </h2>
          <Link href={"/"}>
            <p className="mt-4 text-base text-brand-orange">
              Explore The Library
            </p>
          </Link>
        </div>
        <div className="mt-16 flex justify-between items-start max-md:flex-col max-lg:text-sm">
          <div className="md:mr-6 max-md:mb-12">
            <GradLine />
            <h4 className="text-xl mt-4 lg:text-2xl font-semibold lg:font-bold">
              Chatbots
            </h4>
            <p className="text-brand-textBlue text-base md:mt-6 mt-4 ">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought.
            </p>
          </div>
          <div className="md:mr-6 max-md:mb-12">
            <GradLine />
            <h4 className="text-xl mt-4 lg:text-2xl font-semibold lg:font-bold">
              Knowledgebase
            </h4>
            <p className="text-brand-textBlue md:mt-6 mt-4">
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by
            </p>
          </div>
          <div className="md:ml-6">
            <GradLine />
            <h4 className="text-xl mt-4 lg:text-2xl font-semibold lg:font-bold">
              Education
            </h4>
            <p className="text-brand-textBlue md:mt-6 mt-4">
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
