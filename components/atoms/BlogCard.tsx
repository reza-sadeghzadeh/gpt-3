import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogCardProps {
  image: StaticImageData;
}

const BlogCard = ({ image }: BlogCardProps) => {
  return (
    <div className="card w-full h-full felx justify-start">
      <Image src={image} width={600} height={700} alt="" className="w-full" />
      <div
        style={{ maxHeight: 515 }}
        className="bg-brand-darkBlue p-6 w-full h-full  flex flex-col justify-between items-start"
      >
        <div>
          <p className="text-base font-bold">Sep 26, 2021</p>
          <h4 className="mt-4">
            GPT-3 and Open AI is the future. Let us exlore how it is?
          </h4>
        </div>
        <Link href={"/"}>Read Full Article</Link>
      </div>
    </div>
  );
};

export default BlogCard;
