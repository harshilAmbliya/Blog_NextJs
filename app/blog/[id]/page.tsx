import prisma from "@/prisma/prismadb";
import { Oswald } from "next/font/google";

const font = Oswald({ subsets: ["latin"] });
const page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const blog = await prisma.blog.findUnique({
    where: {
      id,
    },
  });
  // const blogUser = await prisma.user.findUnique({
  //   where:{
  //     id:blog?.userId
  //   }
  // })
  // console.log("blog",blog,"user",blogUser);
  if (!blog) {
    return <div>Blog post not found</div>;
  }
  return (
    <div className={`${font.className} text-2xl tracking-widest `}>
      <div className="p-6 ">
        <div className="  flex items-center justify-evenly">
          <img
            src={blog?.image} // Replace with your blog post image URL
            alt={blog?.title}
            className="w-2/4  rounded-lg p-11"
          />
          <div className="py-8 text-center">
            <p className="text-gray-600 mb-2 font-bold py-6">{blog?.slug}</p>
            <p className="text-gray-600 mb-2">{blog?.title}</p>
          </div>
        </div>

        <div className=" mt-4">
          <p className="text-gray-800 text-lg leading-relaxed first-letter:text-3xl px-8 ">
            {blog?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
