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
        <div className="flex justify-center items-center lg:flex-row flex-col-reverse max-lg:text-center">
          <div className="w-3/4 8xl:py-24 lg:py-16 max-lg:pb-24">
            <h1
              className="8xl:text-7xl  text-5xl Manropebold text-gradiant tracking-tighter opacity-90"
              style={{ lineHeight: 1.1 }}
            >
              Let’s Build Something amazing with GPT-3 OpenAI
            </h1>
            <p className="mt-12 8xl:mr-32 8xl:text-lg text-md text-brand-textBlue">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <div className="mt-12 w-full">
              <div className="flex w-full jsutify-start items-center max-md:flex-col">
                <input
                  className="px-6 8xl:py-4 py-3 max-md:rounded-md md:rounded-l-md bg-brand-darkBlue w-full md:w-2/3 outline-none placeholder:opacity-70"
                  type="text"
                  placeholder="Your Email Address"
                  name=""
                  id=""
                />
                <button className="8xl:px-8 px-4 8xl:py-4 py-3.5 8xl:text-base md:px-6 text-sm min-w-fit border-brand-orange max-md:text-brand-orange max-md:border-2 md:bg-brand-orange max-md:rounded-md max-md:mt-6  md:rounded-r-md">
                  Get Started
                </button>
              </div>

              <div className="w-full flex items-start md:items-center max-md:mt-12  justify-start max-lg:flex-col mt-6">
                <div className="flex min-w-fit items-center justify-start">
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
                    className="flex justify-center items-center shrink-0 text-black
                   font-bold text-xs border-white border-2 rounded-full -translate-x-20  w-11 h-11 lg: "
                  >
                    1.6 K
                  </div>
                </div>

                <p className="lg:-translate-x-16 md:-translate-x-12 text-sm text-left max-lg:mt-4">
                  1,600 people requested access a visit in last 24 hours
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 md:w-1/2 w-full flex justify-cetner items-center">
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
