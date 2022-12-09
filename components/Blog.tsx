import blog1 from "../public/img/blog/Rectangle 22-4.png";
import blog2 from "../public/img/blog/Rectangle 24.png";
import blog3 from "../public/img/blog/Rectangle 25.png";
import blog4 from "../public/img/blog/Rectangle 26.png";
import blog5 from "../public/img/blog/Rectangle 22.png";
import BlogCard from "./atoms/BlogCard";

const Blog = () => {
  return (
    <section className="gp3-container pb-32">
      <h1
        className="8xl:text-6xl text-5xl Manropebold text-gradient tracking-tighter 8xl:w-1/2 py-16"
        style={{ lineHeight: 1.1 }}
      >
        A lot is happening, <br /> We are blogging about it.
      </h1>
      <div className="flex justify-center items-start w-full">
        <div className="grid 8xl:grid-cols-4 8xl:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 md:grid-rows-3 grid-cols-1 grid-rows-5 items-stretch gap-10">
          <div className="md:col-span-2 md:row-span-2">
            <BlogCard image={blog1} />
          </div>
          <div className="col-span-1 row-span-1">
            <BlogCard image={blog2} />
          </div>
          <div className="col-span-1 row-span-1">
            <BlogCard image={blog3} />
          </div>
          <div className="col-span-1 row-span-1">
            <BlogCard image={blog5} />
          </div>
          <div className="col-span-1 row-span-1">
            <BlogCard image={blog4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
