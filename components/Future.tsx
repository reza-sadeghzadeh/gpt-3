import GradLine from "./atoms/GradLine";

const Future = () => {
  return (
    <section className="gp3-container">
      <div className="flex w-full max-lg:flex-col justify-between md:pt-20  items-start relative">
        <div
          style={{
            boxShadow: "rgb(255 255 255 / 35%) 0px 0px 120px 120px",
            height: 700,
            width: 700,
            left: "-40%",
            top: "-15%",
            backgroundColor: "rgb(255 255 255 / 34%);",
          }}
          className="absolute pointer-events-none rounded-full opacity-5 max-md:hidden  -z-10"
        />
        <div className="lg:w-1/2 w-full px-2 max-lg:mb-16 max-lg:text-center ">
          <h1
            className="text-gradiant 8xl:text-4xl text-3xl lg:w-2/3  Manropebold"
            style={{ lineHeight: 1.2 }}
          >
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <p className="text-brand-orange mt-12">
            Request Early Access to Get Started
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 max-lg:mx-auto flex flex-col justify-start items-start">
          <div className="w-full flex justify-between items-start max-md:flex-col">
            <div className="md:w-40 ">
              <GradLine />
              <h3 className="text-lg font-medium">
                Improving end distrusts instantly{" "}
              </h3>
            </div>
            <div className="max-md:mt-4 md:w-1/2">
              <p className="text-brand-textBlue">
                From they fine john he give of rich he. They age and draw mrs
                like. Improving end distrusts may instantly was household
                applauded.
              </p>
            </div>
          </div>
          <div className="w-full mt-10 8xl:mt-12 flex justify-between items-start max-md:flex-col ">
            <div className="md:w-40 ">
              <GradLine />
              <h3 className="text-lg font-medium">Become the tended active</h3>
            </div>
            <div className="max-md:mt-4 md:w-1/2">
              <p className="text-brand-textBlue">
                Considered sympathize ten uncommonly occasional assistance
                sufficient not. Letter of on become he tended active enable to.
              </p>
            </div>
          </div>
          <div className="w-full mt-10 8xl:mt-12 flex justify-between items-start max-md:flex-col ">
            <div className="md:w-40 ">
              <GradLine />
              <h3 className="text-lg font-medium">Message or am nothing</h3>
            </div>
            <div className="max-md:mt-4 md:w-1/2">
              <p className="text-brand-textBlue">
                Led ask possible mistress relation elegance eat likewise
                debating. By message or am nothing amongst chiefly address.
              </p>
            </div>
          </div>
          <div className="w-full mt-10 8xl:mt-12 flex justify-between items-start max-md:flex-col ">
            <div className="md:w-40 ">
              <GradLine />
              <h3 className="text-lg font-medium">Really boy law county</h3>
            </div>
            <div className="max-md:mt-4 md:w-1/2">
              <p className="text-brand-textBlue">
                Really boy law county she unable her sister. Feet you off its
                like like six. Among sex are leave law built now. In built table
                in an rapid blush.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
