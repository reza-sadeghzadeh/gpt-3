import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogCardProps {
  image: StaticImageData;
}

const BlogCard = ({ image }: BlogCardProps) => {
  return (
    <div
      style={{ borderTopLeftRadius: 160 }}
      className="bg-brand-darkBlue card w-full flex justify-between flex-col h-full items-start  "
    >
      <div
        style={{ maxHeight: 515 }}
        className="w-full flex flex-col justify-between items-start"
      >
        <Image src={image} width={400} height={700} alt="" className="w-full" />
        <div className="p-6">
          <p className="text-sm font-light">Sep 26, 2021</p>
          <h4 className="mt-2 font-bold text-xl">
            GPT-3 and Open AI is the future. Let us exlore how it is?
          </h4>
        </div>
      </div>
      <Link className="p-6 text-sm" href={"/"}>
        Read Full Article
      </Link>
    </div>
  );
};

export default BlogCard;
