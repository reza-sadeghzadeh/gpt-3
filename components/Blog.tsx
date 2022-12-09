import blog1 from "../public/img/blog/Rectangle 22-1.png";
import blog2 from "../public/img/blog/Rectangle 22-2.png";
import blog3 from "../public/img/blog/Rectangle 22-3.png";
import blog4 from "../public/img/blog/Rectangle 22-4.png";
import blog5 from "../public/img/blog/Rectangle 22.png";
import BlogCard from "./atoms/BlogCard";

const Blog = () => {
  return (
    <section className="gp3-container">
      <h1
        className="8xl:text-6xl text-5xl Manropebold text-gradiant tracking-tighter w-1/2 py-16"
        style={{ lineHeight: 1.1 }}
      >
        A lot is happening, <br /> We are blogging about it.
      </h1>
      <div className="flex justify-center items-start w-full mt-16 mb-64">
        <div className="grid grid-cols-4 grid-rows-2 gap-y-48">
          <div className="col-span-2 row-span-2 mr-24">
            <BlogCard image={blog4} />
          </div>
          <div className="col-span-1 row-span-1 -translate-x-12">
            <BlogCard image={blog2} />
          </div>
          <div className="col-span-1 row-span-1">
            <BlogCard image={blog3} />
          </div>
          <div className="col-span-1 row-span-1 -translate-x-12">
            <BlogCard image={blog5} />
          </div>
          <div className="col-span-1 row-span-1">
            <BlogCard image={blog1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
