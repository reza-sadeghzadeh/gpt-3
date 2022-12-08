import Image from "next/image";
import blur01 from "../public/img/blur-01.png";
import hero from "../public/img/hero.png";
import people1 from "../public/img/people/Ellipse 31.png";
import people2 from "../public/img/people/Ellipse 32.png";
import people3 from "../public/img/people/Ellipse 33.png";
import people4 from "../public/img/people/Ellipse 34.png";
import people5 from "../public/img/people/Ellipse 35.png";

const Hero = () => {
  return (
    <>
      <Image
        alt="blury"
        className="absolute -z-10 top-0 pointer-events-none"
        src={blur01}
        width={1000}
        height={1000}
      />
      <section className="gp3-container ">
        <div className="flex justify-center items-center">
          <div className="w-3/4 py-24">
            <h1
              className="text-7xl Manropebold text-gradiant tracking-tighter opacity-90"
              style={{ lineHeight: 1.1 }}
            >
              Let’s Build Something amazing with GPT-3 OpenAI
            </h1>
            <p className="mt-12 mr-32 text-lg text-brand-textBlue">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <div className="mt-8 w-full">
              <input
                className="px-6 py-4 rounded-l-md bg-brand-darkBlue w-2/3 outline-none  placeholder:opacity-70"
                type="text"
                placeholder="Your Email Address"
                name=""
                id=""
              />
              <button className="md:px-8 md:py-4 md:text-base py-2 px-6 text-sm min-w-fit mr-4 bg-brand-orange rounded-r-md">
                Get Started
              </button>
              <div className="w-full flex items-center justify-start mt-6">
                <Image
                  alt="people"
                  src={people1}
                  width={44}
                  height={44}
                  className="border-white border-2 rounded-full"
                />
                <Image
                  alt="people"
                  src={people2}
                  width={44}
                  height={44}
                  className="border-white border-2 rounded-full -translate-x-4"
                />
                <Image
                  alt="people"
                  src={people3}
                  width={44}
                  height={44}
                  className="border-white border-2 rounded-full -translate-x-8"
                />
                <Image
                  alt="people"
                  src={people4}
                  width={44}
                  height={44}
                  className="border-white border-2 rounded-full -translate-x-12"
                />
                <Image
                  alt="people"
                  src={people5}
                  width={44}
                  height={44}
                  className="border-white border-2 rounded-full -translate-x-16"
                />

                <div
                  style={{ backgroundColor: "#13DED2" }}
                  className="flex justify-center items-center font-bold text-xs border-white border-2 rounded-full -translate-x-20   w-11 h-11"
                >
                  1.6 K
                </div>

                <p className="-translate-x-16 text-sm">
                  1,600 people requested access a visit in last 24 hours
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-cetner items-center">
            <Image
              className="pointer-events-none"
              alt="hero"
              src={hero}
              quality={100}
              width={900}
              height={900}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
