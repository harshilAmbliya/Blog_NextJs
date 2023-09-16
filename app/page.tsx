import React from "react";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/(auth)/auth/[...nextauth]/route";
import { StickyNavbar } from "@/components/Navbar";
import { BlogRelatedData } from "@/components/BlogRelatedData";
import { WhatsappMenu } from "@/components/WhatsappMenu";
import { SimpleCard } from "@/components/card";
import CustomCrousel from "@/components/Crousel";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { SimpleFooter } from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
type Props = {};
interface BlogData {
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
}
const page = async (props: Props) => {
  const data = await axios.get("http://localhost:3000/api/blog");
  const blogs: BlogData[] = await data.data;

  // const session = await getServerSession(authOptions);
  return (
    <div className="">
      {/* {(session?.user.id, session?.user.email)}
      <pre>{session?.user.name}</pre> */}
      
      <div className="">
        <WhatsappMenu />
      </div>
      <CustomCrousel />
      <BlogRelatedData />

      <div className=" container ">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl text-gray-800 py-8 px-6 font-bold">
            Top Blogs
          </h2>
          <Link href={"/blog/addblog"}>
            <Button>
              <span className="h-8 w-8 p-2">
                <Pencil className="h-full w-full" />
              </span>
              Add Blogs
            </Button>
          </Link>
        </div>
        <div className="py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
            {blogs.slice(0, 10).map((blog: BlogData) => {
              return (
                <div key={blog.id}>
                  <SimpleCard blog={blog} />
                </div>
              );
            })}
          </div>
          <Link href={'/blog'}>
            <Button className=" flex items-center justify-center text-center mx-auto py-2 px-5">
              Show More
            </Button>
          </Link>
        </div>
        <Testimonials />
      </div>
      <SimpleFooter />
    </div>
  );
};

export default page;
