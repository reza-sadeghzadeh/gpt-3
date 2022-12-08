import React from "react";

const Action = () => {
  return (
    <section className="gp3-container">
      <div className="bg-gradient-to-r from-brand-purple text-black  my-6 to-brand-orange w-full p-12 rounded">
        <div className="flex justify-between items-center max-lg:flex-col max-lg:text-center">
          <div>
            <p className="text-base font-semibold">
              Request Early Access to Get Started
            </p>
            <h1
              className="8xl:text-2xl text-2xl mt-4 Manropebold "
              style={{ lineHeight: 1.3 }}
            >
              Register today & start exploring the endless possiblities.
            </h1>
          </div>
          <button className="bg-black 8xl:text-xl hover:bg-black/80 font-medium max-lg:mt-8 text-base  text-white rounded-full px-12 py-4 ">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Action;
